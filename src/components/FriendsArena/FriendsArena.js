import React, { useEffect, useState } from "react";
import { GetFriendsPantheon } from "../Functions/GetFriendsPantheon";
import "./friendsArenaStyle.css"

export default function FriendsArena({ user }) {

    const [pantheon, setPantheon] = useState(null);

    useEffect(() => {
        const gettingFriendsPantheon = async () => {
            const gotFriendsPantheon = await GetFriendsPantheon(user);
            await setPantheon(gotFriendsPantheon)
        };
        gettingFriendsPantheon();
    }, []);


    return (
        <div style={{float: "left", width: "40%", boxSizing: "border-box", display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "10px"}}>
            <div style={{backgroundColor: "dodgerblue", margin: "auto", padding: "5px", width: "30%", borderRadius: "10px"}}>
                <h2 style={{textAlign: "center", color: "white"}}>Active Pantheons</h2>
            </div>
            <div className="parentDiv">
            {pantheon && pantheon.map((item, i) => {
                return (
                    <div key={i} >
                        <div className="highlight" style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                            <img style={{width: "20%", height: "20%"}} src={item.battle.battleOne.fighterOne.music.image} alt="album" />
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                <h2>{item.battle.battleOne.fighterOne.username}</h2>
                            </div>
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                <h2 style={{textAlign: "center"}}>VS</h2>
                            </div>
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                <h2>{item.battle.battleOne.fighterTwo.username}</h2>
                            </div>                   
                            <img style={{width: "20%", height: "20%"}} src={item.battle.battleOne.fighterTwo.music.image} alt="album" />
                        </div>
                        <div className="highlight" style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                            <img style={{width: "20%", height: "20%"}} src={item.battle.battleTwo.fighterOne.music.image} alt="album" />
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                <h2>{item.battle.battleTwo.fighterOne.username}</h2>
                            </div>
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                <h2 style={{textAlign: "center"}}>VS</h2>
                            </div>
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                <h2>{item.battle.battleTwo.fighterTwo.username}</h2>
                            </div>                   
                            <img style={{width: "20%", height: "20%"}} src={item.battle.battleTwo.fighterTwo.music.image} alt="album" />
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
   
    )
};