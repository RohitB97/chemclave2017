'use strict';

(function(){

class WorkshopsComponent {
  constructor($scope, $http, Auth, $state) {
    $scope.workshopImages = [
     'AspenPlus+SimulationCompetition',
     'Rprogramming+Competition',
     'Comsolworkshop',
     'ArtofResearchWriting',
     'ForensicsWorkshop'
    ];

    $scope.participant = Auth.getCurrentUser;
    $scope.isLoggedIn = Auth.isLoggedIn;

    $http.get('http://erp.chemclave.org/api/events').success(function(response){
    	$scope.festWorkshops = response.slice(15);
    });

    $scope.triggerWorkshop = function(workshop){
      $scope.currentWorkshop = workshop;
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

    function workshopCheck(workshop){
      return workshop!=$scope.currentWorkshop.name;
    };

    function participantCheck(user){
      return user.ID!=$scope.participant().ID;
    };

    //workshop register

    $scope.workshopRegister = function(){
      $scope.currentWorkshop.registrations.push($scope.participant());
      $scope.participant().events.push($scope.currentWorkshop.name);  

      $http.put('http://erp.chemclave.org/api/events/'+$scope.currentWorkshop._id, $scope.currentWorkshop)
      .success(function(response){
         $http.put('api/users/register/'+$scope.participant()._id, $scope.participant())
         .success(function(response){
            $('#workshopDetails').modal('hide');
            location.reload();
         });
      });
    };

   //workshop unregister
   
    $scope.workshopUnregister = function(){
      $scope.currentWorkshop.registrations = $scope.currentWorkshop.registrations.filter(participantCheck);
      $scope.participant().events = $scope.participant().events.filter(workshopCheck);  

      $http.put('http://erp.chemclave.org/api/events/'+$scope.currentWorkshop._id, $scope.currentWorkshop)
      .success(function(response){
         $http.put('api/users/register/'+$scope.participant()._id, $scope.participant())
         .success(function(response){
            $('#workshopDetails').modal('hide');
            location.reload();
         });
      });
    };

    $scope.techotron = function(){
      open("http://www.techtrontechnologies.com/workshops@iit-madras.html");
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
