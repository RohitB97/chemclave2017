'use strict';

class SignupController {
  //end-non-standard

  constructor(Auth, $state) {
      this.Auth = Auth;
      this.$state = $state;
    }
    //start-non-standard


  register(form) {
    this.submitted = true;

    if(this.user.accomodation_status){
      this.user.status_check: false;
    }

    if (form.$valid) {
      this.Auth.createUser({
          name: this.user.name,
          city: this.user.city,
          college: this.user.college,
          mobile: this.user.mobile,
          accomodation_status: this.user.accomodation_status,
          status_check: this.user.status_check,
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('main');
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
