import React from "react"
import ReactDOM from "react-dom"

// ----------------------------------------------------
const intakeMessageStyle = {
	color: "red"
}

// ----------------------------------------------------
const Intake = React.createClass({

	getInitialState: function() {
		return {
			intakeMessage: ""
		}
	},

	_onIntakeSubmit: function(event) {
		event.preventDefault()
		//TODO check refs
		const field1 = document.querySelector('input[name="field1"]:checked').value;
		const field2 = document.querySelector('input[name="field2"]:checked').value;
		
		// Passed in via react-redux. Returns a promise.
		this.props.manualIntake({
			field1,
			field2
		})
		.then((intakeMessage) => {
			if (intakeMessage) {
				// report to the user is there was a problem during registration
				this.setState({
					intakeMessage
				})			
			}	
		})		

	},

	render: function() {
		return(
			<div>
				<h2>Intake</h2>	
				<form onSubmit={this._onIntakeSubmit}>	
					<label>field1</label>
					<input type="radio" value="1" name="field1" />
					<input type="radio" value="2" name="field1" />
					<input type="radio" value="3" name="field1" />
					<input type="radio" value="4" name="field1" />
					<input type="radio" value="5" name="field1" />
					<br/>
					<label>field2</label>
					<input type="radio" value="1" name="field2" />
					<input type="radio" value="2" name="field2" />
					<input type="radio" value="3" name="field2" />
					<input type="radio" value="4" name="field2" />
					<input type="radio" value="5" name="field2" />
					<br/>
					<label>field3</label>
					<input type="radio" value="1" name="field3" />
					<input type="radio" value="2" name="field3" />
					<input type="radio" value="3" name="field3" />
					<input type="radio" value="4" name="field3" />
					<input type="radio" value="5" name="field3" />
					<br/>
					<label>field4</label>
					<input type="radio" value="1" name="field4" />
					<input type="radio" value="2" name="field4" />
					<input type="radio" value="3" name="field4" />
					<input type="radio" value="4" name="field4" />
					<input type="radio" value="5" name="field4" />
					<br/>
					<label>field5</label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<input type="submit" value="save" /> <span style={intakeMessageStyle}>{ this.state.saveMessage }</span>
				</form>	
			</div>
		)	
	}
})

export default Intake