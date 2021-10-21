import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/Home.jsx">
					Star Wars
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav">
					<ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
						<li className="nav-item col-12 col-md-auto">
							<a
								className="nav-link p-2 active text-center"
								aria-current="page"
								href="/home">
								Home

							</a>
						</li>
						<li className="nav-item col-12 col-md-auto text-center">
							<a className="nav-link p-2" href="/characters">
								Characters
							</a>
						</li>
						<li className="nav-item col-12 col-md-auto text-center">
							<a className="nav-link p-2" href="/planets">
								Planets
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;