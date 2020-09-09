import React from "react";

// sass import
import "../sass/layouts/_articles.scss";

export default function Articles() {
	return (
		<div className="articles">
			<div className="articles-main">
				<p className="articles-main-text-para">&#8213;RECENTLY PUBLISHED</p>
				<h2 className="articles-main-text-heading">
					Intersting articles updated daily
				</h2>
				<p className="articles-main-text-desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sed
					illo molestiae <br /> ab velit suscipit quas eaque veritatis odio
					deserunt.
				</p>
			</div>
			<div className="articles-grid">
				<div className="articles-grid-item-main">
					<span className="articles-grid-item-date">
						&#8213;21 May 2019 | human
					</span>
					<h4>How Wireless Technology is Chnaging Bussiness</h4>
					<div className="articles-grid-item-main-img"></div>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ad
						deserunt nam eligendi, sunt mollitia obcaecati, facilis id eos
						dolor, fuga similique nobis sequi itaque velit ipsam inventore
						ratione odio numquam corporis eaque. Laboriosam, distinctio tempore
						quis ex sint laudantium?
					</p>
					<a href>Read Article</a>
				</div>
				<div className="articles-grid-item">
					<span className="articles-grid-item-date">
						&#8213;21 May 2019 | human
					</span>
					<h4>How Wireless Technology is Chnaging Bussiness</h4>
					<div className="articles-grid-item-row">
						<div className="articles-grid-item-row-col">
							<div className="articles-grid-item-img"></div>
						</div>
						<div className="articles-grid-item-row-col">
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
								ad deserunt nam eligendi, sunt mollitia obcaecati, facilis id
								eos dolor, fuga similique nobis sequi itaque velit ipsam
								inventore ratione odio numquam corporis eaque. Laboriosam,
								distinctio tempore quis ex sint laudantium?
							</p>
							<a href>Read Article</a>
						</div>
					</div>
				</div>
				<div className="articles-grid-item">
					<span className="articles-grid-item-date">
						&#8213;21 May 2019 | human
					</span>
					<h4>How Wireless Technology is Chnaging Bussiness</h4>
					<div className="articles-grid-item-row">
						<div className="articles-grid-item-row-col">
							<div className="articles-grid-item-img"></div>
						</div>
						<div className="articles-grid-item-row-col">
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
								ad deserunt nam eligendi, sunt mollitia obcaecati, facilis id
								eos dolor, fuga similique nobis sequi itaque velit ipsam
								inventore ratione odio numquam corporis eaque. Laboriosam,
								distinctio tempore quis ex sint laudantium?
							</p>
							<a href>Read Article</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
