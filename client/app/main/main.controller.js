'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket, Auth, $rootScope, $cookies, $state){
      $scope.LoggedIn = Auth.isLoggedIn;

      $scope.CurrentUser = Auth.getCurrentUser;

      $scope.goToSettings = function(){
        $('#viewProfile').modal('hide');
        setTimeout(function(){$state.go('settings');},1000);
      };

      //submit receipt
      
      $scope.submit = function(){
       
       if(document.getElementById('upload').files.length > 0){

          var id = $cookies.get('userId');
          var file = document.getElementById('upload').files[0].name;

          $http.put('api/users/accomRequest/'+ id, {name:file}).success(function(response){
            $('#submit').click();
            console.log(response);
          });
        }    
      };

     //pop up
      //setTimeout(function(){$('#popup').modal('show');},2000); 
    }
  }

  angular.module('chemclaveApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
