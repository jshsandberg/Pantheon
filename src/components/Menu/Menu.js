import React, { useState } from "react";
import Friends from "../Friends/Friends";
import FriendRequestModal from "../Modal/FriendRequestModal";
import "./menuStyle.css"

export default function Menu({ user }) {


    const [fade, setFade] = useState(false);
    const [show, setShow] = useState(false);

    const onClose = () => {
        setShow(false)
    };


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
            <button onClick={() => fade ? setFade(false) : setFade(true)} style={{position: "absolute", top: "20px", left: "200px"}}>Menu</button>
            <div style={{position: "relative"}}>
                <div style={style}>
                        <div onClick={() => setShow(true)} className="menu" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "0px"}}>
                            <h2 style={{color: "white"}}>Friend Requests</h2>
                            <h2 style={{color: "white"}}>+6</h2>
                        </div>
                    <div className="menu" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "0px"}}>
                        <h2 style={{color: "white"}}>Friends</h2>
                        <h2>+6</h2>
                    </div>
                    <div className="menu" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "0px"}}>
                        <h2 style={{color: "white"}}>Friends</h2>
                        <h2>+6</h2>
                    </div>
                    <div className="menu" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "0px"}}>
                        <h2 style={{color: "white"}}>Friends</h2>
                        <h2>+6</h2>
                    </div>
                    <div>
                        <Friends user={user} />
                    </div>
                </div>
            </div>
            <div>
                <FriendRequestModal show={show} hide={onClose} user={user} />
            </div>
        </div>
    )
}