'use strict';

(function(){

class WorkshopsComponent {
  constructor($scope,$http) {
    $scope.workshopImages = [
     'AspenPlus+SimulationCompetition',
     'Rprogramming+Competition',
     'Comsolworkshop',
     'ArtofResearchWriting',
     'ForensicsWorkshop'
    ];

    $http.get('http://erp.chemclave.org/api/events').success(function(response){
    	$scope.festWorkshops = response.slice(15);
    });

    $scope.triggerWorkshop = function(workshop){
      $scope.currentWorkshop = workshop;
    };

  }
}

angular.module('chemclaveApp')
  .component('workshops', {
    templateUrl: 'app/workshops/workshops.html',
    controller: WorkshopsComponent,
    controllerAs: 'workshopsCtrl'
  });

})();
