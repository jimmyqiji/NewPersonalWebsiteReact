import React from 'react';
import $ from 'jquery'; 
import './App.css';
import TitlePage from './landing/titlepage'
import AboutPage from './landing/aboutpage'

class App extends React.Component {
  render() {
    return (
      <div>
        <TitlePage />
        <AboutPage />
      </div>
    );
  }
}

$(document).ready( function() {
  $(window).scroll(function() {
    var portfoliotop = $("#portfolio").offset().top;
    var abouttop = $("#about").offset().top;
    console.log(abouttop);
    console.log(portfoliotop);
    if(portfoliotop < abouttop) { //scrolled past the other div?
      $("#portfolio").show(); //reached the desired point -- show div
    }
    else {
      $("#portfolio").hide();
    }
  });
});

export default App;
