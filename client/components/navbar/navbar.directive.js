'use strict';

angular.module('chemclaveApp')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }))

  .directive('mobilenav', () => ({
    templateUrl: 'components/navbar/mobilenav.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }))

  .directive('customnav', () => ({
    templateUrl: 'components/navbar/customnav.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  })); 
