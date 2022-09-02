import React from "react";
import { Radio, RadioGroup, FormControlLabel, TextField, Grid, Button, Typography, Box } from "@mui/material";
const EnquiryForm = () => {
	return (
		<>
			<Box sx={{ background: "#ED0677" }}>
				<Typography sx={{ textAlign: "center", paddingTop: "20px", color: "white" }} variant="h3">
					Let&#39;s chat about #FutureReadyHealthcare
				</Typography>
				<Grid container justifyContent="space-evenly" alignItems="center" sx={{ background: "#ED0677", height: "50vh" }}>
					<Grid item container direction="column" spacing={4} sx={{ width: "40%", padding: 0 }} xs={4}>
						<Grid item>
							<TextField label="Name" variant="outlined" required fullWidth sx={{ input: { background: "white" } }}></TextField>
						</Grid>
						<Grid item>
							<TextField variant="outlined" label="Email" required fullWidth sx={{ input: { background: "white" } }}></TextField>
						</Grid>
						<Grid item>
							<TextField variant="outlined" label="Company" required fullWidth sx={{ input: { background: "white" } }}></TextField>
						</Grid>
						<Grid item sx={{ color: "white" }}>
							<RadioGroup row>
								<FormControlLabel control={<Radio />} value="Business Opportunity" label="Business Opportunity" />
								<FormControlLabel control={<Radio />} value="Career Opporunity" label="Career Opporunity" />
							</RadioGroup>
						</Grid>
						<Grid item>
							<Button variant="contained" sx={{ borderRadius: 0 }} size="large">
								Submit
							</Button>
						</Grid>
					</Grid>

					<Grid item sx={{ width: "50%", height: "40vh" }} xs={4}>
						<TextField multiline variant="outlined" label="message" required rows={12} fullWidth sx={{ background: "white" }}></TextField>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default EnquiryForm;
