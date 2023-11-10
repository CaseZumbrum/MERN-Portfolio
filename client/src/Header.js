import { Link } from "react-router-dom";

export default function Header(){
    return (
      <div className = "titleBanner">
        <header>
        <Link to= "/" className="logo">Case Zumbrum's Portfolio</Link>
      </header>
      <div>
      <p>A MERN (MongoDB, Express, React, NodeJs) stack portfolio site for all of my projects! Currently running using ngrok and using Cloud based MongoDB Atlas for storage.</p>
      <a className="profileLink" href="https://github.com/CaseZumbrum">GitHub</a>
      <a className="profileLink" href="mailto: casezumbrum@ufl.edu">Email</a>
      <a className="profileLink" href="https://docs.google.com/document/d/1MOTXNbck3oeZoYUyFrlqaqhfbghRPDtDoLcmGVzJUS0/edit?usp=sharing">Resume</a>
      <a className="profileLink" href="https://linkedin.com/in/case-zumbrum">LinkedIn</a>
      </div>
      </div>
    );
}