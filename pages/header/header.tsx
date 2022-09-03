import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = ({ logoUrl, menu, topMenu }: HeaderProps) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const imageLoader = ({ src }) => src;

	return (
		<>
			<nav className={`${styles.navbar_container} navbar navbar-expand-lg`}>
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo"
						aria-controls="navbarTogglerDemo"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo">
						<Link className="navbar-brand" href="/">
							#FutureReadyHealthCare
						</Link>
						<ul className="navbar-nav">
							{topMenu?.length && topMenu?.map((menuItem, index) => (
								<li key={`top-navbar-${index}`} className="nav-item">
									<Link className="nav-link" href={`${menuItem?.toLocaleLowerCase()?.replace(" ", "-")}`}>
										{menuItem}
									</Link>
								</li>
							))}
							<li className="nav-item">
								<div className="mx-5">
									<Button
										id="basic-button"
										aria-controls={open ? "basic-menu" : undefined}
										aria-haspopup="true"
										aria-expanded={open ? "true" : undefined}
										variant={"contained"}
										color={"error"}
										onClick={handleClick}
									>
										Contact Us
									</Button>
									<Menu
										id="basic-menu"
										anchorEl={anchorEl}
										open={open}
										onClose={handleClose}
										MenuListProps={{
											"aria-labelledby": "basic-button",
										}}
									>
										<MenuItem onClick={handleClose}>Profile</MenuItem>
										<MenuItem onClick={handleClose}>My account</MenuItem>
										<MenuItem onClick={handleClose}>Logout</MenuItem>
									</Menu>
								</div>
							</li>
						</ul>

						{/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
					</div>
				</div>
			</nav>
			<nav className={`${styles.secondary_navbar} navbar navbar-expand-lg`}>
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo"
						aria-controls="navbarTogglerDemo"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo">
						<Link key={"logo"} className="navbar-brand" href="/">
							<Image loader={imageLoader} alt={"Indegine Logo"} width={200} height={40} src={logoUrl || "https://www.indegene.com/sites/default/files/logo.svg"} />
						</Link>
						<ul className="navbar-nav">
							{menu?.length && menu?.map((menuItem, index) => (
								<li key={`second-navbar-${index}`} className="nav-item">
									<Link className="nav-link" href={`${menuItem?.toLocaleLowerCase()?.replace(" ", "-")}`}>
										{menuItem}
									</Link>
								</li>
							))}
						</ul>
						{/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;

export interface HeaderProps {
	logoUrl: string;
	menu: string[];
	topMenu: string[];
}
