'use strict';

import mongoose from 'mongoose';

var RegistrationSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  event: String

},{timestamps:true});

export default mongoose.model('Registration', RegistrationSchema);
