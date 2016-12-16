'use strict';

import mongoose from 'mongoose';

var CapuserSchema = new mongoose.Schema({
  name: String,
  college: String,
  department: String,
  POR: String,
  city: String,
  mobile: Number,
  email: String,
  SOP: String,
});

export default mongoose.model('Capuser', CapuserSchema);
