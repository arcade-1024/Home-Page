import React from "react";
import logo from "../assets/img/logo.png";

//import scss
import "../sass/layouts/_footer.scss";
function Footer() {
	return (
		<div className="footer">
			<div className="footer--banner">
				<div className="footer--banner-text">
					<p className="footer--banner-text-muted">
						&#8213;&#8213; REACH OUT NOW !
					</p>
					<h2 className="footer--banner-text-main">
						We're available for 8 hours a day! <br />
						Contact to require a detailed analysis and <br />
						assesment of your plan.
					</h2>
					<p className="footer--banner-text-bottom-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod
						velit et dicta. Beatae <br />
						quibusdam molestiae eum officia similique labore.
					</p>
					<div className="footer--banner-contact">
						<p className="footer--banner-contact-number">990 456 4587 000</p>
						<button className="footer--banner-contact-btn">Contact us</button>
					</div>
				</div>
			</div>
			<div className="footer--links">
				<div className="footer--links-info">
					<img src={logo} alt="" />

					<p className="footer--links-info-para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
						optio. <br />
						Lorem ipsum dolor sit amet.
					</p>

					<div className="footer--links-info-address">
						<div className="footer--links-info-address-head">
							<h4>&#8213; HEAD OFFICE</h4>
							<p>
								Onpager, INC 3133 conncticut <br />
								Ave NW,# 923 Washinton DC <br />
								200008, USA
							</p>
						</div>
						<div className="footer--links-info-address-office">
							<h4>&#8213; STUDIO OFFICE</h4>
							<p>
								Mainstreet 1234 <br />
								1236 Anytown,Germany
							</p>
						</div>
					</div>
				</div>
				<div className="footer--links-tags">
					<div className="footer--links-tags-col">
						<h5>Resource</h5>
						<ul>
							<li>Documentation</li>
							<li>Developer Metric</li>
							<li>Enterprise</li>
							<li>Pricing</li>
						</ul>
					</div>
					<div className="footer--links-tags-col">
						<h5>Company</h5>
						<ul>
							<li>About</li>
							<li>Customer</li>
							<li>Contact Us</li>
							<li>Support</li>
							<li>Teams</li>
						</ul>
					</div>
					<div className="footer--links-tags-col">
						<h5>Social</h5>
						<ul>
							<li>Facebook</li>
							<li>Instagram</li>
							<li>Google Plus</li>
							<li>Twitter</li>
						</ul>
					</div>
				</div>
			</div>
      <hr/>
		</div>
	);
}

export default Footer;
