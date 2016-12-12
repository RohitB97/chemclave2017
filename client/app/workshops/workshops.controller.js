'use strict';

(function(){

class WorkshopsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('chemclaveApp')
  .component('workshops', {
    templateUrl: 'app/workshops/workshops.html',
    controller: WorkshopsComponent,
    controllerAs: 'workshopsCtrl'
  });

})();
