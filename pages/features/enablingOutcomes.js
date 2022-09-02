import { Grid, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "../footer/Footer.module.css";
const EnablingOutcomes = ({ sections }) => {
	const par =
		"We understand healthcare organizations need to deliver outcomes today, while building capabilities for the future. That's why we support you with day-to-day operations across the full life cycle, while enabling your vision through conversations with industry peers and thought-provoking content.";
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			{sections ? (
				<Grid container className={styles.container} sx={{ height: "90vh", marginBottom: 30 }} justifyContent="space-evenly">
					<Grid item container spacing={2} sx={{ width: "40%", marginTop: "2%", marginBottom: "2%" }}>
						<Grid item container justifyContent="space-evenly" direction="row" sx={{ height: "50%" }}>
							<Grid item container sx={{ width: "45%", background: "#00C0F3" }} alignItems="center" justifyContent="center">
								<Typography sx={{ fontSize: "24px" }}>{sections.capabilities.title}</Typography>
							</Grid>
							<Grid item container sx={{ width: "45%", background: "white", color: "#034ea2" }} alignItems="center" justifyContent="center">
								<Typography sx={{ fontSize: "24px" }}>{sections.solutions.title}</Typography>
							</Grid>
						</Grid>

						{/* second row */}
						<Grid item container justifyContent="space-evenly" direction="row" sx={{ height: "50%" }}>
							<Grid item container sx={{ width: "45%", background: "white", color: "#034ea2" }} alignItems="center" justifyContent="center">
								<Typography sx={{ fontSize: "24px" }}>{sections.technology.title}</Typography>
							</Grid>
							<Grid item container sx={{ width: "45%", background: "white", color: "#034ea2" }} alignItems="center" justifyContent="center">
								<Typography sx={{ fontSize: "24px" }}>{sections.segments.title}</Typography>
							</Grid>
						</Grid>
					</Grid>

					<Grid item container sx={{ width: "50%" }} alignItems="center">
						<Grid item container sx={{ width: "50%", height: "5%", marginTop: "2%", marginBottom: '3rem' }}>
							<Typography variant="h3">Enabling Outcomes</Typography>
						</Grid>
						<Grid item container sx={{ height: "10%", width: "60%", marginBottom: '5rem' }}>
							<Typography sx={{ fontSize: "16px" }}>{par}</Typography>
						</Grid>
						<Grid item container sx={{ height: "30%", color: "yellow" }} direction="column" justifyContent="space-evenly">
							<MenuItem sx={{ fontSize: "24px" }}>
								Agile Operations
								<ArrowRightIcon />
							</MenuItem>
							<MenuItem sx={{ fontSize: "24px" }}>
								Co-Commercialization
								<ArrowRightIcon />
							</MenuItem>
							<MenuItem sx={{ fontSize: "24px" }}>
								Future Ready Healthcare
								<ArrowRightIcon />
							</MenuItem>
						</Grid>
					</Grid>
				</Grid>
			) : null}
		</>
	);
};

export default EnablingOutcomes;
