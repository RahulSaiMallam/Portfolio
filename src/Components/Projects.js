import 'bootstrap/dist/css/bootstrap.min.css';
import climateChange from '../Assets/climateChange.png';
import importExport from '../Assets/importExport.png';
import loans from '../Assets/loans.png';

function Projects(props) {
    return (
      <div ref={props.refProp} className="paddingTop45">
        <h1  className="text-center" >Projects</h1>
          <div className="projectsDiv" >
            {/* project 1 */}
            <div className="row project project1 panel" data-color="project1">
                <div className="col">
                    <a className="projectLink" target="_blank" href="https://www.climateprofit.com/">
                        <div className="projectImageDiv">
                            <img className="projectImg project1Img" src={climateChange} />
                        </div>
                    </a>
                </div>
                <div className="col">
                    <div className="projectDetailsDiv">
                        <h1>CLIMATE CHANGE</h1>
                        <div className="projectHeading">Make a Difference Today</div>
                        <a className="projectLink" target="_blank" href="https://www.climateprofit.com/">
                            <div className="viewProjectDiv">View Project</div>
                        </a>
                    </div>
                </div>
            </div>
            {/* project 2 */}
            <div className="row project project2 panel" data-color="project2">
                <div className="col">
                    <a className="projectLink" target="_blank" href="https://rahulsai9515.wixsite.com/project1">
                        <div className="projectImageDiv">
                            <img className="projectImg project2Img" src={importExport} />
                        </div>
                    </a>
                </div>
                <div className="col">
                    <div className="projectDetailsDiv">
                        <h1>ANALYSIS AND VISUALIZATION OF INDIAN IMPORTS AND EXPORTS</h1>
                        <div className="projectHeading">DATA VISUALIZATION PROJECT</div>
                        <a className="projectLink" target="_blank" href="https://rahulsai9515.wixsite.com/project1">
                            <div className="viewProjectDiv">View Project</div>
                        </a>
                    </div>
                </div>
            </div>


            {/* project 3 */}
            <div className="row project project3 panel" data-color="project3">
                <div className="col">
                    <a className="projectLink" target="_blank" href="#">
                        <div className="projectImageDiv">
                            <img className="projectImg project3Img" src={loans} />
                        </div>
                    </a>
                </div>
                <div className="col">
                    <div className="projectDetailsDiv">
                        <h1>PROJECT 3</h1>
                        <div className="projectHeading">Project 3 details</div>
                        <a className="projectLink" target="_blank" href="#">
                            <div className="viewProjectDiv">View Project</div>
                        </a>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Projects;