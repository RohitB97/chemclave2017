'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket, Auth, $rootScope, $cookies, $state){
      $scope.LoggedIn = Auth.isLoggedIn;

      $scope.goToSettings = function(){
        $('#viewProfile').modal('hide');
        setTimeout(function(){$state.go('settings');},1000);
      };
      
      $scope.submit = function(){
       
       if(document.getElementById('upload').files.length > 0){

          var id = $cookies.get('userId');
          var file = document.getElementById('upload').files[0].name;

          $http.put('api/users/accomRequest/'+ id, file).success(function(){
            $http.put('api/users/accomPending/'+ id, id).success(function(){
               $('#submit').click();
            });
          });
        }    
      };
    }
  }

  angular.module('chemclaveApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
