import React from 'react'
import Mappify from './projects/mappify'
import Etheride from './projects/etheride'
import Vim from './projects/vim'
import Wine from './projects/journal_wine'
import './projectpage.css'

class ProjectPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      projects: [<Mappify />, <Etheride />, <Vim />, <Wine />]
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
        {this.renderProjects()}
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