import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import "./topSongStyle.css"

export default function TopSong({ data, getUri, pantheon, transferUserSelection }) {

    const [showAll, setShowAll] = useState(6);

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
    };

    const sendUri = (uri) => {
        getUri(uri);
    };

    if (pantheon) {
        return (
            <div style={{margin: "0px 30px 0px 30px"}}>
                <div style={{display: "flex", flexDirection: "row", borderBottom: "1px solid", marginBottom: "10px"}}>
                    <h2 style={{margin: "20px 10px 5px 20px"}}>#</h2>
                    <h2 style={{margin: "20px 20px 5px 10px"}}>Title</h2>
                </div>
                {data.map((element, i) => { 
                    if (i < showAll) {
                        return (
                            <div  onDoubleClick={() => transferUserSelection(element.id)} onClick={() => sendUri(element.uri)} className="songContainer" key={i} style={{display: "flex", flexDirection: "row", padding: "0px 20px 0px 20px", justifyContent: "space-between"}}>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <div style={{position: "relative"}}>
                                        <h2 style={{position: "relative"}} className="number">{i}</h2>
                                        <div className="playIcon">
                                            <AiFillCaretRight />
                                        </div>
                                    </div>
                                        <div style={{marginLeft: "20px", marginTop: "5px"}}>
                                            <img src={element.album.images[2].url} alt="album" />
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
                    )} else {
                        return (
                            null
                        )
                        }    
                    })
            }
            <div style={{margin: "0px 0px 0px 30px"}}>
                {
                    showAll === 6 ?
                        <h2 style={{cursor: "pointer"}} onClick={() => setShowAll(11)}>Show More</h2>
                    :
                        <h2 style={{cursor: "pointer"}} onClick={() => setShowAll(6)}>Show Less</h2>

                }
            </div>
        </div>
            )
        } else {
            return (
        <div style={{margin: "0px 30px 0px 30px"}}>
            <div style={{display: "flex", flexDirection: "row", borderBottom: "1px solid", marginBottom: "10px"}}>
                <h2 style={{margin: "20px 10px 5px 20px"}}>#</h2>
                <h2 style={{margin: "20px 20px 5px 10px"}}>Title</h2>
            </div>
            {data.map((element, i) => { 
                if (i < showAll) {
                    return (
                        <div onClick={() => sendUri(element.uri)} className="songContainer" key={i} style={{display: "flex", flexDirection: "row", padding: "0px 20px 0px 20px", justifyContent: "space-between"}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <div style={{position: "relative"}}>
                                    <h2 style={{position: "relative"}} className="number">{i}</h2>
                                    <div className="playIcon">
                                        <AiFillCaretRight />
                                    </div>
                                </div>
                                    <div style={{marginLeft: "20px", marginTop: "5px"}}>
                                        <img src={element.album.images[2].url} alt="album" />
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
                    )} else {
                        return (
                            null
                        )
                }    
            })
            }
            <div style={{margin: "0px 0px 0px 30px"}}>
                {
                    showAll === 6 ?
                        <h2 style={{cursor: "pointer"}} onClick={() => setShowAll(11)}>Show More</h2>
                    :
                        <h2 style={{cursor: "pointer"}} onClick={() => setShowAll(6)}>Show Less</h2>

                }
            </div>
        </div>
    )
            }
}