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
    var nametop = document.getElementById("name").getBoundingClientRect().top;
    var resumetop = document.getElementById("resume").getBoundingClientRect().top;
    var portfoliotop = document.getElementById("portfolio").getBoundingClientRect().top;
    var abouttop = $("#about").offset().top;
    $(window).scroll(function() {
      // console.log(abouttop);
      // console.log(portfoliotop);
      // console.log($(window).scrollTop());
      if($(window).scrollTop() + nametop < abouttop) { //scrolled past the other div?
        $("#name").show(); //reached the desired point -- show div
      }
      else {
        $("#name").hide();
      }
      if($(window).scrollTop() + resumetop < abouttop) { //scrolled past the other div?
        $("#resume").show(); //reached the desired point -- show div
      }
      else {
        $("#resume").hide();
      }
      if($(window).scrollTop() + portfoliotop < abouttop) { //scrolled past the other div?
        $("#portfolio").show(); //reached the desired point -- show div
      }
      else {
        $("#portfolio").hide();
      }
    });
  }
}

// $("#homepage").ready( function() {
//   var nametop = document.getElementById("name").getBoundingClientRect().top;
//   var resumetop = document.getElementById("resume").getBoundingClientRect().top;
//   var portfoliotop = document.getElementById("portfolio").getBoundingClientRect().top;
//   var abouttop = $("#about").offset().top;
//   $(window).scroll(function() {
//     // console.log(abouttop);
//     // console.log(portfoliotop);
//     // console.log($(window).scrollTop());
//     if($(window).scrollTop() + nametop < abouttop) { //scrolled past the other div?
//       $("#name").show(); //reached the desired point -- show div
//     }
//     else {
//       $("#name").hide();
//     }
//     if($(window).scrollTop() + resumetop < abouttop) { //scrolled past the other div?
//       $("#resume").show(); //reached the desired point -- show div
//     }
//     else {
//       $("#resume").hide();
//     }
//     if($(window).scrollTop() + portfoliotop < abouttop) { //scrolled past the other div?
//       $("#portfolio").show(); //reached the desired point -- show div
//     }
//     else {
//       $("#portfolio").hide();
//     }
//   });
// });

// $(document).ready( function() {
//   $(window).scroll(function() {
//     hideElemScroll("#name", "#about");
//     hideElemScroll("#resume", "#about");
//     hideElemScroll("#portfolio", "#about");
//   });
// });

// function hideElemScroll(s, p, sTop) {
//   var pTop = $(p).offset().top;
//   $(window).scroll(function() {
//     if($(window).scrollTop() + sTop < pTop) { //scrolled past the other div?
//       $(s).show(); //reached the desired point -- show div
//     }
//     else {
//       $(s).hide();
//     }
//   });
// }

export default App;
