'use strict';

(function() {

  class MainController {
   constructor($scope){
       $scope.techotron = function(){
          open("http://www.techtrontechnologies.com/workshops@iit-madras.html");
       };
    }
  }

  angular.module('chemclaveApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
