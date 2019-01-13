import React from 'react';
import TitlePage from './portfolio/titlepage'
import FooterPage from './landing/footer'

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