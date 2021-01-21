import React from 'react';
import WindowHeader from '../resources/components/window-header';
import './aboutpage.css';

class AboutPage extends React.Component {
	render() {
		return(
			<div id="landing-about-page">
				<div class="landing-foreground" id="about-window">
					<WindowHeader id="about-content-header"/>
					<div id="about-content-wrapper">
						<h1 id="about-title">Who am I?</h1>
						<div id="about-description">
							<p>Currently, a fourth year in the University of Waterloo pursuing a double major in Computer Science and Pure Mathematics. I am really interested in computer vision, graphics design, as well as mathematical understandings that can help build the foundations of other more practical realizations.</p>
							<p>I came to Canada when I was in grade 5, since then, I've lived in Vancouver. Growing up there had me falling in love with eating seafood, especially salmon.</p>
							<p>As you might have guessed, I'm religious when it comes to food. Aside from seafood, I also love eating hotpot, ramen, ribs (and beer as well). As a hobby, I go on food adventures every week, having coop and going to different cities really helps broaden the menu. It is hands down, the best part about having coop.</p>
							<p>All these foods call for lots of exercize as well, I enjoy working out, playing ball, swimming, and rock climbing. So far, it's been a great balance for me, I somehow managed to stay both somewhat lean, and at the same time, well fed.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutPage;