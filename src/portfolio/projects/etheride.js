import React from 'react'
import WindowHeader from '../../resources/components/window-header'

class Etheride extends React.Component {
	render() {
		return (
			<div class="project" id="mappify">
				<h1 class="proj-title">Etheride</h1>
				<div class="proj-body">
					<div class="proj-img">
						<WindowHeader class="proj-header" />
						<img src={require('../../resources/projects/etheride.png')} />
					</div>
					<div class="proj-description">
						<p>Autonomous Uber with Blockchain. As a team of four at UofTHacks VI, we brought together two of the sponsoring companies, Smartcar and Aragon, to build an app that could allow the user to unlock and navigate a smartcar after an Ethereum transaction has been fulfilled.</p>
						<p>This escrow system was designed to provide the much needed legal reliability in human-computer interactions (HCI). It would serve its purpose as an intermediary in these early stages where the HCI technologies are not fully mature yet</p>
						<p>We received lots of help from the Aragon team, and as a result, we had the honour of receiving the Best Blockchain Hack award from UofTHacks VI</p>
					</div>
				</div>
				<div class="proj-footer">
					<button type="button" class="proj-link btn btn-outline-secondary"><a href="https://github.com/yuxuanyao/SmartCar2">View on Github</a></button>
					<button type="button" class="proj-tech btn">Javascript</button>
					<button type="button" class="proj-tech btn">NodeJS</button>
					<button type="button" class="proj-tech btn">Solidity</button>
				</div>
			</div>
		);
	}
}

export default Etheride;