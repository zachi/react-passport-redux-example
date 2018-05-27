import React from "react"
import { Link } from "react-router"

var navStyle = {
	backgroundColor: "#EEE",
	padding: "10px"
}

var buttonStyle = {
	backgroundColor: "yellow"
}

const Navigation = React.createClass({

	_logout: function(event) {
		event.preventDefault()
		this.props.manualLogout()
	},

	_intakeScore: function(event) {
		event.preventDefault()
		alert('');
	},

	render: function() {
		return(
			<div style={navStyle}>				
				{
					this.props.user.authenticated 
					? <button onClick={this._logout} style={buttonStyle}>Logout [{this.props.user.email}]</button>
					: <Link to="/login">Log In</Link>
				}				
				{
					!this.props.user.authenticated 
					? <span>&nbsp;|&nbsp;<Link to="/register">Register</Link></span>
					: ""
				}				
				&nbsp;|&nbsp;
				<Link to="/myprofile">MyProfile</Link>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Link to="/">About This Repo</Link>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Link to="/intake">intake</Link>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<button onClick={this._intakeScore} style={buttonStyle}>intakeScoreeee</button>

				
				
			</div>
		)	
	}
})

export default Navigation