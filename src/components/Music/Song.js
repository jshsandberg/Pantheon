import React, { useState } from "react";
import SpotifyPlayer from 'react-spotify-player';
import { AiFillCaretRight } from "react-icons/ai";
import "./songStyle.css";

export default function Song({ data }) {

    const [uri, setUri] = useState(null)

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
    }

    return (
        <div style={{display: "flex", flexDirection: "column", width: "510px"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <h1>Songs</h1>
                {
                uri ?
                <SpotifyPlayer
                uri={uri}
                size="compact"
                />
                :
                null
                }
            </div>
            {data.map((data, i) => {
                return (
                    <div onClick={() => setUri(data.uri)} className="songs" key={i} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div className="container">
                            <img className="artwork" style={{marginRight: "20px"}} src={data.album.images[2].url} alt="track" />
                            <div className="center">
                                <AiFillCaretRight />
                            </div>
                         </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <h3 style={{margin: "0"}}>{data.name}</h3>
                            <h4 style={{margin: "0"}}>{data.artists[0].name}</h4>
                        </div>
                    </div>
                    <div>
                        <h4>{millisToMinutesAndSeconds(data.duration_ms)}</h4>
                    </div>  
                </div>
                )
            })}
        </div>
    )
}