import $ from 'jquery';
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

	addOnScroll() {
		let lastScrollTop = 0;
		window.addEventListener("scroll", (event) => {
			let st = $(window).scrollTop();
			if(st < 50 && st > lastScrollTop){
	      // downscroll code
	      scrollToElement('#projectpage');
	      st =  $(window).scrollTop();
			}
		  lastScrollTop = st;
		  console.log(st);
		});
	}

	componentDidMount() {
		this.addOnScroll();
		$('#scrldown1 a').click(() => { scrollToElement('#projectpage') });
	}
}

function scrollToElement(selector) {
	$('html,body').stop().animate({
    scrollTop: $(selector).offset().top
  }, 250, 'swing');
}

export default Portfolio;