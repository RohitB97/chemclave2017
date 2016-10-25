'use strict';

(function(){

class GalleryComponent {
  constructor($scope) {
    $scope.images = [
    {src:"../../assets/images/sample.jpg"},
    {src:"../../assets/images/sample.jpg"},
    {src:"../../assets/images/sample.jpg"},
    {src:"../../assets/images/sample.jpg"},
    {src:"../../assets/images/sample.jpg"},
    {src:"../../assets/images/sample.jpg"},
    {src:"../../assets/images/sample.jpg"},
    {src:"../../assets/images/sample.jpg"},
    {src:"../../assets/images/sample.jpg"},
    {src:"../../assets/images/sample.jpg"}
    ];
  }
}

angular.module('chemclaveApp')
  .component('gallery', {
    templateUrl: 'app/gallery/gallery.html',
    controller: GalleryComponent,
    controllerAs: 'galleryCtrl'
  });

})();
