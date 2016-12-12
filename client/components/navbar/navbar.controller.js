'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth,$rootScope) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.CurrentUser = Auth.getCurrentUser;
  }

}

angular.module('chemclaveApp')
  .controller('NavbarController', NavbarController);
