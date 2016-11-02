'use strict';

(function(){

class EventsComponent {
  constructor($scope,$http) {
    $scope.categoryClick = function(){
       
    }

  }
}

angular.module('chemclaveApp')
  .component('events', {
    templateUrl: 'app/events/events.html',
    controller: EventsComponent
  });

})();
