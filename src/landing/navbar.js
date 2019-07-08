import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
	render() {
		return(
			<nav id="navbar" class="navbar navbar-expand-sm navbar-light">
                <a class="navbar-brand" data-scrollto="#landing-title-page">
                    <img src={require('../resources/home.png')} />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar .navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item" data-toggle="collapse" data-target="#navbar .navbar-collapse.show" data-scrollto="#landing-title-page"><a>Home</a></li>
                        <li class="nav-item" data-toggle="collapse" data-target="#navbar .navbar-collapse.show" data-scrollto="#landing-about-page"><a>About Me</a></li>
                        <li class="nav-item" data-toggle="collapse" data-target="#navbar .navbar-collapse.show" data-scrollto="#landing-experience-page"><a>Experience</a></li>
                        <li class="nav-item" data-toggle="collapse" data-target="#navbar .navbar-collapse.show" data-scrollto="#landing-contacts-page"><a>Contacts</a></li>
                    </ul>
                </div>
            </nav>
		);
	}
}

export default Navbar;