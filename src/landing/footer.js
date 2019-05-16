import React from 'react'
import './footer.css'

class FooterPage extends React.Component {
	render() {
		return(
			<div id="footer">
				<div id="social">
					<a href="https://www.linkedin.com/in/jimmyqi"><img src={require("../resources/media/linkedin.png")} alt="linkedin link" /></a>
					<a href="https://github.com/jimmyqiji"><img src={require("../resources/media/github.png")} alt="github link" /></a>
					<a href="https://www.instagram.com/jimmyqiji/"><img src={require("../resources/media/instagram.png")} alt="instagram link" /></a>
				</div>
				<div id="copyright">
					<h2>JIMMY QI</h2>
					<p>Copyright © 2019</p>
					<p>All rights reserved</p>
					<p>Landing parallax image belongs to ©2019 Campo Santo</p>
				</div>
			</div>
		);
	}
}

export default FooterPage;