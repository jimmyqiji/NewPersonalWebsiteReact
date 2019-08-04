import React from 'react';
import TitlePage from './portfolio/titlepage'
import ProjectPage from './portfolio/projectpage'
import Contacts from './landing/contacts'
import FooterPage from './landing/footer'
import ReactFullpage from '@fullpage/react-fullpage';
import './Portfolio.css'

class Portfolio extends React.Component {
  render() {
    return (
      <ReactFullpage
        //fullpage options
        autoScrolling = {true}
        scrollHorizontally = {true}
        slidesNavigation = {true}
        slidesNavPosition = {'bottom'}
        dragAndMove = {true}
        sectionsColor = {['#f9ddb5', '#f8ece0', '#f9ddb5', '#f9ddb5', '#f9ddb5']}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div id="portfolio">
                <TitlePage className="section" btn_onclick={() => fullpageApi.moveSectionDown()}/>
                <ProjectPage className="section"/>
                <div class="section fp-auto-height">
                  <Contacts />
                  <FooterPage />
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
  }
}

export default Portfolio;