import { useState } from "react"

export default function Team() {


    const [team, setTeam] = useState(11);

    const handleTeam = () =>{
      const newTeam = team + 1;
      setTeam(newTeam)
    }
    const handleTeamRemove = () =>{
      const newTeam = team - 1;
      setTeam (newTeam);

    }
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '14px',
        borderRadius: '15px'
    }
        return (
            <div style={teamStyle}>
                <h1>players {team} </h1>
                <button onClick={handleTeam}>add team member</button>
                <button onClick={handleTeamRemove}>Remove </button>
            </div>
        )
    }