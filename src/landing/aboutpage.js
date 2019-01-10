import React from 'react';
import './aboutpage.css';

class AboutPage extends React.Component {
	render() {
		return(
			<div id="about">
				<div id="portrait"></div>
				<div id="description">
					<p>Hi, I'm a second year in the University of Waterloo pursuing a double major in Computer Science and Pure Mathematics.</p>
					<p>Aside from coding and math, I LOVE everything from all you can eat sushi after swimming or snowboarding to hotpot with fam in the winter to fancy gourmet dinner with a loved one.</p>
					<p>Also, as you might have guessed, I really enjoy cooking too. I would have been studying to become a chef if I weren't this damn good at math! (oof)</p>
					<p>Fun fact, I am also a amateur photographer and self-proclaimed graphics designer, check it out: </p>
				</div>
			</div>
		);
	}
}

export default AboutPage;