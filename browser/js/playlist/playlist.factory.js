juke.factory('PlaylistFactory', function ($http) {

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

    return PlaylistFactory;

});