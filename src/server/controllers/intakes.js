import mongoose from "mongoose"
import IntakePcl from "../models/intake.pcl"

exports.save = function(req, res, next) {
	
	IntakePcl.findOne({ user: req.user.id }, (err, existingIntake) => {
		// is user already passed the intake?
		//console.log('existingIntake: ' + existingIntake);
		if (existingIntake) {			
			res.json({ success: false, message: "user already passed the intake" })
			return 
		}
		// go ahead and create the new user
		else {
			var intakeData = Object.assign({user: req.user.id}, req.body);
			IntakePcl.create(intakeData, (err) => {
				if (err) {
					console.error(err)
					res.json({ success: false })
					return
				}
				res.json({ success: true })
				return 
			})
		}
	})

}


exports.getScore = function(req, res, next) {
	
	IntakePcl.findOne({ user: req.user.id }, (err, existingIntake) => {
		// is user already passed the intake?
		
		if (!existingIntake) {			
			res.json({ success: false, message: "user didn't passed the intake" })
			return 
		}
		// go ahead and create the new user
		else {
			//var intakeData = Object.assign({user: req.user.id}, req.body);
			
				res.json(existingIntake)
				return 
			
		}
	})

}