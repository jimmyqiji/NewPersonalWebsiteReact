import React from 'react'
import $ from 'jquery'; 
import './projectpage.css'
import Mappify from './projects/mappify'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

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
				<div id="button_left"></div>
				<div id="button_right"></div>
				<div class="slideshow" cur_slide="0">
					<div class="owl-carousel">
						{this.renderProjects()}
					</div>
					{this.renderdots()}
				</div>
			</div>
		);
	}

	componentDidMount() {
		$(document).ready(function(){
		  $('.owl-carousel').owlCarousel();
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