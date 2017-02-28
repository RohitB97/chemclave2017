'use strict';

import mongoose from 'mongoose';

var CapuserSchema = new mongoose.Schema({
  name: String,
  college: String,
  year: String,
  city: String,
  mobile: Number,
  email: String,
  address: String
});

export default mongoose.model('Capuser', CapuserSchema);
