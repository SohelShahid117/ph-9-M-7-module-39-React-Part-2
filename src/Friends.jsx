//39-6 (Recap) Load Dynamic Data, API Call UseEffect Integrate State
import { useEffect, useState } from 'react'
import './friends.css'
import Frnd from './Frnd';
export default function Friends (){
    const [friends,setFriends] = useState([])
    useEffect(()=>{
        // const url = `https://jsonplaceholder.typicode.com/users/1/posts`;
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then((res)=>res.json())
            // .then((data)=>console.log(data))
            .then((data)=>setFriends(data))
        },[])
    return(
        <div className='friends'>
            <h3>Friends:{friends.length}</h3>
            {
                friends.map((x)=><Frnd frind = {x}></Frnd>)
            }
            {/* {
                friends.map((x)=>{
                    <Frnd></Frnd>
                })
            } */}
        </div>
    )
}

//6 min