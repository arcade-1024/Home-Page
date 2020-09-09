import React from "react";

// scss import
import "../sass/layouts/_work.scss";

export default function Work() {
	return (
		<div className="work">
			<div className="work--text">
				<p className="work--text-para">&#8213;OUR WORK</p>
				<h2 className="work--text-heading">See our recent work</h2>
				<p className="work--text-rand">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
					Fugiat facilis, quasi eaque ipsa, iusto nihil distinctio <br /> quis
					obcaecati repellat voluptatibus, laboriosam dolorem
				</p>
        <button className="work--text-button">See all Project</button>
			</div>
			<div className="work--img">
				<div className="work--img-1"></div>
				<div className="work--img-2"></div>
				<div className="work--img-3"></div>
			</div>
		</div>
	);
}
