'use strict';

(function(){

class EventsComponent {
  constructor($scope, $http, Auth) {
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
          'ChemEDart',
          'ChemAdmad',
          'Treasurehunt'
        ];

    $scope.participant = Auth.getCurrentUser;
    $scope.isLoggedIn = Auth.isLoggedIn;    

    $http.get('http://erp.chemclave.org/api/events').success(function(response){
    	$scope.festEvents = response.slice(0,15);
    });

    $scope.triggerEvent = function(event){
      $scope.currentEvent = event;
    };

    $scope.Check = function(name){

     if(Auth.isLoggedIn())
     { 
      function checkName(key){
        return key==name;
      };
      
      var index = $scope.participant().events.findIndex(checkName);

      if(index == -1)
       return false;
      else
       return true;
     }       
    };

    function eventCheck(event){
      return event!=$scope.currentEvent.name;
    };

    function participantCheck(user){
      return user.ID!=$scope.participant().ID;
    };

    //event register

    $scope.eventRegister = function(){
      $scope.currentEvent.registrations.push($scope.participant());
      $scope.participant().events.push($scope.currentEvent.name);  
 
      $http.put('http://erp.chemclave.org/api/events/'+$scope.currentEvent._id, $scope.currentEvent)
      .success(function(response){
         $http.put('api/users/register/'+$scope.participant()._id, $scope.participant())
         .success(function(response){
            $('#eventDetails').modal('hide');
         });
      });
    };

    //event unregister

    $scope.eventUnregister = function(){
      $scope.currentEvent.registrations = $scope.currentEvent.registrations.filter(participantCheck);
      $scope.participant().events = $scope.participant.events.filter(eventCheck);  

      $http.put('http://erp.chemclave.org/api/events/'+$scope.currentEvent._id, $scope.currentEvent)
      .success(function(response){
         $http.put('api/users/register/'+$scope.participant()._id, $scope.participant())
         .success(function(response){
            $('#eventDetails').modal('hide');
         });
      });
    };       
  }
}

angular.module('chemclaveApp')
  .component('events', {
    templateUrl: 'app/events/events.html',
    controller: EventsComponent
  });

})();
