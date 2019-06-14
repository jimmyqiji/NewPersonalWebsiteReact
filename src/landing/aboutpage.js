import React from 'react';
import './aboutpage.css';

class AboutPage extends React.Component {
	render() {
		return(
			<div id="about">
				<h1 class="landing-section-title">About Me</h1>
				<div id="portrait"></div>
				<div id="description">
					<p>Greetings, my name is Jimmy.</p>
					<p>I came to Canada when I was grade 5, since then, I've lived in Vancouver. Growing up there, I had lots and lots of salmon and I absolutely loved it.</p>
					<p>As you might have guessed, I'm religious when it comes to food. Aside from salmon, I also love eating hotpot, sushi, noodles and bbq ribs (I really enjoy a good can of beer as well). As a hobby, I go on food advantures every week, it's not just to give myself a chance to eat out, I just get a sense of accomplishment when I explore different restaurants.</p>
					<p>Currently, I'm a third year in the University of Waterloo pursuing a double major in Computer Science and Pure Mathematics. I am personally really interested in mathematical understandings that can help build the foundations of some other physical realizations. For example I was really intrigued when I heard that spacetime was modelled by a 4 dimensional Lorentzian manifold (Einstein).</p>
					<p>Fun fact, I am also a amateur photographer and self-proclaimed graphics designer, check it out: </p>
				</div>
			</div>
		);
	}
}

export default AboutPage;