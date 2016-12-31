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

    var current = '#' + $state.current.name + 'id';

     var state = $state.current.name + '_tab';

     var active_state = $state.current.name + '_C';

     $(current).removeClass(state);

     $(current).addClass(active_state);

  }

}

angular.module('chemclaveApp')
  .controller('NavbarController', NavbarController);
