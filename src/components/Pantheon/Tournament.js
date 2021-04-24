import React from "react";
import Bracket from "../../utils/4-Team-Single-Elimination.jpg";

export default function Tournament({ data }) {

    return (
        <div>
            <div style={{position: "relative"}}>
                <img src={Bracket} alt="bracket" />
                <p style={{position: "absolute", top: "-5px", left: "35px"}}>{data.battle.battleOne.fighterOne.username}</p>
                <p style={{position: "absolute", top: "95px", left: "35px"}}>{data.battle.battleOne.fighterTwo.username}</p>
                <p style={{position: "absolute", top: "200px", left: "35px"}}>{data.battle.battleTwo.fighterOne.username}</p>
                <p style={{position: "absolute", top: "305px", left: "35px"}}>{data.battle.battleTwo.fighterTwo.username}</p>
            </div>
        </div>
    )
}