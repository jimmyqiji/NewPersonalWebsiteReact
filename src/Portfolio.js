import React from 'react';
import TitlePage from './portfolio/titlepage'
import ProjectPage from './portfolio/projectpage'
import FooterPage from './landing/footer'
// import './index.css'

class Portfolio extends React.Component {
	render() {
		return(
			<div>
				<TitlePage />
				<ProjectPage />
				<FooterPage />
			</div>
		);
	}
}

export default Portfolio;