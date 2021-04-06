import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import "./albumSongStyle.css"

export default function AlbumSong({ data, getUri }) {

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
    };

    const sendUri = (uri) => {
        getUri(uri);
    }

    return (
        <div style={{margin: "0px 30px 0px 30px"}}>
            <div style={{display: "flex", flexDirection: "row", borderBottom: "1px solid", marginBottom: "10px"}}>
                <h2 style={{margin: "20px 10px 5px 20px"}}>#</h2>
                <h2 style={{margin: "20px 20px 5px 10px"}}>Title</h2>
            </div>
            {
            data.map((element, i) => {
            return (
                <div onClick={() => sendUri(element.uri)} className="songContainer" key={i} style={{display: "flex", flexDirection: "row", padding: "0px 20px 0px 20px", justifyContent: "space-between"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{position: "relative"}}>
                            <h2 className="number">{i}</h2>
                            <div className="playIcon">
                                <AiFillCaretRight />
                            </div>
                        </div>
                        <div>
                            <h3 style={{margin: "10px 0px 0px 20px"}}>{element.name}</h3>
                            <h4 style={{margin: "0px 0px 10px 20px"}}>{element.artists[0].name}</h4>
                        </div> 
                    </div>
                    <div>
                        <h4>{millisToMinutesAndSeconds(element.duration_ms)}</h4>
                    </div>   
                </div>
            )
            })
            }
        </div>
    )
}