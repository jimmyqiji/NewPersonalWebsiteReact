import React from 'react'
import './mappify.css'

class Mappify extends React.Component {
	render() {
		return(
			<div class="project" id="mappify">
				<div class="proj_img" />
				<h1 class="proj_title">Mappify</h1>
				<div class="proj_description">
					<p>When I was applying to hackathons on Major League Hacking, MLH.io, I realized that I knew nothing about geography so often times I would find myself switching tabs between getting hackathon locations on MLH and googling where that location actually is on maps</p> 
					<p>Then I found the task to be rather routine, so I had the idea of marking the locations of hackathons on a map using a chrome extension.</p>
					<p>I scraped the metadata of all the hackathons and marked them on a map by integrating MLH with Mapbox API</p>
				</div>
			</div>
		);
	}
}

export default Mappify;