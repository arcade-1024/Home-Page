import React from "react";

// scss imports
import "../sass/layouts/_home.scss";

export default function Home() {
	return (
		<div className="home">
			<div className="home-card">
				<h2>
					Bussiness solution for <br />
					ambitious, fast growing brands.
				</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
					Aspernatur architecto, illum esse dolor quam maxime nisi? Placeat
					debitis minima ab?
				</p>
        <button>
          start a project
        </button>
			</div>
		</div>
	);
}
