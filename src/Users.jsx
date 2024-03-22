import { useEffect, useState } from "react"

export default function Users(){
    // const [users,setUsers] = useState([])
    // const f = () =>{};
    // useEffect(f,[])
    // useEffect(()=>{},[])

    // const url = `https://jsonplaceholder.typicode.com/users/1/posts`;
    // fetch(url)
    // .then((res)=>res.json())
    // .then((data)=>console.log(data))

    const [users,setUsers] = useState([]);
    useEffect(()=>{
            const url = `https://jsonplaceholder.typicode.com/users/1/posts`;
            fetch(url)
                .then((res)=>res.json())
                // .then((data)=>console.log(data))
                .then((data)=>setUsers(data))
            },[])


    return (
        <div>
            <h3>Users : {users.length}</h3>
        </div>
    )
}
/*
1.declare a state to hold the data
2.useEffect with callback & dependency array
3.use fetch to load data
4.set loaded data to the state
*/