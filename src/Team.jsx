import { useState } from "react"

export default function Team(){
    // const [count] = useState(11);
    // const count = useState(11);
    const [team,setTeam] = useState(11);
    console.log(count)

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () =>{
        // const newTeam = team - 1;
        // setTeam(newTeam);
        setTeam(team-1);
    }
    const teamStyle = {
        border:'2px solid green',
        margin:'20px',
        padding:'10px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>
            <h2>Players:{team}</h2>
            <button onClick={handleAdd}>Add Players</button>
            <button onClick={handleRemove}>Remove Players</button>
        </div>
    )
}