import React from "react";

// scss import
import "../sass/layouts/_allProduct.scss";

export default function AllProduct() {
	return (
		<div className="all-product">
			<div className="all-product-card-container">
				<div className="all-product-card">
					<div className="all-product-card-img"></div>
					<div className="all-product-card-body">
						<p className="all-product-card-desc">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quia,
							laborum placeat doloribu eserunt eum quod repudiandae aliquam
							unde! Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptates, inventore!
						</p>
						<h4>
							Danielle Fugazzi <span>UI designer</span>
						</h4>
					</div>
				</div>
			</div>
			<div className="all-product-text">
				<p className="all-product-text-muted">&#8213;ALL PRODUCT</p>
				<h2 className="all-product-text-title">Making products meaningful</h2>
				<p className="all-product-text-desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quia,
					laborum placeat doloribus <br /> vel deserunt eum quod repudiandae
					aliquam unde! Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptates, inventore!
				</p>
				<div className="all-product-text-grid">
					<div className="all-product-text-grid-item">
						<h4>Product Design</h4>
						<p>
							There are many variations of passage of Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Alias, quas!Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Consequuntur, incidunt.
						</p>
					</div>
					<div className="all-product-text-grid-item">
						<h4>Branding & Marketing</h4>
						<p>
							There are many variations of passage of Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Alias, quas! Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Consequuntur, incidunt.
						</p>
					</div>
					<div className="all-product-text-grid-item">
						<h4>Custom Development</h4>
						<p>
							There are many variations of passage of Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Alias, quas!.Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Consequuntur, incidunt
						</p>
					</div>
					<div className="all-product-text-grid-item">
						<h4>Rapid Prototying</h4>
						<p>
							There are many variations of passage of Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Alias, quas! Lorem ipsum dolor, sit
							amet consectetur adipisicing elit. Consequuntur, incidunt.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
