import React from 'react'
import './titlepage.css'
import { Link } from 'react-router-dom'

class TitlePage extends React.Component {
	render() {
		return(
			<div id="titlepage">
				<div id="homebtn">
					<Link to="/">
						<button type="button" class="whitebtn btn btn-outline-secondary">Home</button>
					</Link>
				</div>
				<div id="title-text">
					<div id="title"><h1>Portfolio</h1></div>
					<div id="subtitle"><h2>A Collection of Projects</h2></div>
				</div>
				<div id="scrldown1" class="scrldown">
					<a scrlto="#projectpage"><span></span>Scroll</a>
				</div>
			</div>
		);
	}
}

export default TitlePage;