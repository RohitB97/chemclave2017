'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth,$rootScope) {
    $rootScope.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    $rootScope.CurrentUser = Auth.getCurrentUser;
  }

}

angular.module('chemclaveApp')
  .controller('NavbarController', NavbarController);
