import React from 'react'
import WindowHeader from '../../resources/components/window-header'

class Vim extends React.Component {
	render() {
		return(
			<div class="project" id="vim">
				<h1 class="proj-title">Vim</h1>
				<div class="proj-body">
					<div class="proj-img">
						<WindowHeader class="proj-header" />
						<img src={require('../../resources/projects/vim.png')} />
					</div>
					<div class="proj-description">
						<p>When I was applying to hackathons on Major League Hacking, MLH.io, I realized that I knew nothing about geography so often times I would find myself switching tabs between getting hackathon locations on MLH and googling where that location actually is on maps</p>
						<p>Then I found the task to be rather routine, so I had the idea of marking the locations of hackathons on a map using a chrome extension.</p>
						<p>I scraped the metadata of all the hackathons and marked them on a map by integrating MLH with Mapbox API and LeafletJS</p>
					</div>
				</div>
				<div class="proj-footer">
					<button type="button" class="proj-link btn btn-outline-secondary"><a href="https://github.com/jimmyqiji/MLH-Mappify">Request Source Code</a></button>
					<button type="button" class="proj-tech btn">C++</button>
					<button type="button" class="proj-tech btn">Ncurses.h</button>
				</div>
			</div>
		);
	}
}

export default Vim;