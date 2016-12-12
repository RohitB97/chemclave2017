'use strict';

angular.module('chemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('workshops', {
        url: '/workshops',
        template: '<workshops></workshops>'
      });
  });
