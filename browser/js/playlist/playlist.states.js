'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlist/new',
    templateUrl: '/js/playlist/templates/playlist-form.html',
    controller: 'PlaylistCtrl'
    // resolve: {
    //   allAlbums: function (AlbumFactory) {
    //     return AlbumFactory.fetchAll();
    //   }
    // }
  });
});
