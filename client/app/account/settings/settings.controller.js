'use strict';

class SettingsController {

  constructor(Auth,$scope) {
    this.Auth = Auth;
    $scope.CurrentUser = Auth.getCurrentUser;
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
