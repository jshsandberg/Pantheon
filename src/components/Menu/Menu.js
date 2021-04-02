import React, { useState } from "react";
import "./menuStyle.css"

export default function Menu() {


    const [fade, setFade] = useState(false);


    const style = {
        position: "absolute",
        top: "0px",
        left: "-310px",
        height: "100vh",
        width: "300px",
        zIndex: "100",
        backgroundColor: "dodgerblue",
        borderRight: "10px solid rgb(219, 61, 68)",
        transform: fade ? 'translateX(100%)' : 'translateX(0)',
        transition: "transform 0.3s ease-in-out",
        display: "flex",
        flexDirection: "column",
    };

    return (
      
        <div>
            <button onClick={() => setFade(true)} style={{position: "absolute", top: "20px", left: "200px"}}>Menu</button>
            <div style={{position: "relative"}}>
            <div style={style}>
                <button onClick={() => setFade(false)} style={{position: "absolute", top: "-15px", left: "225px"}}>Close</button>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", paddingTop: "25px"}}>
                    <h2 style={{color: "white"}}>Pantheon</h2>
                    <button>Link</button>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", paddingTop: "25px"}}>
                    <h2 style={{color: "white"}}>Pantheon</h2>
                    <button>Link</button>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", paddingTop: "25px"}}>
                    <h2 style={{color: "white"}}>Pantheon</h2>
                    <button>Link</button>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", paddingTop: "25px"}}>
                    <h2 style={{color: "white"}}>Pantheon</h2>
                    <button>Link</button>
                </div>
            </div>
            </div>
        </div>
    )
}