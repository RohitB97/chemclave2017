'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket, Auth, $rootScope) {

    $rootScope.CurrentUser = Auth.getCurrentUser();
      
    }

    $onInit() {

    }

    /**addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }**/
  }

  angular.module('chemclaveApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
