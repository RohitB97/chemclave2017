'use strict';

angular.module('chemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/eventcategory/:event',
        template: '<events></events>'
      });
  });
