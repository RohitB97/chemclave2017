'use strict';

angular.module('chemclaveApp', ['chemclaveApp.auth', 'chemclaveApp.admin', 'chemclaveApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })

  /*.run(function($rootScope){
  	$rootScope
      .$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){
           $(".load_main").css("display","block");       
           $(".userView").css("display","none");
       });
    
    $rootScope
      .$on('$stateChangeSuccess',
         function(event, toState, toParams, fromState, fromParams){ 
            setTimeout(function(){$(".load_main").css("display","none");},3500);
  	        setTimeout(function(){$(".userView").css("display","block");},3500)
          });
  })*/

  .controller("indexCtrl",["$rootScope","$http",function($rootScope,$http){
     $http.get("api/users/userCount").success(function(response){
         $rootScope.userCount = response.length;
         console.log(response.length);
      })
  
  }]); 