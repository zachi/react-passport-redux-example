import React from "react"
import ReactDOM from "react-dom"

// ----------------------------------------------------
const registerMessageStyle = {
	color: "red"
}

// ----------------------------------------------------
class Register extends React.Component{
	
	constructor(props) {
		super(props);
		this.state ={
			registerMessage: ""
		}
		this._onRegisterSubmit = this._onRegisterSubmit.bind(this)
	}

	

	_onRegisterSubmit(event) {
		event.preventDefault()
		const email = ReactDOM.findDOMNode(this.refs.email).value
		const password = ReactDOM.findDOMNode(this.refs.password).value
		
		// Passed in via react-redux. Returns a promise.
		this.props.manualRegister({
			email,
			password
		})
		.then((registerMessage) => {
			if (registerMessage) {
				// report to the user is there was a problem during registration
				this.setState({
					registerMessage
				})			
			}	
		})		

	}

	render() {
		return(
			<div>
				<h2>Register</h2>	
				<form onSubmit={this._onRegisterSubmit}>		
					<input type="email" ref="email" placeholder="Email"/><br/>
					<input type="password" ref="password" placeholder="Password"/><br/>					
					<input type="submit" value="Register" /> <span style={registerMessageStyle}>{ this.state.registerMessage }</span>
				</form>	
			</div>
		)	
	}
}

export default Register