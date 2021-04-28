import React from "react";
import Bracket from "../../utils/4-Team-Single-Elimination.jpg";

export default function Tournament({ data, user, userSelection }) {

    console.log(userSelection)
    
    const playerArr = [data.battle.battleOne.fighterOne, data.battle.battleOne.fighterTwo, data.battle.battleTwo.fighterOne, data.battle.battleTwo.fighterTwo]

    return (
        <div>
            <h2 style={{textAlign: "center"}}>Tournament</h2>
            <div style={{position: "relative"}}>
                <img style={{marginLeft: "30px"}} src={Bracket} alt="bracket" />
                <p style={{position: "absolute", top: "-5px", left: "65px"}}>{data.battle.battleOne.fighterOne.username}</p>
                <p style={{position: "absolute", top: "95px", left: "65px"}}>{data.battle.battleOne.fighterTwo.username}</p>
                <p style={{position: "absolute", top: "200px", left: "65px"}}>{data.battle.battleTwo.fighterOne.username}</p>
                <p style={{position: "absolute", top: "305px", left: "65px"}}>{data.battle.battleTwo.fighterTwo.username}</p>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                {playerArr.map((item, i) => {
                    return (
                        <div style={{border: "solid 1px", padding: "15px", margin: "15px"}}>
                            <h2>{item.username}</h2>
                            {item.music === null ? <h2>No music submitted yet</h2> : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}