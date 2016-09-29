'use strict';

(function(){

class AdminportalComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('chemclaveApp')
  .component('adminportal', {
    templateUrl: 'app/adminportal/adminportal.html',
    controller: AdminportalComponent,
    controllerAs: 'adminportalCtrl'
  });

})();
