import React from 'react';
import './contacts.css';

class Contacts extends React.Component {
	render() {
		return(
			<div id="contacts-page" class="landing-foreground">
                <div id="contacts-title" class="landing-section-title">I can help!</div>
                <span class="section-description">Do you have a <span class="fancy-font">funky</span> idea for a project? Or simply fancy a chat?</span>
                <div id="send-email-btn" class="col-md-12">
                    <a href="mailto:j35qi@edu.uwaterloo.ca" class="btn-svg fadein">
                        <svg>
                            <rect x="2" y="2" rx="0" fill="none" width="266" height="50"></rect>
                        </svg>
                        <span>
                            <i class="fas fa-envelope"></i>
                            Shoot me
                        </span>
                    </a>
                </div>
			</div>
		);
	}
}

export default Contacts;