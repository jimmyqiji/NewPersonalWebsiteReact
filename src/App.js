import React from 'react';
import $ from 'jquery'; 
import './App.css';
import Navbar from './landing/navbar'
import TitlePage from './landing/titlepage'
import AboutPage from './landing/aboutpage'
import Experience from './landing/experience'
import FooterPage from './landing/footer'
import Contacts from './landing/contacts'

class App extends React.Component {
  render() {
    return (
      <div id="homepage">
        <Navbar />
        <TitlePage />
        <AboutPage />
        <Experience />
        <Contacts />
        <FooterPage />
        <div class="background-cube left cast-parallax" id="cube-left1" data-rotation="15" data-speed="70"></div>
        <div class="background-cube right cast-parallax" id="cube-right1" data-rotation="-15" data-speed="70"></div>
      </div>
    );
  }

  componentDidMount() {
    $(window).off('scroll');
    var nametop = document.getElementById("name").getBoundingClientRect().top;
    var resumetop = document.getElementById("resume-btn").getBoundingClientRect().top;
    var portfoliotop = document.getElementById("portfolio-btn").getBoundingClientRect().top;
    var abouttop = $("#landing-about-page").offset().top;
    $(window).scroll(function() {
      if($(window).scrollTop() + nametop < abouttop) { 
        $("#name").show(); //reached the desired point -- show div
      }
      else {
        $("#name").hide();
      }
      if($(window).scrollTop() + resumetop < abouttop) { 
        $("#resume").show(); //reached the desired point -- show div
      }
      else {
        $("#resume").hide();
      }
      if($(window).scrollTop() + portfoliotop < abouttop) { 
        $("#portfolio").show(); //reached the desired point -- show div
      }
      else {
        $("#portfolio").hide();
      }
    });

    $("#navbar .nav-item").map((index, element) => {
      $(element).click(function() {
        $([document.documentElement, document.body]).animate({
          scrollTop: $($(element).attr('data-scrollto')).offset().top
        }, 700);
      });
    })
  }
}



export default App;
