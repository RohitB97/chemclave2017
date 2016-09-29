'use strict';

import mongoose from 'mongoose';

var RegistrationSchema = new mongoose.Schema({
  name: String,
  college: String,
  contact_number: Number,
  email: {type:String, lowercase:true},
  password: String,
  events: Array,
  user_id: String

},{timestamps:true});

export default mongoose.model('Registration', RegistrationSchema);
