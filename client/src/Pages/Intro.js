export default function Intro(){
    return(<div className='intro'>
            <div className="post">
              <div className="image">
                <img src="/static/images/cat.jpg"></img>
                <div className="links">
                <a className="profileLink" href="https://github.com/CaseZumbrum" target="_blank">GitHub</a>
                <a className="profileLink" href="mailto: casezumbrum@ufl.edu" target="_blank">Email</a>
                <a className="profileLink" href="https://docs.google.com/document/d/1MOTXNbck3oeZoYUyFrlqaqhfbghRPDtDoLcmGVzJUS0/edit?usp=sharing" target="_blank">Resume</a>
                <a className="profileLink" href="https://linkedin.com/in/case-zumbrum" target="_blank">LinkedIn</a>
              </div>
              </div>
              <div className = "content">
                <p className='name'>Case_Zumbrum<span style={{color: "rgb(255, 181, 24)"}}>{"("}</span><span style={{color: "rgb(156, 220, 254)"}}>{"classOf"}</span><span style={{color: "rgb(212, 212, 212)"}}>{"="}</span><span style={{color: "rgb(148, 206, 168)"}}>{"2027"}</span><span style={{color: "rgb(255, 181, 24)"}}>{"){"}</span></p>
                <p className = "summary">I'm a first year <span style={{color: "rgb(78, 201, 176)"}}>{"Computer Engineering"}</span> student at the <span style={{color: "rgb(206, 114, 60)"}}>{"University of Florida"}</span>.<br/><br/>
                
                I'm very interested in <span style={{color: "rgb(86, 156, 214)"}}>{"Machine Learning"}</span>, <span style={{color: "rgb(86, 156, 214)"}}>{"Data Analysis"}</span>, and <span style={{color: "rgb(86, 156, 214)"}}>{"Web 3.0"}</span>.<br/><br/>
                
                I'm currently working with the <span style={{color: "rgb(78, 201, 176)"}}>{"Machine Intelligence Lab"}</span> at <span style={{color: "rgb(206, 114, 60)"}}>{"UF"}</span> to help develop <span style={{color: "rgb(197, 134, 192)"}}>{"Software"}</span> for an <span style={{color: "rgb(197, 134, 192)"}}>{"Autonomous Submarine"}</span>.</p>
                <span style={{color: "rgb(255, 181, 24)"}}>{"}"}</span>
              </div>     
            </div>
          </div>);
}