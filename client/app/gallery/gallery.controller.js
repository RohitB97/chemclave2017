'use strict';

(function(){

class GalleryComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('chemclaveApp')
  .component('gallery', {
    templateUrl: 'app/gallery/gallery.html',
    controller: GalleryComponent,
    controllerAs: 'galleryCtrl'
  });

})();
