import React from "react"
import ReactDOM from "react-dom"
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import TableCell from '@material-ui/core/TableCell';

const styles = theme =>({

})

class ScalesSelection extends React.Component{

	constructor(props) {
		super(props);
		this.state ={
			selectedValue: '',
		}
        this.handleChange = this.handleChange.bind(this)
        //props.onChange = props.onChange(this);

	};

	handleChange( event) {
        this.setState({ selectedValue: event.target.value });
        this.props.onChange(event);
	};

	render() {
		const { classes } = this.props;
		return(
            <div>
                <TableCell numeric>

                <Radio value="0" color="default" checked={this.state.selectedValue === '0'} onChange={this.handleChange} name={this.props.name} aria-label="D" />
                <Radio value="1" color="default" checked={this.state.selectedValue === '1'} onChange={this.handleChange} name={this.props.name} aria-label="D" />
                <Radio value="2" color="default" checked={this.state.selectedValue === '2'} onChange={this.handleChange} name={this.props.name} aria-label="D" />
                <Radio value="3" color="default" checked={this.state.selectedValue === '3'} onChange={this.handleChange} name={this.props.name} aria-label="D" />
                <Radio value="4" color="default" checked={this.state.selectedValue === '4'} onChange={this.handleChange} name={this.props.name} aria-label="D" />
                </TableCell>
            </div>
		)	
	}
}

export default withStyles(styles)(ScalesSelection);