import { useEffect, useState } from "react"
import Friend from "./Friend";

function Friends (){
    const [friends , setFriends] = useState([]);
    
    useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data =>console.log(data))
    } , [])
    return(
        <div >
            <h3>Friends {friends.length} </h3>
            {
                friends.map(friend=> 
                 <Friend friend= {friend}></Friend>   )
            }

        </div>
    )
}