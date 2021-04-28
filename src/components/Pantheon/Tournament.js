import React, { useState } from "react";
import Bracket from "../../utils/4-Team-Single-Elimination.jpg";
import { SaveSong } from "../Functions/SaveSong";
import Modal from "../Modal/Modal";

export default function Tournament({ data, user, userSelection }) {
    
    const playerArr = [data.battle.battleOne.fighterOne, data.battle.battleOne.fighterTwo, data.battle.battleTwo.fighterOne, data.battle.battleTwo.fighterTwo];

    const [show, setShow] = useState(false);

    const submitSong = async () => {
        const saveSongForUser = await SaveSong(user.username, userSelection, data._id);
        // console.log(saveSongForUser)
    };

    const close = () => {
        setShow(false)
    }

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
                        <div key={i} style={{border: "solid 1px", padding: "15px", margin: "15px"}}>
                           <h2>{item.username}</h2>
                            {user.username === item.username && userSelection !== null ? <img style={{width: "135px"}} src={userSelection.album.images[1].url} alt="music" /> : item.music === null ? <h2>No music submitted yet</h2> : null}
                        </div>
                    )
                })}
            </div>
            <div>
                { userSelection ? <button onClick={() => setShow(true)} style={{width: "100px", height: "40px"}}>Submit Song</button> : null }
            </div>
            <div>
                <Modal show={show} message={"Are you sure you want to submit this song. You can only submit one song"} hide={close} confirmed={true} method={submitSong}  />
            </div>
        </div>
    )
}