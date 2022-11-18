import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../Assets/profilePic.png';
 
function About(props) {
  return (
    <div ref={props.refProp} className="paddingTop45">
        <h1  className="text-center" >About</h1>
        <div className="aboutInfoDiv panel" data-color="about">
            <div className="row">
                <div className="col">
                    <img className="aboutInfoImg" src={profilePic} />
                </div>
                <div className="col">
                    <div className="aboutDesc">
                        <h1>Hey, it's Rahul Mallam.</h1>
                        <p>I attend the University of South Florida as a graduate student. I intend to pursue a data science career. 
                            I have developed a number of projects utilizing a variety of data science and web development concepts. 
                            expert in programming with Python, R, and SQL for more than one year. previously worked at TCS as a 
                            software engineer for 1 year. I have always been curious about solving problems, and developing and 
                            designing new projects.
                        </p>
                        <p>Are you interested in collaborating? You can contact me at <a className="mailId" href="mailto:rahulsai@usf.edu">rahulsai@usf.edu</a></p>
                        <p className="sourceCodeLinkEle">You can find the souce code for this site <a className="sourceCodeLink" target="_blank" href="https://github.com/RahulSaiMallam/Portfolio/tree/gh-pages">here.</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
