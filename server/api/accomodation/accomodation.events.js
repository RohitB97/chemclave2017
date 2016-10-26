/**
 * Accomodation model events
 */

'use strict';

import {EventEmitter} from 'events';
import Accomodation from './accomodation.model';
var AccomodationEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AccomodationEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Accomodation.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AccomodationEvents.emit(event + ':' + doc._id, doc);
    AccomodationEvents.emit(event, doc);
  }
}

export default AccomodationEvents;
