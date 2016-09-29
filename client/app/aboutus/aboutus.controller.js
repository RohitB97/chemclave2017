'use strict';

(function(){

class AboutusComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('chemclaveApp')
  .component('aboutus', {
    templateUrl: 'app/aboutus/aboutus.html',
    controller: AboutusComponent,
    controllerAs: 'aboutusCtrl'
  });

})();
