import React from "react";

import logo from "./assets/iesd-text-white-nobg.svg";

const Nav = () => {
	return (
		<div id="nav" className="container-fluid bg-black">
			<div className="container">
				<div className="row">
					<nav className="py-4 w-100 navbar navbar-expand-lg d-flex align-items-center">
						<img src={logo} alt="freeCodeCamp logo" />
							<button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav"
							aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span id="menuIcon" className="navbar-toggler-icon"></span>
						</button>
						<div className="w-100 collapse navbar-collapse justify-content-end" id="navbarNav">
							<ul className="navbar-nav align-items-center">
								<li className="nav-item">
									<a className="text-white font-size font-weight-bold" href="#aboutus-div">Overview</a>
								</li>
								<li className="nav-item">
									<a className="text-white font-size font-weight-bold" href="#mission-div">Mission</a>
								</li>
								<li className="nav-item">
									<a className="text-white font-size font-weight-bold" href="#events-div">Events</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Nav;