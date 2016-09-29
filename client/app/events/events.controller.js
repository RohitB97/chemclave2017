'use strict';

(function(){

class EventsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('chemclaveApp')
  .component('events', {
    templateUrl: 'app/events/events.html',
    controller: EventsComponent,
    controllerAs: 'eventsCtrl'
  });

})();
