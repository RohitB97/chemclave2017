'use strict';

angular.module('chemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/events',
        template: '<events></events>'
      });
  });
