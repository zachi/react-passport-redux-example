import React from "react"
import ReactDOM from "react-dom"
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import axios from "axios"
import CustomizedSnackbars from './CustomizedSnackbars'



const intakeMessageStyle = {
	color: "red"
}

const styles = theme =>({

	intakeCpl:{
		margin:theme.spacing.unit*4 + 'px auto',
		maxWidth: 940

	},
	button:{
		float:"right",
		marginTop: theme.spacing.unit*2,
		marginBottom: theme.spacing.unit*4,
	},
	row: {
		'&:nth-of-type(odd)': {
		  backgroundColor: theme.palette.background.default,
		}
	},
	tableCell:{
		padding: 4,
		width: theme.spacing.unit * 11,
		textAline: 'center'
	},
	header:{
		marginTop:theme.spacing.unit*4,
		marginBottom:theme.spacing.unit*3,
		padding:theme.spacing.unit*2
	}

	
})

const fields = [
	{ name:'field1', text : 'Repeated, disturbing memories, thoughts, or images of a stressful experience?'},
	{ name:'field2', text : 'Repeated, disturbing dreams of a stressful	experience?'},
	{ name:'field3', text : 'Suddenly acting or feeling as if a stressful experiencewere happening again (as if you were reliving it)? '},
	{ name:'field4', text : 'Feeling very upset when something reminded you of a stressful experience?'},
	{ name:'field5', text : 'Having physical reactions (e.g., heart pounding, trouble breathing, or sweating) when something reminded you of a stressful experience?'},
	{ name:'field6', text : 'Avoid thinking about or talking about a stressful experience from the past or avoid having feelings related to it? '},
	{ name:'field7', text : 'Avoid activities or situations because they remind you of a stressful experience? '},
	{ name:'field8', text : 'Trouble remembering important parts of a stressful experience? '},
	{ name:'field9', text : 'Loss of interest in things that you used to enjoy?'},
	{ name:'field10', text : 'Feeling distant or cut off from other people? '},
	{ name:'field11', text : 'Feeling emotionally numb or being unable to have loving feelings for those close to you? '},
	{ name:'field12', text : 'Feeling as if your future will somehow be cut short? '},
	{ name:'field13', text : 'Trouble falling or staying asleep?'},
	{ name:'field14', text : 'Feeling irritable or having angry outbursts? '},
	{ name:'field15', text : 'Having difficulty concentrating? '},
	{ name:'field16', text : 'Being “super alert” or watchful on guard? '},
	{ name:'field17', text : 'Feeling jumpy or easily startled? '}
]


class Intake extends React.Component{

	constructor(props) {
		super(props);
		this.state ={
			snackbarMessage: '',
			formValues: {},
			snackbarType: 'info',
			intakeSaved: false
			
		}
		this._onIntakeSubmit = this._onIntakeSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		axios({
			method: "get",
			url: "intakeScore",
			data: {}
		})
		.then(response => {
			if (response.data.user) {					
				this.setState({
					intakeSaved: true, 
					showSnackbar: true,
					formValues : response.data,
					snackbarType: 'info'

				})				
				this.setState({
					snackbarMessage: 'intake exists, score: ' + this.getIntakeScore(),
				})				
			} else {					
		
			}
		})
		.catch(response => {
			if (response instanceof Error) {
				
			}
		})

	};

	getIntakeScore(){
		var sum = 0;
		for(var i=0; i<20; i++)	{

			if(this.state.formValues['field' + i])
			sum = sum + this.state.formValues['field' + i];
		}
		return sum;
	}

	handleChange( event) {
		this.setState({ formValues :
			{ 
				...this.state.formValues, 
				[event.target.name]: Number(event.target.value )
			}
		});
	};

	_onIntakeSubmit(event) {
		event.preventDefault()
		
		// Passed in via react-redux. Returns a promise.
		this.props.manualIntake(this.state.formValues)
		.then((intakeMessage) => {
		
			if (intakeMessage) {
				// report to the user is there was a problem during registration
				this.setState({
					showSnackbar: true,
					snackbarMessage : intakeMessage,
					snackbarType : 'error'

				})			
			}else{

				this.setState({
					showSnackbar: true,
					snackbarMessage : ' intake saved successfuly',
					snackbarType : 'success',
					intakeSaved: true

				})			
			}
		})

	}

	render() {
		const { classes } = this.props;
		return(
			<div className={classes.intakeCpl}>
				<Card className={classes.header}>
					<Typography variant="headline" >Instructions</Typography>
					<Typography variant="subheading" >Below is a list of problems and complaints that veterans sometimes have in response to stressful life
						experiences. Please read each one carefully, put an “X” in the box to indicate how much you have been bothered by that
						problem in the last month. 
					</Typography>

				</Card>
				<CustomizedSnackbars
					variant={this.state.snackbarType}
					message={ this.state.snackbarMessage }
					open={this.state.showSnackbar}
					onClose={()=>{ this.setState({showSnackbar: false}) }}
					/>
				<form>
					


					<Paper className={classes.root}>
						<Table className={classes.table}>
							<TableHead>
							<TableRow>									
								<TableCell></TableCell>
								<TableCell className={classes.tableCell} ><Typography variant="body2" >Not at all</Typography></TableCell>
								<TableCell className={classes.tableCell} ><Typography variant="body2" >A little bit</Typography></TableCell>
								<TableCell className={classes.tableCell} ><Typography variant="body2" >Moderately</Typography></TableCell>
								<TableCell className={classes.tableCell} ><Typography variant="body2" >Quite a bit</Typography> </TableCell>
								<TableCell className={classes.tableCell} ><Typography variant="body2" >Extremely</Typography></TableCell>
								
							</TableRow>
							</TableHead>
							<TableBody>
							{fields.map(n => {
								return (
								<TableRow className={classes.row} key={n.name}>
									<TableCell component="th" scope="row">
										<Typography variant="body2" >{n.text}</Typography>
									</TableCell>
									<TableCell className={classes.tableCell} ><Radio disabled={ this.state.intakeSaved} value={0} color="default" checked={this.state.formValues[n.name] === 0 } onChange={this.handleChange} name={n.name} aria-label="D" /></TableCell>
									<TableCell className={classes.tableCell} ><Radio disabled={ this.state.intakeSaved} value={1} color="default" checked={this.state.formValues[n.name] === 1 } onChange={this.handleChange} name={n.name} aria-label="D" /></TableCell>
									<TableCell className={classes.tableCell} ><Radio disabled={ this.state.intakeSaved} value={2} color="default" checked={this.state.formValues[n.name] === 2 } onChange={this.handleChange} name={n.name} aria-label="D" /></TableCell>
									<TableCell className={classes.tableCell} ><Radio disabled={ this.state.intakeSaved} value={3} color="default" checked={this.state.formValues[n.name] === 3 } onChange={this.handleChange} name={n.name} aria-label="D" /></TableCell>
									<TableCell className={classes.tableCell} ><Radio disabled={ this.state.intakeSaved} value={4} color="default" checked={this.state.formValues[n.name] === 4 } onChange={this.handleChange} name={n.name} aria-label="D" /></TableCell>
								</TableRow>
								);
							})}
							</TableBody>
						</Table>
						
					</Paper>
					<Button variant="outlined" disabled={ this.state.intakeSaved} color="primary" className={classes.button} onClick={this._onIntakeSubmit} >submit</Button><br />
				</form>	
			</div>
		)	
	}
}

export default withStyles(styles)(Intake);