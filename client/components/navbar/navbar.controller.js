'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $state) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.CurrentUser = Auth.getCurrentUser;

   var state = '.' + $state.current.name + '_tab';

   $(state).css('display','none');
   
   var active_state = '.' + $state.current.name + '_C';

   $(active_state).css('display','inline');

  }

}

angular.module('chemclaveApp')
  .controller('NavbarController', NavbarController);
