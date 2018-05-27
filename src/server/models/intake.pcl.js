// Defining a intakePcl Model in mongoose
// Code modified from https://github.com/sahat/hackathon-starter

import mongoose from "mongoose"
var Schema = mongoose.Schema;

const intakePclSchema = new mongoose.Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	field1: Number,
	field2: Number,
	field3: Number,
	field4: Number,
	field5: Number,
	field6: Number,
	field7: Number,
	field8: Number,
	field9: Number,
	field10: Number,
	field11: Number,	
	field12: Number,
	field13: Number,
	field14: Number,
	field15: Number,
	field16: Number,
	field17: Number,
})




export default mongoose.model("intakePcl", intakePclSchema)

