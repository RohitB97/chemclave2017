'use strict';

(function(){

class ContactsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('chemclaveApp')
  .component('contacts', {
    templateUrl: 'app/contacts/contacts.html',
    controller: ContactsComponent,
    controllerAs: 'contactsCtrl'
  });

})();
