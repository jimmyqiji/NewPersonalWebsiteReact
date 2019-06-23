import React from 'react';
import './experience.css';

class Experience extends React.Component {
	render() {
		return(
            <div id="landing-experience">
                <div class="landing-foreground">
                    <h3 class="landing-section-title">Work Experience</h3>
                        <LondonLife />
                </div>
            </div>
		);
	}
}

class LondonLife extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id={this.props.id} class="landing-experience-block">
                <h4 class="exp-job-title">Actuarial Student</h4>
                <h5 class="exp-company">London Life Insurance Company</h5>
            </div>
        )
    }
}
export default Experience;