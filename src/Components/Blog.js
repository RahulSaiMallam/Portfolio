import 'bootstrap/dist/css/bootstrap.min.css';
function Blog(props) {
  

    return (
      <div ref={props.refProp} className="paddingTop45">
          <div  className="blogDiv panel" data-color="blog">
            <h1 className="text-center" >Blog</h1>
            <p>
              <h3 className="text-center blogHeading">ZOOM: CULTIVATING HUMAN CONNECTION IN A DIGITAL WORLD</h3>
            </p>
            <p className="blogDetailsDiv">
                Technology has made considerable advancements over the past years in establishing a digital environment and 
                expanding the potential for human connection in the digital sphere. Before the outbreak, the desire for virtual 
                connections was always a last resort and never a priority. However, we began to recognize the relevance of virtual 
                communication during COVID-19. After reading about the beginnings and aspirations of Eric Yuan (founder of Zoom), 
                one cannot help but respect the firm's impact on us. Despite the company's short existence, Zoom has undoubtedly 
                established itself in the digital sphere. It has outlasted competitors such as Microsoft, Google, and Cisco to take 
                the lead with a 45 percent market share. This caught my interest and spurred several inquiries: what was Zoom doing 
                right that others were not? How did it attract and retain such a significant number of users? Why does Zoom have a 
                competitive advantage over its rivals? As further concerns surfaced, I began analyzing Zoom and identifying its unique 
                characteristics..... 
            </p>
            <p>
              <a className="blogLink" target="_blank" href="#">
                  <div className="visitBlogDiv">Visit full blog here.</div>
              </a>
            </p>
          </div>
      </div>
    );
  }
  
  export default Blog;