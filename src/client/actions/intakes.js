import axios from "axios"
import { browserHistory } from "react-router"
import * as types from "../constants"


// "Register" action creators
function beginIntake() {
	return { type: types.SAVE_INTAKE }
}

function intakeSuccess() {
	return { type: types.SAVE_SUCCESS_INTAKE }
}

function intakeError() {
	return { type: types.SAVE_ERROR_INTAKE }
}

function makeUserRequest(method, data, api="/login") {
	// returns a Promise
	return axios({
		method: method,
		url: api,
		data: data
	})
}


export function manualIntake(data) {	
	
	return dispatch => {
		dispatch(beginIntake())

		return makeUserRequest("post", data, "/intake")	
			.then(response => {
				if (response.data.success) {					
					dispatch(intakeSuccess())
					dispatch(manualIntake(data, "/"))
				} else {					
					dispatch(intakeError())
					let intakeMessage = response.data.message
					return intakeMessage
				}
			})
			.catch(response => {
			    if (response instanceof Error) {
			      // Something happened in setting up the request that triggered an Error
			      console.log('Error', response.message);
			    }
		    })
	}

}

export function getIntake() {	
	return dispatch => {
		axios({
			method: "get",
			url: "intakeScore",
			data: {}
		})
		.then(response => {
			if (response.data.user) {					
				dispatch( {
					type: "SET_INTAKE_DATA",
					data : response.data
				})
			}
		})
		.catch(response => {
			if (response instanceof Error) {
				
			}
		})
	}

}
