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
   /*$(document).ready(function(){	
  	var x = document.getElementsByClassName('tabs');
  	console.log(x.length);
  	 for(var i=0; i < x.length; i++){
  	 	x[0].classList.add('anim');
  	 }
      //setTimeout(function(){$('.tabs').removeClass('anim');},8000);
     });*/  
  }); 