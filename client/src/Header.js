import { Link } from "react-router-dom";

export default function Header(){
    return (
      <div className = "titleBanner">
        <p className="title">Case Zumbrum's Portfolio
      </p>
      <div>
      <p>A <span style={{color: "rgb(78, 201, 176)"}}>{"MERN"}</span> <span style={{color: "rgb(255, 215, 10)"}}>{"("}</span><span style={{color: "rgb(197, 134, 192)"}}>{"MongoDB, Express, React, NodeJs"}</span><span style={{color: "rgb(255, 215, 10)"}}>{")"}</span> stack <span style={{color: "rgb(86, 156, 214)"}}>{"portfolio"}</span> site for all of my <span style={{color: "rgb(86, 156, 214)"}}>{"projects"}</span>! Currently running on <span style={{color: "rgb(78, 201, 176)"}}>{"ngrok"}</span> and using <span style={{color: "rgb(86, 156, 214)"}}>{"cloud"}</span> based <span style={{color: "rgb(78, 201, 176)"}}>{"MongoDB Atlas"}</span> for storage.</p>
      </div>
      </div>
      
    );
}