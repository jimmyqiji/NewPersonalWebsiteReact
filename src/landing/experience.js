import React from 'react';
import './experience.css';

class Experience extends React.Component {
	render() {
		return(
            <div id="landing-experience-page">
                <div id="landing-exp-body" class="landing-foreground">
                    <span class="landing-section-title">What I did.</span>
                        <BBCR />
                        <Tamr />
                        <Hubdoc />
                        <LondonLife />
                </div>
            </div>
		);
	}
}

class BBCR extends React.Component {
    render() {
        return(
            <div id="exp-bbcr" class="landing-experience-block">
                <div class="exp-company-body">
                    <img class="exp-logo" src={require('../companies/waterloo.png')} />
                    <div class="exp-company-description">
                        <h4 class="exp-company exp-color">Broadband Communication Research Lab - UWaterloo</h4>
                        <h5 class="exp-job-title exp-color">Research Assistant</h5>
                        <h6 class="exp-duration"><i>Jan 2021 - Apr 2021 Waterloo, ON.</i></h6>
                        <div class="exp-details-list">
                            <ul>
                                <li>Implemented multiple cutting-edge cryptographic algorithms in Java including homomorphic encryption and signature algorithms.</li>
                                <li>Deployed cryptographic blockchain smart contracts on the Hyperledger Fabric for researching network security.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Tamr extends React.Component {
    render() {
        return(
            <div id="exp-tamr" class="landing-experience-block">
                <div class="exp-company-body">
                    <img class="exp-logo" src={require('../companies/tamr.webp')} />
                    <div class="exp-company-description">
                        <h4 class="exp-company exp-color">Tamr</h4>
                        <h5 class="exp-job-title exp-color">Software Engineer</h5>
                        <h6 class="exp-duration"><i>Jan 2020 - Aug 2020 Boston, MA.</i></h6>
                        <div class="exp-details-list">
                            <ul>
                                <li>Tamr consolidates multiple data sources and provides enterprise level data mastering at scale.</li>
                                <li>I reduced common upgrade failures by designing and developing the Maintenance Framework which provides interfaces to run Maintenance Scripts that improve the health of the system. The process involved demoing to many field engineers to see whether the interface is intuitive and adjusting designs to address both their usability and security concerns.</li>
                                <li>Investigated the needs of field engineers and built a garbage collection Maintenance Script that dissociates, from the system, incompletely deleted Projects whose dangling references led to numerous blocker tickets. Deleting users' Projects is risky, I involved various knowledgable stakeholders and incorporated multiples rounds of communication into my designs, then held a design review with more than 20 senior engineers.</li>
                                <li>Helped users transition through backward-incompatible upgrades by running Maintenance Scripts in the upgrade process. This type of change was a lot harder to make before due to the lack of confidence in correctness.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Hubdoc extends React.Component {
    render() {
        return(
            <div id="exp-hubdoc" class="landing-experience-block">
                <div class="exp-company-body">
                    <img class="exp-logo" src={require('../companies/hubdoc.png')} />
                    <div class="exp-company-description">
                        <h4 class="exp-company exp-color">Hubdoc - A Xero Partner</h4>
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
                <div class="exp-company-body">
                    <img class="exp-logo" src={require('../companies/londonlife.png')} />
                    <div class="exp-company-description">
                        <h4 class="exp-company exp-color">London Life Insurance Company</h4>
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