"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; // Defining a intakePcl Model in mongoose
// Code modified from https://github.com/sahat/hackathon-starter

var intakePclSchema = new _mongoose2.default.Schema({
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
	field17: Number
});

exports.default = _mongoose2.default.model("intakePcl", intakePclSchema);