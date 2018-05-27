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
			<div className="intake-cpl">
				<h2>Instruction to patient: Below is a list of problems and complaints that veterans sometimes have in response to stressful life
experiences. Please read each one carefully, put an “X” in the box to indicate how much you have been bothered by that
problem in the last month. </h2>	
				<form onSubmit={this._onIntakeSubmit}>	
					<label>Repeated, disturbing memories, thoughts, or images of a stressful experience from the past? </label>
					<input type="radio" value="1" name="field1" />
					<input type="radio" value="2" name="field1" />
					<input type="radio" value="3" name="field1" />
					<input type="radio" value="4" name="field1" />
					<input type="radio" value="5" name="field1" />
					<br/>
					<label>Repeated, disturbing dreams of a stressful
experience from the past? </label>
					<input type="radio" value="1" name="field2" />
					<input type="radio" value="2" name="field2" />
					<input type="radio" value="3" name="field2" />
					<input type="radio" value="4" name="field2" />
					<input type="radio" value="5" name="field2" />
					<br/>
					<label>Suddenly acting or feeling as if a stressful experience
were happening again (as if you were reliving it)? </label>
					<input type="radio" value="1" name="field3" />
					<input type="radio" value="2" name="field3" />
					<input type="radio" value="3" name="field3" />
					<input type="radio" value="4" name="field3" />
					<input type="radio" value="5" name="field3" />
					<br/>
					<label>Feeling very upset when something reminded you of
a stressful experience from the past?</label>
					<input type="radio" value="1" name="field4" />
					<input type="radio" value="2" name="field4" />
					<input type="radio" value="3" name="field4" />
					<input type="radio" value="4" name="field4" />
					<input type="radio" value="5" name="field4" />
					<br/>
					<label>Having physical reactions (e.g., heart pounding,
trouble breathing, or sweating) when something
reminded you of a stressful experience from the
past? </label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Avoid thinking about or talking about a stressful
experience from the past or avoid having feelings
related to it? </label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Avoid activities or situations because they remind
you of a stressful experience from the past? </label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Trouble remembering important parts of a stressful
experience from the past? </label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Loss of interest in things that you used to enjoy? </label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Feeling distant or cut off from other people? </label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Feeling emotionally numb or being unable to have
loving feelings for those close to you? </label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Feeling as if your future will somehow be cut short? </label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Trouble falling or staying asleep?</label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Feeling irritable or having angry outbursts? </label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Having difficulty concentrating? </label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Being “super alert” or watchful on guard? </label>
					<input type="radio" value="1" name="field5" />
					<input type="radio" value="2" name="field5" />
					<input type="radio" value="3" name="field5" />
					<input type="radio" value="4" name="field5" />
					<input type="radio" value="5" name="field5" />
					<br/>
					<label>Feeling jumpy or easily startled? </label>
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