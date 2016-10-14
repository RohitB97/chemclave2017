'use strict';

(function(){

class EventcategoryComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('chemclaveApp')
  .component('eventcategory', {
    templateUrl: 'app/eventcategory/eventcategory.html',
    controller: EventcategoryComponent
  });

})();
