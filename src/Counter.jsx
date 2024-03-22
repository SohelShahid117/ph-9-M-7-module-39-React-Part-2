import { useState } from "react"

export default function Counter(){
    // const a = useState(0);
    // console.log(a);

    const [count,setCount] = useState(0);
    // console.log(count)
    // console.log(setCount)

    const handleAdd = () =>{
        const newCount = count+1;
        setCount(newCount);
    }

    const handleReduce = () =>{
        const newCount = count-1;
        setCount(newCount);
    }

    return(
        <div style={{border:'2px solid orange'}}>
            <h3>Counter:{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}