import React from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
//import loginStyles from "../../assets/jss/components/loginStyle"
import Typography from '@material-ui/core/Typography';

import { withTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, CardContent } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import axios from "axios"
import CustomizedSnackbars from './CustomizedSnackbars'

const styles = theme =>({
  
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	root: {
		padding: theme.spacing.unit * 2,
		},
	cardHeader:{
		textAlign:'center',
		backgroundColor: theme.palette.primary.main,
		color:'white',
		padding:'1rem',
		//fontSize:'1.3rem'
		
    
	},
	loginMessage:{
		color:theme.palette.error.main 
	}
	
})

// ----------------------------------------------------
class Login extends React.Component{
	
	constructor(props) {
		super(props);
		this.state ={
			
			email:"",
			password:"",
			errorExists:false,
			loginMessage: ""

		}
		this._onLoginSubmit = this._onLoginSubmit.bind(this)
		}
		
	_onLoginSubmit(event) {		
		event.preventDefault()
		const email = this.state.email;
		const password = this.state.password;

		// Passed in via react-redux. Returns a promise.
		this.props.manualLogin({ // this function is passed in via react-redux
			email,
			password			
		}, this.props.nextPathname) // holds the path to redirect to after login (if any)
		.then((loginMessage) => {
			if (loginMessage) {
				// report to the user is there was a problem during login
				this.setState({
					loginMessage,
					errorExists: true
				})			
			}	
		})

	}

	render() {
		const { classes } = this.props;

		return(
			
			<Grid container justify="center" className={classes.root} >
				<Grid item>   
					<Card className={classes.card} > 
						<div title="Log in"  className={classes.cardHeader}>
							<Typography color="inherit" variant="button" gutterBottom>Log in</Typography>
						</div>
						<CardContent>
							<form>
								<Grid container  spacing={16}>
									<Grid item xs={12}>   
										<TextField  fullWidth value={this.state.email} type="email" label="Email" className={classes.textField}
										onChange={e => this.setState({ email: e.target.value })} /><br />
									</Grid>
									<Grid item  xs={12} >   
										<TextField fullWidth value={this.state.password} type="password" label="Password"
										className={classes.textField} onChange={e => this.setState({ password: e.target.value })} /><br /><br />
										<Grid container justify="center" >
											<Grid item> 
												<Button  color="primary" className={classes.button} onClick={this._onLoginSubmit} >submit</Button><br />
												<CustomizedSnackbars
												variant="error"
												className={classes.margin}
												message={this.state.loginMessage}
												open={this.state.errorExists}
												onClose={()=>{ this.setState({errorExists: false}) }}
												/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</form>	
						</CardContent>
					</Card>
				</Grid>
			</Grid>

		)
	}
}

Login.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Login);
//export default Login;
