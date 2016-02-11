juke.factory('PlaylistFactory', function ($http, SongFactory) {

    var cachedPlaylists = [];

    var PlaylistFactory = {};

    PlaylistFactory.fetchAll = function () {
        return $http.get('/api/playlists')
        .then(function (response) {
            angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };

    PlaylistFactory.fetchById = function (playlistID) {
        return $http.get('/api/playlists/'+playlistID)
        .then(function (response) {
            response.data.songs.forEach(function(song) {
                SongFactory.convert(song);
            })
          return response.data;
        });
    };

    PlaylistFactory.create = function (data) {
        return $http.post('/api/playlists', data)
        .then(function (response) {
            var playlist = response.data
            cachedPlaylists.push(playlist);
            return playlist;
        });
    };

    PlaylistFactory.addSongToPlaylist = function(playlist, song) {
        return $http.post('/api/playlists/' + playlist._id + '/songs', {song: song})
        .then(function(response) {
            SongFactory.convert(song);
            playlist.songs.push(song);
            return response.data;
        })
        .catch(function(err) {
            console.error(err);
        });
    };

    return PlaylistFactory;

});
