import { useEffect, useState } from "react"
import SinglePost from "./SinglePost";

//39-7 (Recap) Core Concepts Components, State, UseEffect
export default function Post(){
    const [posts,setPosts] = useState([]);
    // useEffect(()=>{},[])

   useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
    .then((res)=>res.json())
    // .then((data)=>console.log(data))
    .then((data)=>setPosts(data))
   },[])

    return(
        <div>
            <h3>Posts:{posts.length}</h3>
            {/* <SinglePost></SinglePost> */}
            {
                posts.map((postInfo)=><SinglePost post={postInfo}></SinglePost>)
            }
        </div>
    )
}

//8 min
/*
    1.create a state to store the data
    2.create use effect with no dependencies

    3.use fetch to load data
    4.set loaded data to the state
    
    5.display data on the component
*/