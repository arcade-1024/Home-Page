import React from "react";
import logo from "../assets/img/logo.png";
import "../sass/layouts/_header.scss";
function Header() {
	return (
		<div className="header">
			<div className="header--logo">
				<img src={logo} alt="logo-img" />
			</div>
			<ul className="header--list">
				<li className="header--list-item">About</li>
				<li className="header--list-item">Service</li>
				<li className="header--list-item">Work</li>
				<li className="header--list-item">Case Studies</li>
				<li className="header--list-item">Contacts</li>
			</ul>
			<ul className="header--contact">
				<li className="header--contact-items">
					<p className="header--contact-items-contact">+03 86 600 888 33</p>
				</li>
				<li className="header--contact-items">
					<button className="header--contact-items-btn">Contacts Us</button>
				</li>
				<li className="header--contact-items">
					<i class="fas fa-search"></i>
				</li>
			</ul>
		</div>
	);
}
export default Header;
