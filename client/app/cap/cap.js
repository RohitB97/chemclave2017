'use strict';

angular.module('chemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cap', {
        url: '/cap',
        template: '<cap></cap>'
      });
  });
