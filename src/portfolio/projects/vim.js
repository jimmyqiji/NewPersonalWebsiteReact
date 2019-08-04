import React from 'react'
import WindowHeader from '../../resources/components/window-header'
import './vim.css'

class Vim extends React.Component {
	render() {
		return(
			<div class="project" id="vim">
				<h1 class="proj-title">Vim</h1>
				<div class="proj-body">
					<div class="proj-img">
						<WindowHeader class="proj-header" />
						<img src={require('../../resources/projects/vim.png')} />
					</div>
					<div class="proj-description">
						<p>This project is an immitation of the popular terminal editor, vim, with over 50 commands implemented. As a team of 2, 
							<a style={{textDecoration:'none', color:'#212529'}} href="https://github.com/ak2yang"> Andy </a> 
						and I designed and built it in 2 weeks for CS246E.</p>
						<p>With the SOLID principles in mind, we crafted it using the Command and Observer patterns, and following the MVC framework.</p>
						<p>Due to the fact that this was a project for school, source code is not available to the public, however, if you wish to see it, email me your situation and if it allows, we can work something out.</p>
					</div>
				</div>
				<div class="proj-footer">
					<button type="button" class="proj-link btn btn-outline-secondary"><a href="mailto:j35qi@uwaterloo.ca">Request Source Code</a></button>
					<button type="button" class="proj-tech btn">C++</button>
					<button type="button" class="proj-tech btn">Ncurses.h</button>
				</div>
			</div>
		);
	}
}

export default Vim;