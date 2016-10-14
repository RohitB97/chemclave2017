'use strict';

(function(){

class EventsComponent {
  constructor() {
  }
}

angular.module('chemclaveApp')
  .component('events', {
    templateUrl: 'app/events/events.html',
    controller: EventsComponent
  });

})();
