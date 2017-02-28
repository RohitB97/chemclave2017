'use strict';

(function(){

class CapComponent {
  constructor($scope, $http) {
    $scope.capregister = function(){
    	$http.post("api/capusers/", $scope.capuser).success(function(response){
            alert("Thanks for registering !");
            location.reload();
    	});
    };
  }
}

angular.module('chemclaveApp')
  .component('cap', {
    templateUrl: 'app/cap/cap.html',
    controller: CapComponent,
    controllerAs: 'capCtrl'
  });

})();
