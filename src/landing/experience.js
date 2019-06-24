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
    render() {
        return(
            <div id="exp-londonlife" class="landing-experience-block">
                <h4 class="exp-company">London Life Insurance Company</h4>
                <div class="exp-company-body">
                    <img class="exp-logo" src={require('../companies/londonlife.png')} />
                    <div class="exp-company-description">
                        <h5 class="exp-job-title">Actuarial Student</h5>
                        <h6 class="exp-duration"><i>May 2018 - Aug 2018 London, ON.</i></h6>
                        <div class="exp-details-list">
                            <ul>
                                <li>London Life uses models to predict how many people would claim their life insurance benefit each month (ie. die), so that they could react in accordance. I conducted analysis on the results from the model to figure out what amount the company should keep in the reserve and which portions can be re-invested.</li>
                                <li>As a final project, I investigated the impacts of the change from using a log-normal model to using a stochastic volatility model to predict CIA regulations (on minimum reserve values) and presented my results to the entire company.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Experience;