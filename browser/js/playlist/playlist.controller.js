'use strict';

juke.controller('PlaylistCtrl', function ($scope) {
	$scope.submitNewPlaylist = function() {
		console.log($scope.playlistName);
	}
});
