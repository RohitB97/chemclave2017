'use strict';

angular.module('chemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('team', {
        url: '/team',
        template: '<team></team>'
      });
  });
