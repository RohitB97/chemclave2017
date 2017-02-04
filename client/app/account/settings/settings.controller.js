'use strict';

class SettingsController {

  constructor(Auth,$scope) {
    this.Auth = Auth;
    $scope.CurrentUser = Auth.getCurrentUser;

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
  }

  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}

angular.module('chemclaveApp')
  .controller('SettingsController', SettingsController);
