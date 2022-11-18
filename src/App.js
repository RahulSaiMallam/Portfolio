import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {useRef} from 'react';
// import FadeInSection from './FadeInSection';
import './App.css';
import About from './Components/About.js';
import Blog from './Components/Blog.js';
import Projects from './Components/Projects.js';
import homepageImg from './Assets/homepage.png';
import headerLogo from './Assets/headerLogo.png';


function App() {
  $(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).attr('data-color'));
      }
    });    
    
  }).scroll();

  const home = useRef(null);
  const heading2 = useRef(null);
  const projects = useRef(null);
  const blog = useRef(null);
  const about = useRef(null);


  return (
    <div className="portfolioMainDiv">
      <div className="headerDiv">
        <img className="headerLogo" src={headerLogo} />
        <span onClick={ (e) => home.current?.scrollIntoView({behavior: 'smooth'}) }>Home</span>
        <span onClick={ (e) => projects.current?.scrollIntoView({behavior: 'smooth'}) }>Projects</span>
        <span onClick={ (e) => blog.current?.scrollIntoView({behavior: 'smooth'}) }>Blog</span>
        <span onClick={ (e) => about.current?.scrollIntoView({behavior: 'smooth'}) }>About</span>
      </div>

      <div className="row homePageDiv panel" ref={home} data-color="home">
          <div className="col homePageTextDiv">
              <h1 className="portfolioMainHeader  paddingTop45" >Collect.Analyse.Decide</h1>
          </div>
          <div className="col homePageImgDiv">
            <img src={homepageImg} className="img-fluid animated" alt="Commom img"></img>
          </div>
      </div>
      
      <Projects refProp={projects} />

      <Blog refProp={blog} />

      <About refProp={about} />
    </div>
  );
}

export default App;
