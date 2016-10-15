'use strict';

import mongoose from 'mongoose';

var EventSchema = new mongoose.Schema({
  name: String,
  info: String,
  problem_statement: String,
  registrations: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
  active: Boolean
});

export default mongoose.model('Event', EventSchema);
