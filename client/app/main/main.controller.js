'use strict';

(function() {

  class MainController {
   constructor($scope, Auth, $http, $cookies){
       $scope.techotron = function(){
          open("http://www.techtrontechnologies.com/workshops@iit-madras.html");
       };

      $scope.accomresult = function(key){
        var id = $cookies.get('userId');
        $http.put("api/users/interest/" + id,{value:key}).success(function(response){
            alert('Your response has been recorded !');
            location.reload();
         });
      };
    
      function accomprompt(){
       if(Auth.isLoggedIn()){ 
        if(!Auth.getCurrentUser().accomodation_interest){
          $('#accomprompt').modal('show');
        }
       }
      };

      setTimeout(accomprompt,1000);

    }
  }

  angular.module('chemclaveApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
