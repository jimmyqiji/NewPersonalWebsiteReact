import React from 'react';
import { Link } from 'react-router-dom'
import './titlepage.css'
import Parallax from 'parallax-js'

class TitlePage extends React.Component {
	render() {
		return (
			<div id="landing-title-page">
				<div class="landing-foreground">
					<div class="titletext fancy-font" id="name"><span>Jimmy Qi</span></div>
					<div id="links">
						<div id="resume-btn">
							<a href={require("../resources/resume.pdf")}><button type="button" class="black-btn btn btn-outline-secondary">Resume</button></a>
						</div>
						<div id="portfolio-btn">
							<Link to="/portfolio">
								<button type="button" class="black-btn btn btn-outline-secondary">Portfolio</button>
							</Link>
						</div>
					</div>
				</div>
				<div class="keyart" id="nonparallax"></div>
				<div class="keyart" data-relative-input="true" id="parallax">
				  <div class="keyart_layer parallax cast-parallax" id="keyart-0" data-depth="0.02" data-speed="2"></div>	
				  <div class="keyart_layer parallax cast-parallax" id="keyart-1" data-depth="0.05" data-speed="5"></div>
				  <div class="keyart_layer parallax cast-parallax" id="keyart-2" data-depth="0.11" data-speed="11"></div>	
				  <div class="keyart_layer parallax cast-parallax" id="keyart-3" data-depth="0.16" data-speed="16"></div>
				  <div class="keyart_layer parallax cast-parallax" id="keyart-4" data-depth="0.26" data-speed="26"></div>	
				  <div class="keyart_layer parallax cast-parallax" id="keyart-5" data-depth="0.36" data-speed="36"></div>
				  <div class="keyart_layer parallax cast-parallax" id="keyart-6" data-depth="0.49" data-speed="49"></div>	
				  <div class="keyart_layer parallax cast-parallax" id="keyart-7" data-depth="0.69" data-speed="69"></div>	
				  <div class="keyart_layer" id="keyart-8" data-depth="1" data-speed="100"></div>
				  <div class="keyart_layer" id="keyart-scrim"></div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		startScene();
	}
}

function startScene() {
	let scene = document.getElementById('parallax');
	let parallaxInstance = new Parallax(scene, {
		relativeInput: true,
		clipRelativeInput:true,
		limitY: 0,
	});
}

export default TitlePage;