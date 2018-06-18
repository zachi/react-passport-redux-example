import React from "react"
import NavigationContainer from "./NavigationContainer"
import withRoot from "../withRoot"
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component{
	  render() {
		return(
			<div>
				<CssBaseline />
				<NavigationContainer />				
				{this.props.children}
			</div>	
		)	
	}
}

export default withRoot(App);