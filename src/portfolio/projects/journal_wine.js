import React from 'react'
import WindowHeader from '../../resources/components/window-header'

class Wine extends React.Component {
	render() {
		return (
			<div class="project" id="mappify">
				<h1 class="proj-title">Journal of Wine</h1>
				<div class="proj-body">
					<div class="proj-img">
						<WindowHeader class="proj-header" />
						<img src={require('../../resources/projects/wine.png')} />
					</div>
					<div class="proj-description">
						<p>This project is an educational IPython journal that documents my first encounter with machine learning after taking professor Andrew Ng's ML course. It's written with the purpose of expediting the process of learning ML concepts and useful data science libraries.</p>
					</div>
				</div>
				<div class="proj-footer">
					<button type="button" class="proj-link btn btn-outline-secondary"><a href="https://github.com/jimmyqiji/Journal_of_Wine">View on Github</a></button>
					<button type="button" class="proj-tech btn">Python</button>
					<button type="button" class="proj-tech btn">Scikit-Learn</button>
					<button type="button" class="proj-tech btn">Seaborn Plot</button>
				</div>
			</div>
		);
	}
}

export default Wine;