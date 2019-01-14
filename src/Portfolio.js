import React from 'react';
import TitlePage from './portfolio/titlepage'
import FooterPage from './landing/footer'
// import './index.css'

class Portfolio extends React.Component {
	render() {
		return(
			<div>
				<TitlePage />
				<FooterPage />
			</div>
		);
	}
}

export default Portfolio;