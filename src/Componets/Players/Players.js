import React, { useEffect, useState } from 'react';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import PlayerSelection from '../PlayerSelection/PlayerSelection';
import TeamInfo from '../TeamInfo/TeamInfo';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [team,setTeam] = useState([]);
    useEffect(()=>{
    fetch('players.json')
    .then(res=> res.json())
    .then(data =>setPlayers(data))
    },[])

    const handleAddPlayer = (players) =>{
        const newTeam = [...team,players];
        setTeam(newTeam);
    }
    return (
        <div className="row">
        <div className="col-md-8">
        <div className="row">
             {
                 players.map(player =>  <PlayerInfo handleAddPlayer={handleAddPlayer} player={player}></PlayerInfo>)
             }
        </div>
           
        </div>
         <div className="col-md-4">
             <PlayerSelection team={team}></PlayerSelection>
             {
               team.map(member => <TeamInfo member={member}></TeamInfo>)
             }
        
         </div>
       </div>
    );
};

export default Players;