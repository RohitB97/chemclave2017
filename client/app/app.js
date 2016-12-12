'use strict';

angular.module('chemclaveApp', ['chemclaveApp.auth', 'chemclaveApp.admin', 'chemclaveApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })

  .run(function($rootScope,$http){
     $http.get("api/users/userCount").success(function(response){
         $rootScope.userCount = response.length;
      });
  }); 