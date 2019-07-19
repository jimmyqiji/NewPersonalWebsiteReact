import $ from 'jquery';
import React from 'react';
import TitlePage from './portfolio/titlepage'
import ProjectPage from './portfolio/projectpage'
import Contacts from './landing/contacts'
import FooterPage from './landing/footer'
import fullpage from 'fullpage.js'
import './Portfolio.css'

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.states = {
			fullpage_on: false,
		};
	}

	render() {
		return(
			<div id="portfolio">
				<TitlePage />
				<ProjectPage />
				<div class="section fp-auto-height">
					<Contacts />
					<FooterPage />
				</div>
			</div>
		);
	}

	componentDidMount() {
		if (!this.states.fullpage_on) {
			const fp = this.setupFullpage();
			this.states.fullpage_on = true;
			$('#port-scrldown').click(() => { fp.moveSectionDown(); });
		}
	}

	setupFullpage() {
		return new fullpage('#portfolio', {
			//options here
			autoScrolling:true,
			scrollHorizontally: true,
			slidesNavigation: true,
			slidesNavPosition: 'bottom',
			dragAndMove: true,
		});
	}
}

export default Portfolio;