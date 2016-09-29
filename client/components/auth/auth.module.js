'use strict';

angular.module('chemclaveApp.auth', ['chemclaveApp.constants', 'chemclaveApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
