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
            </nav>
		);
	}
}

export default Navbar;