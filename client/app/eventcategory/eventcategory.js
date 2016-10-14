'use strict';

angular.module('chemclaveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventcategory', {
        url: '/eventcategory',
        template: '<eventcategory></eventcategory>'
      });
  });
