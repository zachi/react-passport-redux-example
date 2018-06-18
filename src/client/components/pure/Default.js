import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme =>({

	main:{
		margin:theme.spacing.unit*2,

	}
})

class Default extends React.Component{
	render() {
		const { classes } = this.props;
				return(
			<div className={classes.main}>
				<Typography variant="headline" >Lorem Ipsum</Typography>

				<Typography variant="subheading" >
				<p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit bibendum orci ut sodales. Aliquam feugiat varius facilisis. Donec sed ipsum scelerisque, lobortis turpis at, tincidunt lacus. Integer est dolor, viverra et pellentesque sed, dignissim nec purus. Donec id egestas nulla, at porttitor tortor. Etiam sed dui vehicula, congue sem nec, fringilla eros. Suspendisse rhoncus risus ut cursus sodales. Sed sit amet elementum eros. Nulla facilisi. Curabitur ligula tortor, ultricies non sem et, sagittis facilisis nulla. Morbi dui dui, efficitur at augue nec, rutrum pretium enim.</p>
				<p>In full, this repo demonstrates:</p>
				<ul>
					<li><strong>Sed</strong> ut perspiciatis unde omnis  </li>
					<li><strong>voluptatem</strong> iste natus error sit </li>					
					<li><strong>accusantium</strong>  doloremque laudantium, totam rem aperiam</li>
					<li><strong>inventore</strong> eaque ipsa quae ab illo  </li>
					<li><strong>veritatis</strong>  et quasi architecto beatae vitae</li>
				</ul>
				<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores </p>						
				</Typography>
			</div>
		)	
	}
}

export default withStyles(styles)(Default);