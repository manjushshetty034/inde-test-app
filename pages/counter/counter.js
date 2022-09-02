import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "../footer/Footer.module.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const Counter = ({ count, testimonial }) => {
	return (
		<Grid className={styles.container} sx={{ height: "110vh" }} container justifyContent="center" alignItems="center">
			{count ? (
				<Grid
					container
					item
					spacing={5}
					direction="row"
					justifyContent="space-evenly"
					alignItems="center"
					sx={{ paddingTop: "2%", height: "50%", width: "100%" }}
				>
					{count.map((countItem) => (
						<Grid item key={countItem.id} sx={{ width: "20%", height: "60%", background: "#00C0F3" }}>
							<Typography variant="h3">{countItem.title}</Typography>
							<Typography variant="h6">{countItem.subTitle}</Typography>
						</Grid>
					))}
				</Grid>
			) : null}
			{testimonial ? (
				<Grid
					container
					item
					sx={{ border: "4px solid yellow", width: "50%", height: "50%", marginBottom: "2%" }}
					alignItems="center"
					justifyContent="center"
				>
					<Typography>{testimonial.heading}</Typography>
					<Grid container item sx={{ paddingLeft: "5%", paddingRight: "5%" }}>
						<Typography sx={{ fontSize: "28px" }}>
							<FormatQuoteIcon sx={{ transform: "rotate(180deg)", fontSize: "72px" }} />
							{testimonial.title} <FormatQuoteIcon sx={{ fontSize: "72px" }} />
						</Typography>
					</Grid>
					<Grid container item alignItems="flex-start" sx={{ paddingLeft: "5%" }} direction="column">
						<Typography variant="h6">- {testimonial.name}</Typography>
						<Typography>{testimonial.designation}</Typography>
					</Grid>
				</Grid>
			) : null}
		</Grid>
	);
};

export default Counter;
