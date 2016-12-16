/**
 * Capuser model events
 */

'use strict';

import {EventEmitter} from 'events';
import Capuser from './capuser.model';
var CapuserEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CapuserEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Capuser.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CapuserEvents.emit(event + ':' + doc._id, doc);
    CapuserEvents.emit(event, doc);
  }
}

export default CapuserEvents;
