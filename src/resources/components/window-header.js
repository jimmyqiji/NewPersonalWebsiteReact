import React from 'react';
import './window-header.css';

class WindowHeader extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return(
            <div class="window-header" id={this.props.id}>
				<div class="window-header-btn-red window-header-btn"></div>
				<div class="window-header-btn-yellow window-header-btn"></div>
				<div class="window-header-btn-green window-header-btn"></div>
			</div>
		);
	}
}

export default WindowHeader;