'use strict';

juke.controller('SidebarCtrl', function ($scope,PlaylistFactory) {

 PlaylistFactory.fetchAll()
 .then(function(res){
 	$scope.playlists = res;
 })


});
