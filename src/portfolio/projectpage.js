import React from 'react'
import './projectpage.css'
import Mappify from './projects/mappify'

class ProjectPage extends React.Component {
	render() {
		return(
			<div id="projectpage">
				<div id="button_left"></div>
				<div id="button_right"></div>
				<div class="slideshow" cur_slide="0">
					<div class="project" id="project0">
						<Mappify />
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectPage;