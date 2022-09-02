import React from "react";
import { BottomNavigationAction, BottomNavigation, Paper, Typography, Menu, MenuItem } from "@mui/material";
import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = ({ topMenu, bottomMenu }) => {
	return (
		<>
			{topMenu ? (
				<BottomNavigation className={styles.container} flex={1} sx={{ left: 0, alignItems: "center", justifyContent: "space-evenly", fontSize: 16 }}>
					<MenuItem>
						<Typography sx={{ fontSize: 16 }}>© 2022 Indegene. All Rights Reserved.</Typography>
					</MenuItem>
					<MenuItem>
						{topMenu.map((menuItem) => (
							// <BottomNavigationAction sx={{ fontSize: 16 }} label={menuItem.cta} className={styles.container}></BottomNavigationAction>
							<MenuItem key={menuItem.id}>{menuItem.cta}</MenuItem>
						))}
					</MenuItem>
					<MenuItem>
						<LinkedInIcon />
						<InstagramIcon />
						<FacebookIcon />
						<TwitterIcon />
					</MenuItem>
				</BottomNavigation>
			) : null}

			{/* 2nd half of footer */}

			{bottomMenu ? (
				<BottomNavigation className={styles.container} flex={1} sx={{ left: 0, alignItems: "center", justifyContent: "space-evenly", fontSize: 16 }}>
					{bottomMenu.map((menuItems) => (
						<MenuItem key={menuItems.id}>{menuItems.cta}</MenuItem>
					))}
				</BottomNavigation>
			) : null}
		</>
	);
};

export default Footer;
