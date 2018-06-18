import React from "react"
import { Link } from "react-router"
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';
import Home from '@material-ui/icons/Home';



const styles = theme =>({
	
	root: {
		flexGrow: 1,
	},
	flex: {
		flex: 1,
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	  },
});

class Navigation extends React.Component{
	constructor(props) {
		super(props);
		this._logout = this._logout.bind(this)
		this._intakeScore = this._intakeScore.bind(this)
	}


	_logout(event) {
		event.preventDefault()
		this.props.manualLogout()
	}

	_intakeScore(event) {
		event.preventDefault()
		alert('');
	}

	render() {
		const { classes } = this.props;

		return(
			<div className={classes.root}>

			<AppBar position="static" >
				<Toolbar>
				<IconButton component={Link} to="/" color="inherit"  className={classes.button} >
					<Home className={classes.leftIcon} color="inherit" ></Home>
				</IconButton>
				<div className={classes.flex}></div>
					
					{ this.props.user.authenticated ? (
						<div>
							<Button  component={Link} to="/intake" color="inherit">Intake</Button>
							<Button onClick={this._logout} color="inherit" >Logout [{this.props.user.email}]</Button>
						</div>
					) : (
						<div>
							<Button  component={Link} to="/login" color="inherit">Log In</Button>
							<Button  component={Link} to="/register" color="inherit">Register</Button>
						</div>
					)
					}
									
					
						
					
						
					
					
				</Toolbar>
			</AppBar>
			</div>
		)	
	}
}


export default withStyles(styles)(Navigation);
