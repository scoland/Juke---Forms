'use strict';

juke.factory('SongFactory', function ($http) {

  return {
  	fetchAll: function() {
			return $http.get('/api/songs')
		    .then(response => response.data);
  	},
    convert: function (song) {
      song.audioUrl = '/api/songs/' + song._id + '.audio';
      return song;
    }
  };

});
