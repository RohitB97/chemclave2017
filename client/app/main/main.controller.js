'use strict';

(function() {

  class MainController {
   constructor($scope, Auth, $http, $cookies){

      $scope.submit = function(){
       
       if(document.getElementById('upload').files.length > 0){

          var id = $cookies.get('userId');
          var file = document.getElementById('upload').files[0].name;

          $http.put('api/users/accomRequest/'+ id, {name:file}).success(function(response){
            $('#submit').click();
          });
        }

       else
        alert('No file has been uploaded');     
      };
       
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

        if(Auth.getCurrentUser().accomodation_interest == 'true'){
         if(!Auth.getCurrentUser().accomodation_status || Auth.getCurrentUser().accomodation_status=="Rejected") 
          $('#accomRules').modal('show');
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
