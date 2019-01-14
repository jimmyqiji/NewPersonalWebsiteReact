import React from 'react'
import './titlepage.css'

class TitlePage extends React.Component {
	render() {
		return(
			<div id="titlepage">
				<div id="homebtn">
					<button type="button" class="whitebtn btn btn-outline-secondary">Home</button>
				</div>
				<div id="title-text">
					<div id="title"><h1>Portfolio</h1></div>
					<div id="subtitle"><h2>A Collection of Projects</h2></div>
				</div>
			</div>
		);
	}
}

export default TitlePage;