import React from 'react';
import { Router, Link } from 'react-router';

const Navbar = () => {
	return (
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span> 
					</button>
					<Link className="navbar-brand active" to="/">USSD Assistant</Link>
				</div>
				<div className="collapse navbar-collapse" id="myNavbar">
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="about" onlyActiveOnIndex activeClassName="active">About</Link></li>
						<li><Link to="help" onlyActiveOnIndex activeClassName="active">Help</Link></li>
						<li><Link to="privacy" onlyActiveOnIndex activeClassName="active">Privacy Policy</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
