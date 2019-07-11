import React from 'react'
import './titlepage.css'
import { Link } from 'react-router-dom'

class TitlePage extends React.Component {
	render() {
		return(
			<div id="port-title-page" className="section">
				<div id="homebtn">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<button type="button" class="whitebtn btn btn-outline-secondary">Home</button>
					</Link>
				</div>
				<div id="port-title-text">
					<div><h1>Portfolio</h1></div>
					<div><h2>A Collection of Projects</h2></div>
				</div>
				<span id="port-scrldown"></span>
			</div>
		);
	}
}

export default TitlePage;