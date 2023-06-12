import { Link } from "react-router-dom";

export default function Header(){
    return (
      <div className = "titleBanner">
        <header>
        <Link to= "/" className="logo">Case Zumbrum's Portfolio</Link>
      </header>
      <div>
      <p>A MERN (MongoDB, Express, React, NodeJs) stack portfolio site for all of my projects! Currently running on a Raspberry Pi and using Cloud based MongoDB Atlas for storage.</p>
      <a className="profileLink" href="https://github.com/CaseZumbrum">GitHub</a>
      <a className="profileLink" href="mailto: casezumbrum@gmail.com">Email</a>
      <a href="https://docs.google.com/document/d/1MOTXNbck3oeZoYUyFrlqaqhfbghRPDtDoLcmGVzJUS0/edit?usp=sharing">Resume</a>
      </div>
      </div>
    );
}