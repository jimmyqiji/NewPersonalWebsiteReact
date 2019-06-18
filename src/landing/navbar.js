import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
	render() {
		return(
			<nav id="navbar" class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">
                    <img src={require('../resources/home.png')} />
                </a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">Home</li>
                        <li class="nav-item">About Me</li>
                        <li class="nav-item">Experience</li>
                    </ul>
                </div>
            </nav>
		);
	}
}

export default Navbar;