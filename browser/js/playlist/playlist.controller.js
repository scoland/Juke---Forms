'use strict';

juke.controller('PlaylistCtrl', function ($scope,PlaylistFactory,$stateParams,$state) {
	$scope.submitNewPlaylist = function() {
		PlaylistFactory.create({name:$scope.playlistName})
		.then(function(res){
			$scope.playlistName = '';
			$state.go('playlist',{id:res._id});

		})
	}


	console.log($stateParams);
	PlaylistFactory.fetchById($stateParams.id)
	.then(function(response){
		$scope.playlist = response;
	})

});
