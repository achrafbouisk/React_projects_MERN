import React from 'react'
import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'

const Form = () => {

	return(
		<>
			<Typography>
				Contact Me
			</Typography>
			<Card style={maxWidth: 450, margin: "0 auto", padding: "20px 5px"}>
				<CardContent>
				<Typography gutterBottom variant="body2" component="p">Thank you for filling up the form.</Typography>
				<form>
					<Grid container spaing={2}>
						<Grid xs={12} sm={6} item>
							<TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required/>
						</Grid>

						<Grid xs={12} sm={6} item>
							<TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required/>
						</Grid>

						<Grid xs={12} item>
							<TextField type="email" label="Address Mail" placeholder="Enter E-mail" variant="outlined" fullWidth required/>
						</Grid>

						<Grid xs={12} item>
							<TextField type="number" label="Phone Number" placeholder="Enter phone number" variant="outlined" fullWidth required/>
						</Grid>

						<Grid xs={12} item>
							<TextField label="Message" multiline rows={4} placeholder="Type a message" variant="outlined" fullWidth required/>
						</Grid>

						<Grid xs={12} item>
							<Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
						</Grid>
					</Grid>
				</form>
				</CardContent>
			</Card>
		</>
	)
}