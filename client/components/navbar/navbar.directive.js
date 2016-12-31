'use strict';

angular.module('chemclaveApp')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }))

  .directive('mobilenav', () => ({
    templateUrl: 'components/navbar/mobilenav.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }))

  .directive('greeting', () => ({
    templateUrl: 'components/navbar/customnav.html',
    restrict: 'E',
    controller: 'greetingController',
    controllerAs: 'nav'
  }))

  .controller('greetingController',['$state','$scope', function($state,$scope){
       toastr.options = {
       "closeButton": true,
       "debug": false,
       "newestOnTop": true,
       "progressBar": false,
       "positionClass": "toast-top-right",
       "preventDuplicates": true,
       "showDuration": "300",
       "hideDuration": "1000",
       "timeOut": "5000",
       "showEasing": "swing",
       "hideEasing": "linear",
       "showMethod": "fadeIn",
       "hideMethod": "fadeOut"
      };

      $scope.hide = function(){return $state.current.name;}
  
  }]); 
