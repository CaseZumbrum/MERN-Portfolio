import { Link } from "react-router-dom";

export default function Header(){
    return (
      <div className = "titleBanner">
        <header>
        <Link to= "/" className="logo">Case Zumbrum's Portfolio</Link>
      </header>
      <p>A MERN (MongoDB, Express, React, NodeJs) stack portfolio site for all of my projects! Currently running on a Raspberry Pi and using Cloud based MongoDB Atlas for storage.</p>
      </div>
    );
}