(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){"use strict";(function(e){var n=t(2),l=t(3),r=t(5),c=t(4),o=t(6),i=t(0),s=t.n(i),d=t(18),u=t(19);t(56),t(58),t(60);e.jQuery=t(8);var m=e.jQuery;window.$=m;var p=t(62);window.fn=p;var h=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).state={projects:[s.a.createElement(d.a,null),s.a.createElement(u.a,null)]},t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"renderdots",value:function(){for(var e=[],a=0;a<this.state.projects.length;a++)e.push(s.a.createElement(f,{value:a}));return e}},{key:"renderProjects",value:function(){for(var e=[],a=0;a<this.state.projects.length;a++)e.push(s.a.createElement("div",{id:"project"+a},this.state.projects[a]));return e}},{key:"render",value:function(){return s.a.createElement("div",{id:"projectpage"},s.a.createElement("span",{class:"arrowbtn arrowbtn-left"}),s.a.createElement("span",{class:"arrowbtn arrowbtn-right"}),s.a.createElement("div",{class:"slideshow",cur_slide:"0"},s.a.createElement("div",{class:"owl-carousel owl-theme"},this.renderProjects(),s.a.createElement("div",{class:"item"},s.a.createElement("img",{src:"http://placehold.it/2000x400/a21010/ffffff",alt:"orange tree"})),s.a.createElement("div",{class:"item"},s.a.createElement("img",{src:"http://placehold.it/2000x400/1096a2/ffffff",alt:"orange tree"})),s.a.createElement("div",{class:"item"},s.a.createElement("img",{src:"http://placehold.it/2000x400/a28c10/ffffff",alt:"orange tree"}))),this.renderdots()))}},{key:"componentDidMount",value:function(){m(document).ready(function(){m(".owl-carousel").owlCarousel({navigation:!0,slideSpeed:500,paginationSpeed:800,rewindSpeed:1e3,singleItem:!0,autoPlay:!0,stopOnHover:!0,loop:!0,items:1,dots:!0})});var e=m(".owl-carousel");m(".arrowbtn-left").click(function(){e.trigger("prev.owl.carousel")}),m(".arrowbtn-right").click(function(){e.trigger("next.owl.carousel")})}}]),a}(s.a.Component),f=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:"dot",id:"dot"+this.props.value}," ")}}]),a}(s.a.Component);a.a=h}).call(this,t(12))},function(e,a,t){"use strict";var n=t(2),l=t(3),r=t(5),c=t(4),o=t(6),i=t(0),s=t.n(i),d=(t(52),function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:"project",id:"mappify"},s.a.createElement("div",{class:"proj_img"}),s.a.createElement("h1",{class:"proj_title"},"Mappify"),s.a.createElement("div",{class:"proj_description"},s.a.createElement("p",null,"When I was applying to hackathons on Major League Hacking, MLH.io, I realized that I knew nothing about geography so often times I would find myself switching tabs between getting hackathon locations on MLH and googling where that location actually is on maps"),s.a.createElement("p",null,"Then I found the task to be rather routine, so I had the idea of marking the locations of hackathons on a map using a chrome extension."),s.a.createElement("p",null,"I scraped the metadata of all the hackathons and marked them on a map by integrating MLH with Mapbox API")))}}]),a}(s.a.Component));a.a=d},function(e,a,t){"use strict";var n=t(2),l=t(3),r=t(5),c=t(4),o=t(6),i=t(0),s=t.n(i),d=(t(54),function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:"project",id:"vim"},s.a.createElement("div",{class:"proj_img"}),s.a.createElement("h1",{class:"proj_title"},"Vim"),s.a.createElement("div",{class:"proj_description"}))}}]),a}(s.a.Component));a.a=d},,function(e,a,t){e.exports=t(66)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAqUExURUxpcR4ZGiUhIh8aGyomJyMfIB8aGyAbHScjJCAbHSEcHiolJyIeHyMfII8INSQAAAAOdFJOUwD/R90hZsqiLbSQE3pXfggB0AAAARNJREFUKM9jYIAAlg0MqIBJAYnD7cDAwBMAVAUXiWBg4CxgYGiFC2g6dGzObmGZBBfYNrvnouwJz2y4AJdksKFwauICuA2ugsKzVhoKXoHY5KrNUS4WFHNUNbHcYVMIUIBj2trCRcWCglbq4rcyG0BK2gSllAWBIKlQcArE1YlJhiABMTUxB7BAx8FwQTBYKtoCFugxU4YIGBmfAAvsNQ+ECIhOvg3kOh03lFoIEZBZKFajzeB0EklAuEYFUwsWQ5Gs7UBxmLCaJMRhnoJSl0ECtlCnc0xbOhHkOXMt8Siw51y1WSpRvA8OILEqYADdgEcFl9hhQ2FTRBAybJuCFsgY0YARUaCoPIAcleiRDXa/A5QBAOywVJWTzQkRAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"},function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/resume.54468fd1.pdf"},,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/hubdoc.43c4ea31.png"},function(e,a,t){e.exports=t.p+"static/media/londonlife.11fae393.png"},function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,,,,function(e,a,t){},,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),o=t(69),i=t(68),s=(t(26),t(2)),d=t(3),u=t(5),m=t(4),p=t(6),h=t(8),f=t.n(h),b=(t(28),t(30),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{id:"navbar",class:"navbar navbar-expand-sm navbar-light"},l.a.createElement("a",{class:"navbar-brand","data-scrollto":"#landing-title-page"},l.a.createElement("img",{src:t(32)})),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar .navbar-collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("i",{class:"fas fa-bars"})),l.a.createElement("div",{class:"collapse navbar-collapse"},l.a.createElement("ul",{class:"navbar-nav"},l.a.createElement("li",{class:"nav-item","data-toggle":"collapse","data-target":"#navbar .navbar-collapse.show","data-scrollto":"#landing-title-page"},l.a.createElement("a",null,"Home")),l.a.createElement("li",{class:"nav-item","data-toggle":"collapse","data-target":"#navbar .navbar-collapse.show","data-scrollto":"#landing-about-page"},l.a.createElement("a",null,"About Me")),l.a.createElement("li",{class:"nav-item","data-toggle":"collapse","data-target":"#navbar .navbar-collapse.show","data-scrollto":"#landing-experience-page"},l.a.createElement("a",null,"Experience")),l.a.createElement("li",{class:"nav-item","data-toggle":"collapse","data-target":"#navbar .navbar-collapse.show","data-scrollto":"#landing-contacts-page"},l.a.createElement("a",null,"Contacts")))))}}]),a}(l.a.Component)),E=t(67),g=(t(33),t(16)),v=t.n(g);var y=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"landing-title-page"},l.a.createElement("div",{class:"landing-foreground"},l.a.createElement("div",{class:"titletext fancy-font",id:"name"},l.a.createElement("span",null,"Jimmy Qi")),l.a.createElement("div",{id:"links"},l.a.createElement("div",{id:"resume-btn"},l.a.createElement("a",{href:t(35)},l.a.createElement("button",{type:"button",class:"black-btn btn btn-outline-secondary"},"Resume"))),l.a.createElement("div",{id:"portfolio-btn"},l.a.createElement(E.a,{to:"/portfolio"},l.a.createElement("button",{type:"button",class:"black-btn btn btn-outline-secondary"},"Portfolio"))))),l.a.createElement("div",{class:"keyart",id:"nonparallax"}),l.a.createElement("div",{class:"keyart","data-relative-input":"true",id:"parallax"},l.a.createElement("div",{class:"keyart_layer parallax cast-parallax",id:"keyart-0","data-depth":"0.02","data-speed":"2"}),l.a.createElement("div",{class:"keyart_layer parallax cast-parallax",id:"keyart-1","data-depth":"0.05","data-speed":"5"}),l.a.createElement("div",{class:"keyart_layer parallax cast-parallax",id:"keyart-2","data-depth":"0.11","data-speed":"11"}),l.a.createElement("div",{class:"keyart_layer parallax cast-parallax",id:"keyart-3","data-depth":"0.16","data-speed":"16"}),l.a.createElement("div",{class:"keyart_layer parallax cast-parallax",id:"keyart-4","data-depth":"0.26","data-speed":"26"}),l.a.createElement("div",{class:"keyart_layer parallax cast-parallax",id:"keyart-5","data-depth":"0.36","data-speed":"36"}),l.a.createElement("div",{class:"keyart_layer parallax cast-parallax",id:"keyart-6","data-depth":"0.49","data-speed":"49"}),l.a.createElement("div",{class:"keyart_layer parallax cast-parallax",id:"keyart-7","data-depth":"0.69","data-speed":"69"}),l.a.createElement("div",{class:"keyart_layer",id:"keyart-8","data-depth":"1","data-speed":"100"}),l.a.createElement("div",{class:"keyart_layer",id:"keyart-scrim"})))}},{key:"componentDidMount",value:function(){!function(){var e=document.getElementById("parallax");new v.a(e,{relativeInput:!0,clipRelativeInput:!0,limitY:0})}()}}]),a}(l.a.Component),j=(t(38),function(e){function a(e){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).call(this,e))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"window-header",id:this.props.id},l.a.createElement("div",{class:"window-header-btn-red window-header-btn"}),l.a.createElement("div",{class:"window-header-btn-yellow window-header-btn"}),l.a.createElement("div",{class:"window-header-btn-green window-header-btn"}))}}]),a}(l.a.Component)),w=(t(40),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"landing-about-page"},l.a.createElement("div",{class:"landing-foreground",id:"about-window"},l.a.createElement(j,{id:"about-content-header"}),l.a.createElement("div",{id:"about-content-wrapper"},l.a.createElement("h1",{id:"about-title"},"Who am I?"),l.a.createElement("div",{id:"portrait"}),l.a.createElement("div",{id:"about-description"},l.a.createElement("p",null,"Currently, a third year in the University of Waterloo pursuing a double major in Computer Science and Pure Mathematics. I am really interested in computer vision, graphics design, as well as mathematical understandings that can help build the foundations of other more practical realizations."),l.a.createElement("p",null,"I came to Canada when I was in grade 5, since then, I've lived in Vancouver. Growing up there had me falling in love with eating seafood, especially salmon."),l.a.createElement("p",null,"As you might have guessed, I'm religious when it comes to food. Aside from seafood, I also love eating hotpot, ramen, ribs (and beer as well). As a hobby, I go on food adventures every week, having coop and going to different cities really helps broaden the menu. It is hands down, the best part about having coop."),l.a.createElement("p",null,"All these foods call for lots of exercize as well, I enjoy working out, playing ball, swimming, and rock climbing. So far, it's been a great balance for me, I somehow managed to stay both somewhat lean, and at the same time, well fed.")))))}}]),a}(l.a.Component)),A=(t(42),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"landing-experience-page"},l.a.createElement("div",{id:"landing-exp-body",class:"landing-foreground"},l.a.createElement("span",{class:"landing-section-title"},"What I did."),l.a.createElement(O,null),l.a.createElement(k,null)))}}]),a}(l.a.Component)),O=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"exp-hubdoc",class:"landing-experience-block"},l.a.createElement("h4",{class:"exp-company exp-color"},"Hubdoc - A Xero Partner"),l.a.createElement("div",{class:"exp-company-body"},l.a.createElement("img",{class:"exp-logo",src:t(44)}),l.a.createElement("div",{class:"exp-company-description"},l.a.createElement("h5",{class:"exp-job-title exp-color"},"Software Developer"),l.a.createElement("h6",{class:"exp-duration"},l.a.createElement("i",null,"May 2019 - Aug 2019 Toronto, ON.")),l.a.createElement("div",{class:"exp-details-list"},l.a.createElement("ul",null,l.a.createElement("li",null,"Hubdoc gathers and extracts receipts, invoices, and bills, etc. and extracts key information from it, providing a centralized place for all documents which is useful for accounting purposes."),l.a.createElement("li",null,"I utilized various headless browsers, APIs, http requests to construct scripts that fetches documents automatically for hundreds of users."))))))}}]),a}(l.a.Component),k=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"exp-londonlife",class:"landing-experience-block"},l.a.createElement("h4",{class:"exp-company exp-color"},"London Life Insurance Company"),l.a.createElement("div",{class:"exp-company-body"},l.a.createElement("img",{class:"exp-logo",src:t(45)}),l.a.createElement("div",{class:"exp-company-description"},l.a.createElement("h5",{class:"exp-job-title exp-color"},"Actuarial Student"),l.a.createElement("h6",{class:"exp-duration"},l.a.createElement("i",null,"May 2018 - Aug 2018 London, ON.")),l.a.createElement("div",{class:"exp-details-list"},l.a.createElement("ul",null,l.a.createElement("li",null,"London Life uses models to predict how many people would claim their life insurance benefit each month (ie. die), so that they could react in accordance. I conducted analysis on the results from the model to figure out what amount the company should keep in the reserve and which portions can be re-invested."),l.a.createElement("li",null,"As a final project, I investigated the impacts of the change from using a log-normal model to using a stochastic volatility model to predict CIA regulations (on minimum reserve values) and presented my results to the entire company."))))))}}]),a}(l.a.Component),x=A,I=(t(46),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"footer",class:"landing-foreground"},l.a.createElement("div",{id:"footer-body",class:"landing-foreground"},l.a.createElement("div",{id:"social"},l.a.createElement("ul",{id:"buttons"},l.a.createElement("li",{class:"gh"},l.a.createElement("a",{href:"https://github.com/jimmyqiji",title:"Github"},l.a.createElement("i",{class:"fab fa-github"}))),l.a.createElement("li",{class:"fb"},l.a.createElement("a",{href:"https://www.facebook.com/jimmy.qi.39",title:"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"}))),l.a.createElement("li",{class:"lin"},l.a.createElement("a",{href:"https://www.linkedin.com/in/jimmyqi",title:"Linkedin"},l.a.createElement("i",{class:"fab fa-linkedin-in"}))),l.a.createElement("li",{class:"in"},l.a.createElement("a",{href:"https://www.instagram.com/jimmyqiji/",title:"Instagram",target:"_blank"},l.a.createElement("i",{class:"fab fa-instagram"}))))),l.a.createElement("div",{id:"copyright"},l.a.createElement("h2",null,"JIMMY QI"),l.a.createElement("p",null,"Copyright \xa9 2019"),l.a.createElement("p",null,"All rights reserved"),l.a.createElement("p",null,"Landing parallax image belongs to \xa92019 Campo Santo"))))}}]),a}(l.a.Component)),C=(t(48),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"landing-contacts-page",class:"landing-foreground"},l.a.createElement("div",{id:"contacts-title",class:"landing-section-title"},"I can help!"),l.a.createElement("span",{class:"section-description"},"Do you have a ",l.a.createElement("span",{class:"fancy-font"},"funky")," idea for a project? Or simply fancy a chat?"),l.a.createElement("div",{id:"send-email-btn",class:"col-md-12"},l.a.createElement("a",{href:"mailto:j35qi@edu.uwaterloo.ca",class:"btn-svg fadein"},l.a.createElement("svg",null,l.a.createElement("rect",{x:"2",y:"2",rx:"0",fill:"none",width:"266",height:"50"})),l.a.createElement("span",null,l.a.createElement("i",{class:"fas fa-envelope"}),"Shoot me"))))}}]),a}(l.a.Component)),M=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"homepage"},l.a.createElement(b,null),l.a.createElement(y,null),l.a.createElement(w,null),l.a.createElement(x,null),l.a.createElement(C,null),l.a.createElement(I,null),l.a.createElement("div",{class:"background-cube left cast-parallax",id:"cube-left1","data-rotation":"15","data-speed":"65"}))}},{key:"componentDidMount",value:function(){f()("#navbar [data-scrollto]").map(function(e,a){f()(a).click(function(){f()([document.documentElement,document.body]).animate({scrollTop:f()(f()(a).attr("data-scrollto")).offset().top},700)})})}}]),a}(l.a.Component),B=(t(50),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"titlepage"},l.a.createElement("div",{id:"homebtn"},l.a.createElement(E.a,{to:"/"},l.a.createElement("button",{type:"button",class:"whitebtn btn btn-outline-secondary"},"Home"))),l.a.createElement("div",{id:"title-text"},l.a.createElement("div",{id:"title"},l.a.createElement("h1",null,"Portfolio")),l.a.createElement("div",{id:"subtitle"},l.a.createElement("h2",null,"A Collection of Projects"))),l.a.createElement("div",{id:"scrldown1",class:"scrldown clearfix"},l.a.createElement("a",{scrlto:"#projectpage"},l.a.createElement("span",null),"Scroll")))}}]),a}(l.a.Component)),S=t(17);t(63);function H(e){f()("html,body").stop().animate({scrollTop:f()(e).offset().top},300,"swing")}var U=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"portfolio"},l.a.createElement(B,null),l.a.createElement(S.a,null),l.a.createElement(I,null))}},{key:"addOnScroll",value:function(){var e=0;f()(window).scroll(function(){var a=f()(window).scrollTop();a<50&&a>e&&(H("#projectpage"),a=f()(window).scrollTop()),e=a,console.log(a)})}},{key:"componentDidMount",value:function(){f()(window).off("scroll"),this.addOnScroll(),f()("#scrldown1 a").click(function(){H("#projectpage")})}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(o.a,{basename:"/NewPersonalWebsiteReact"},l.a.createElement("div",null,l.a.createElement(i.a,{path:"/",component:M}),l.a.createElement(i.a,{path:"/portfolio",component:U}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,2,1]]]);
//# sourceMappingURL=main.f578e0ca.chunk.js.map