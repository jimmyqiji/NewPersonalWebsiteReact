import React from 'react'
import Mappify from './projects/mappify'
import Vim from './projects/vim'
import './projectpage.css'

class ProjectPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      projects: [<Mappify />, <Vim />]
    };
  }

	renderProjects() {
		let proj_list = [];
		for(let i = 0; i < this.state.projects.length; i++) {
			proj_list.push(
				<div id={"project" + i} class="slide">
					{this.state.projects[i]}
				</div>
			)
		}
		return proj_list;
	}

	render() {
		return(
			<div id="projectpage" className="section">					
        {/* {this.renderProjects()} */}
        <div class="slide"><img src="http://placehold.it/2000x400/a21010/ffffff" alt="orange tree"/></div>
        <div class="slide"><img src="http://placehold.it/2000x400/1096a2/ffffff" alt="orange tree"/></div>
        <div class="slide"><img src="http://placehold.it/2000x400/a28c10/ffffff" alt="orange tree"/></div>
			</div>
		);
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