'use strict';

(function(){

class AdminportalComponent {
  constructor($scope) {
    $scope.show_options = 'true';
  }
}

angular.module('chemclaveApp')
  .component('adminportal', {
    templateUrl: 'app/adminportal/adminportal.html',
    controller: AdminportalComponent
  });

})();
