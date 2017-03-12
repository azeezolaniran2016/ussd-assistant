import React from 'react';
import { Router, Link } from 'react-router';

const Navbar = () => {
	return (
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link className="navbar-brand active" to="/">USSD Assistant</Link>
				</div>
				<ul className="nav navbar-nav navbar-right">
					<li><Link to="privacy" onlyActiveOnIndex activeClassName="active">Privacy Policy</Link></li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
