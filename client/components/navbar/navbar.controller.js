'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $state, $scope) {
    this.isCollapsed = true;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.CurrentUser = Auth.getCurrentUser;

    $scope.hide = function(){return $state.current.name;};

    /* Open when someone clicks on the span element */
       $scope.openNav=function () {
                 document.getElementById("myNav").style.height = "100%";
                };

/* Close when someone clicks on the "x" symbol inside the overlay */
      $scope.closeNav=function () {
                 document.getElementById("myNav").style.height = "0%";
                }; 

  }

}

angular.module('chemclaveApp')
  .controller('NavbarController', NavbarController);
