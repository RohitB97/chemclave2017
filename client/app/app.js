'use strict';

angular.module('chemclaveApp', ['chemclaveApp.auth', 'chemclaveApp.admin', 'chemclaveApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })

  .run(function($rootScope, $http){
     $http.get("http://erp.chemclave.org/api/events/").success(function(response){
         $rootScope.festEvents = response;
     });
  }); 