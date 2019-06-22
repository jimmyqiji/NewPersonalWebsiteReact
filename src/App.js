import React from 'react';
import $ from 'jquery'; 
import './App.css';
import Navbar from './landing/navbar'
import TitlePage from './landing/titlepage'
import AboutPage from './landing/aboutpage'
import Gallery from './landing/gallery'
import Experience from './landing/experience'
import FooterPage from './landing/footer'

class App extends React.Component {
  render() {
    return (
      <div id="homepage">
        <Navbar />
        <TitlePage />
        <AboutPage />
        {/* <Gallery /> */}
        <Experience />
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
    var abouttop = $("#about").offset().top;
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
  }
}



export default App;
