import React from 'react';
import $ from 'jquery'; 
import './App.css';
import TitlePage from './landing/titlepage'
import AboutPage from './landing/aboutpage'
import Gallery from './landing/gallery'
import FooterPage from './landing/footer'

class App extends React.Component {
  render() {
    return (
      <div id="homepage">
        <TitlePage />
        <AboutPage />
        <Gallery />
        <FooterPage />
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
