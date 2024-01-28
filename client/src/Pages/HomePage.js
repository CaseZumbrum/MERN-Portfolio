import Post from "../Post";
import { useEffect, useState } from "react";
export default function HomePage(){
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch("/posts").then(response => {
            console.log(window.location.host)
            response.json().then(posts => {
                console.log(posts);
                setPosts(posts);
              });
        });
    },[]);
    return(
        <div className="posts_page">
        <div className="posts_title">
        <p>Projects</p>
        </div>
        <div className="homepage">
       {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
        </div>
        </div>
    );
}
//http://192.168.56.1