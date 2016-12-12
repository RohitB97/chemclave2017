'use strict';

angular.module('chemclaveApp')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E'
  }))

  .directive('mobilenav', () => ({
    templateUrl: 'components/navbar/mobilenav.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }));  
