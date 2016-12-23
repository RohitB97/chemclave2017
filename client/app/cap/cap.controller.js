'use strict';

(function(){

class CapComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('chemclaveApp')
  .component('cap', {
    templateUrl: 'app/cap/cap.html',
    controller: CapComponent,
    controllerAs: 'capCtrl'
  });

})();
