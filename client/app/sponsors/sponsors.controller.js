'use strict';

(function(){

class SponsorsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('chemclaveApp')
  .component('sponsors', {
    templateUrl: 'app/sponsors/sponsors.html',
    controller: SponsorsComponent,
    controllerAs: 'sponsorsCtrl'
  });

})();
