import React from 'react'
import './footer.css'

class FooterPage extends React.Component {
	render() {
		return(
			<div id="footer" class="landing-foreground">
				<div id="footer-body" class="landing-foreground">
					<div id="social">
					  <ul id="buttons">
              <li class="gh">
                <a href="https://github.com/jimmyqiji" title="Github">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li class="fb">
                <a href="https://www.facebook.com/jimmy.qi.39" title="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="lin">
                <a href="https://www.linkedin.com/in/jimmyqi" title="Linkedin">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li class="in">
                <a href="https://www.instagram.com/jimmyqiji/" title="Instagram" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
						</ul>
					</div>
					<div id="copyright">
						<h2>JIMMY QI</h2>
						<p>Copyright © 2019</p>
						<p>All rights reserved</p>
						<p>Landing parallax image belongs to ©2019 Campo Santo</p>
					</div>
				</div>
			</div>
		);
	}
}

export default FooterPage;