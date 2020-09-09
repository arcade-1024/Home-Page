import React, { Component } from "react";

// scss import
import "./sass/pages/_app.scss";

// components import
import Header from "./components/Header";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";
import AllProduct from "./components/AllProduct";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Home />
				<Testimonial />
				<Work />
        <AllProduct/>
        <Articles/>
				<Footer />
			</div>
		);
	}
}
