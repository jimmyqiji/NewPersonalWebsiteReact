import React from 'react'
import Mappify from './projects/mappify'
import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel/dist/assets/owl.theme.default.css";
import './projectpage.css'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;

class ProjectPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      projects: [<Mappify />]
    };
  }

	renderdots() {
		let dots = [];
		for(let i = 0; i < this.state.projects.length; i++) {
			dots.push(<PageDot value={i} />);
		}
		return dots;
	}

	renderProjects() {
		let proj_list = [];
		for(let i = 0; i < this.state.projects.length; i++) {
			proj_list.push(
				<div id={"project" + i}>
					{this.state.projects[i]}
				</div>
			)
		}
		return proj_list;
	}

	render() {
		return(
			<div id="projectpage">
				<span class="arrowbtn arrowbtn-left"></span>
				<span class="arrowbtn arrowbtn-right"></span>
				<div class="slideshow" cur_slide="0">
					<div class="owl-carousel owl-theme">
						{this.renderProjects()}
						<div class="item"><img src="http://placehold.it/2000x400/a21010/ffffff" alt="orange tree"/></div>
					  <div class="item"><img src="http://placehold.it/2000x400/1096a2/ffffff" alt="orange tree"/></div>
					  <div class="item"><img src="http://placehold.it/2000x400/a28c10/ffffff" alt="orange tree"/></div>
					</div>
					{this.renderdots()}
				</div>
			</div>
		);
	}

	componentDidMount() {
		$(document).ready(function(){
		  $('.owl-carousel').owlCarousel({
	      navigation : true,
	      slideSpeed : 500,
	   		paginationSpeed : 800,
	    	rewindSpeed : 1000,
	      singleItem:true,
				autoPlay : true,
	    	stopOnHover : true,
	    	loop:true,
    		items:1,
    		dots:true,
		  });
		});
	}
}

class PageDot extends React.Component {
	render() {
		return(
			<div class="dot" id={"dot" + this.props.value}> </div>
		);
	}
}

export default ProjectPage;