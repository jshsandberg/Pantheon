import React from "react";
import SpotifyPlayer from 'react-spotify-player';
import { SubmitFinalVote } from "../Functions/SubmitFinalVote";


export default function VotingModal({ show, hide, item, pantheon, user, number, rerenderPage }) {

    const onClose = () => {
        hide()
    };

    const vote = async (username, fighter, pantheonId, battle) => {
        await SubmitFinalVote(username, fighter, pantheonId, battle);
        await rerenderPage()
        await onClose();
    }

    if (show === true) {
    return (
        <div className="votingModal">
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <h2>Vote according to: {pantheon.category}</h2>
                <button style={{height: "40px"}} onClick={onClose}>Close</button>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <button onClick={() => vote(user.username, "fighterOne", pantheon._id, item)} style={{backgroundColor: "dodgerblue", borderColor: "dodgerblue", fontSize: "20px", padding: "20px"}}>Vote for {item.fighterOne.username}</button>
                <h2 style={{textAlign: "center", padding: "20px 0px 0px 0px"}}>VS</h2>
                <button onClick={() => vote(user.username, "fighterTwo", pantheon._id, item)} style={{backgroundColor: "dodgerblue", borderColor: "dodgerblue", fontSize: "20px", padding: "20px"}}>Vote for {item.fighterTwo.username}</button>
            </div>
            <div style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <div className="votingHighlight" style={{display: "flex", flexDirection: "row", justifyContent: "space-around", padding: "25px"}}>
                    <img style={{width: "135px", height: "auto"}} src={item.fighterOne.music.image} alt="album" />
                    <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                        <h3>{item.fighterOne.music.name}</h3>
                        <h3>{item.fighterOne.music.artist}</h3>
                    </div>
                </div>
                <div className="votingHighlight" style={{display: "flex", flexDirection: "row", justifyContent: "space-around", padding: "25px"}}>                 
                    <img style={{width: "135px", height: "auto"}} src={item.fighterTwo.music.image} alt="album" />
                    <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                        <h3>{item.fighterTwo.music.name}</h3>
                        <h3>{item.fighterTwo.music.artist}</h3>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <SpotifyPlayer
                    size="compact"
                    uri={item.fighterOne.music.uri} 
                />
                <SpotifyPlayer
                    size="compact"
                    uri={item.fighterTwo.music.uri} 
                />
            </div>
        </div>
    )
    } else {
        return null    
    }
}