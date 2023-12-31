import Post from "../Post";
import { useEffect, useState } from "react";
export default function HomePage(){
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch(process.env.REACT_APP_IP + "/posts").then(response => {
            response.json().then(posts => {
                console.log(posts);
                setPosts(posts);
              });
        });
    },[]);
    return(
        <>
       {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
        </>
    );
}