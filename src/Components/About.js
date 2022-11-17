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
                        <h1>Hey, it's Rahul.</h1>
                        <p>I work remotely as a freelance data analyst/scientist. I hold a Bachelor's and Master's degree in science (Business Analytics, VU University Amsterdam).</p>
                        <p>Since I was young, I have always enjoyed to solve puzzles. So that's how I look at big data sets: to me it is one big puzzle I want to solve. Finding patterns nobody else sees is the challenge to me.</p>
                        <p>Before I started as a freelancer, I had worked for more than eight years as a data analyst in consulting and retail. I have worked for more than 25 companies which gives me the ability to translate complex questions into understandable insights.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
