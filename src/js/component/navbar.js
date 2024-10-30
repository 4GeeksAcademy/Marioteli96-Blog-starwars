import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-black  mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" style={{ width: "120px", height: "60px" }} /></span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary">FAVORITOS</button>
				</Link>
			</div>
		</nav>
	);
};
