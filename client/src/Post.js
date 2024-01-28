export default function Post({id,title,body,img,link,time}){
  console.log({link}.link);
return(   <div className="post">
<div className="image">
  <img src={img}></img>
</div>
<div className = "content">
  <h2>{title}<span style={{color: "rgb(255, 181, 24)"}}>{"{"}</span></h2>
  
  <p className="info">
    <time>{time}</time>
  </p>
  <p className = "summary">{body}</p>
  {({link}.link != null)  && <a href = {link}>Link</a>} 
  <h2><span style={{color: "rgb(255, 181, 24)"}}>{"}"}</span></h2> 
</div>     
</div>
);  
}