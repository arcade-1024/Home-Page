import React from "react";

// scss import
import "../sass/layouts/_testimonial.scss";

//img import
import img1 from "../assets/img/img-1.png";
import img2 from "../assets/img/img-2.png";
import img3 from "../assets/img/img-3.png";
import img4 from "../assets/img/img-4.png";
import img5 from "../assets/img/img-5.png";

export default function Testimonial() {
	return (
		<div className="testimonial">
			<div className="testimonial--logo">
				<div className="testimonial--logo-img">
					<img src={img1} alt="" />
				</div>
				<div className="testimonial--logo-img">
					<img src={img2} alt="" />
				</div>
				<div className="testimonial--logo-img">
					<img src={img3} alt="" />
				</div>
				<div className="testimonial--logo-img">
					<img src={img4} alt="" />
				</div>
				<div className="testimonial--logo-img">
					<img src={img5} alt="" />
				</div>
			</div>
			<div className="testimonial--service">
				<div className="testimonial--service-img"></div>
				<div className="testimonial--service-text">
					<p>&#8213; OUR SERVICES</p>
					<h2>Services we can help you with.</h2>

					<div className="testimonial--service-text-list">
						<div className="testimonial--service-text-list-item">
							<ul>
								<li>Illustration</li>
								<li>Illustration</li>
								<li>Illustration</li>
							</ul>
						</div>
						<div className="testimonial--service-text-list-item">
							<ul>
								<li>Illustration</li>
								<li>Illustration</li>
								<li>Illustration</li>
								<li>Illustration</li>
							</ul>
						</div>
					</div>
					<button>
            Challengers are just oppurtunities in . <span>Take the challenge</span>
          </button>
				</div>
			</div>
		</div>
	);
}
