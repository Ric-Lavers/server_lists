import mongoose from 'mongoose'

const Schema = mongoose.Schema

const personSchema = new Schema({
	name: String,
	email: String,
	phoneNumber: String,
  created_on: {
    type: Date,
    default: Date.now()
  }
});

export default personSchema 