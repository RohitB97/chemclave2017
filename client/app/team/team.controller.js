'use strict';

(function(){

class TeamComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('chemclaveApp')
  .component('team', {
    templateUrl: 'app/team/team.html',
    controller: TeamComponent,
    controllerAs: 'teamCtrl'
  });

})();
