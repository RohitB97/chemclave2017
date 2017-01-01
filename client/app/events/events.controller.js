'use strict';

(function(){

class EventsComponent {
  constructor($scope,$http) {
    $scope.eventImages = [
          'ChemEDebate',
          'Censino',
          'Paper&Posterpresentation',
          'Cheminnovate',
          'ProjectX',
          'Disastersceneinvestigation',
          'ChemicalEntrepreneurship',
          'AquaRocket',
          'ChemicalX',
          'Openquiz',
          'Puzzlechamp',
          'Chemieconnexion',
          'CheQ',
          'ChemEDart',
          'ChemAdmad',
          'Treasurehunt'
        ];

    $http.get('http://erp.chemclave.org/api/events').success(function(response){
    	$scope.festEvents = response.slice(0,16);
    });      
  }
}

angular.module('chemclaveApp')
  .component('events', {
    templateUrl: 'app/events/events.html',
    controller: EventsComponent
  });

})();
