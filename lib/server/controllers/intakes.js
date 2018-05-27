"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _intake = require("../models/intake.pcl");

var _intake2 = _interopRequireDefault(_intake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.save = function (req, res, next) {

	_intake2.default.findOne({ user: req.user.id }, function (err, existingIntake) {
		// is user already passed the intake?
		//console.log('existingIntake: ' + existingIntake);
		if (existingIntake) {
			res.json({ success: false, message: "user already passed the intake" });
			return;
		}
		// go ahead and create the new user
		else {
				var intakeData = Object.assign({ user: req.user.id }, req.body);
				_intake2.default.create(intakeData, function (err) {
					if (err) {
						console.error(err);
						res.json({ success: false });
						return;
					}
					res.json({ success: true });
					return;
				});
			}
	});
};

exports.getScore = function (req, res, next) {

	_intake2.default.findOne({ user: req.user.id }, function (err, existingIntake) {
		// is user already passed the intake?

		if (!existingIntake) {
			res.json({ success: false, message: "user didn't passed the intake" });
			return;
		}
		// go ahead and create the new user
		else {
				//var intakeData = Object.assign({user: req.user.id}, req.body);

				res.json(existingIntake);
				return;
			}
	});
};