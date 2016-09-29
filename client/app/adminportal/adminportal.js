'use strict';

angular.module('chemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('adminportal', {
        url: '/adminportal',
        template: '<adminportal></adminportal>'
      });
  });
