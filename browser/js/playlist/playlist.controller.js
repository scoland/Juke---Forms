'use strict';

juke.controller('PlaylistCtrl', function ($scope, $log, PlaylistFactory,$stateParams,$state, SongFactory, PlayerFactory) {
	$scope.submitNewPlaylist = function() {
		PlaylistFactory.create({name:$scope.playlistName})
		.then(function(res){
			$scope.playlistName = '';
			$state.go('playlist',{id:res._id});

		})
	};

	SongFactory.fetchAll()
		.then(function(songs) {
			$scope.allSongs = songs;
		})
		.catch($log);


	$scope.addSongToPlaylist = function(playlist,song){
		PlaylistFactory.addSongToPlaylist(playlist,song);
	    $scope.selectedSong = null;
    }


	PlaylistFactory.fetchById($stateParams.id)
	.then(function(response){
		$scope.playlist = response;
	})

	$scope.getCurrentSong = function () {
	return PlayerFactory.getCurrentSong();
	};

	$scope.isPlaying = function (song) {
	return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
	};

	$scope.toggle = function (song) {
	    if (song !== PlayerFactory.getCurrentSong()) {
	      PlayerFactory.start(song, $scope.playlist.songs);
	    } else if ( PlayerFactory.isPlaying() ) {
	      PlayerFactory.pause();
	    } else {
	      PlayerFactory.resume();
	    }
	  };

});
