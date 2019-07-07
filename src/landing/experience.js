import React from 'react';
import './experience.css';

class Experience extends React.Component {
	render() {
		return(
            <div id="landing-experience-page">
                <div id="landing-exp-body" class="landing-foreground">
                    <span class="landing-section-title">What I did.</span>
                        <Hubdoc />
                        <LondonLife />
                </div>
            </div>
		);
	}
}

class Hubdoc extends React.Component {
    render() {
        return(
            <div id="exp-hubdoc" class="landing-experience-block">
                <h4 class="exp-company exp-color">Hubdoc - A Xero Partner</h4>
                <div class="exp-company-body">
                    <img class="exp-logo" src={require('../companies/hubdoc.png')} />
                    <div class="exp-company-description">
                        <h5 class="exp-job-title exp-color">Software Developer</h5>
                        <h6 class="exp-duration"><i>May 2019 - Aug 2019 Toronto, ON.</i></h6>
                        <div class="exp-details-list">
                            <ul>
                                <li>Hubdoc gathers and extracts receipts, invoices, and bills, etc. and extracts key information from it, providing a centralized place for all documents which is useful for accounting purposes.</li>
                                <li>I utilized various headless browsers, APIs, http requests to construct scripts that fetches documents automatically for hundreds of users.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class LondonLife extends React.Component {
    render() {
        return(
            <div id="exp-londonlife" class="landing-experience-block">
                <h4 class="exp-company exp-color">London Life Insurance Company</h4>
                <div class="exp-company-body">
                    <img class="exp-logo" src={require('../companies/londonlife.png')} />
                    <div class="exp-company-description">
                        <h5 class="exp-job-title exp-color">Actuarial Student</h5>
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