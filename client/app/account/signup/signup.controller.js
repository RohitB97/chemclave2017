'use strict';

class SignupController {
  //end-non-standard

  constructor(Auth, $state, $rootScope, $http) {
      this.Auth = Auth;
      this.$state = $state;
      this.$rootScope = $rootScope;
      var self = this;

      $http.get("api/users/userCount").success(function(response){
         var userCount = response.length;
         self.signID = "CC17" + (1000 + userCount + 1).toString().slice(1);
       });  
    }
    //start-non-standard


  register(form) {
    this.submitted = true;
    
    if (form.$valid) {
      this.Auth.createUser({
          name: this.user.name,
          ID: this.signID,
          city: this.user.city,
          college: this.user.college,
          mobile: this.user.mobile,
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('login');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }

  }
}

angular.module('chemclaveApp')
  .controller('SignupController', SignupController);
