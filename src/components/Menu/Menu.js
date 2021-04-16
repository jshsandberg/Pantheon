import React, { useState, useEffect } from "react";
import { friendRequests } from "../Functions/CheckFriendRequest";
import { GetFriends } from "../Functions/GetFriends.js";
import Friends from "../Friends/Friends";
import FriendRequestModal from "../Modal/FriendRequestModal";
import "./menuStyle.css"

export default function Menu({ user }) {

    const [rerender, setRerender] = useState(0);
    const [fade, setFade] = useState(false);
    const [show, setShow] = useState(false);
    const [friends, setFriends] = useState(null);
    const [requests, setRequests] = useState(null);

    useEffect(() => {
        const gettingFriends = async () => {
            const gotFriends = await GetFriends(user.username);
            await setFriends(gotFriends)
        };
        const checkForFriendRequests = async () => {
            const checkedRequest = await friendRequests(user.username);
            await setRequests(checkedRequest);
        };
        checkForFriendRequests();
        gettingFriends();
    }, [user, rerender]);

      // useEffect(() => {
    //     const checkForFriendRequests = async () => {
    //         const checkedRequest = await friendRequests(user.username);
    //         await setRequests(checkedRequest);
    //     };
    //     checkForFriendRequests();
    // }, [user, rerender]);

    const onClose = () => {
        setShow(false)
    };

    const rerenderPage = () => {
        setRerender(rerender => rerender + 1)
    }


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
            <button onClick={() => fade ? setFade(false) : setFade(true)} style={{position: "absolute", top: "3px", left: "200px"}}>{!fade ? <h4>Menu</h4> : <h4>Close</h4>}</button>
            <div style={{position: "relative"}}>
                <div style={style}>
                        <div onClick={() => setShow(true)} className="menu" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "0px"}}>
                            <h2 style={{color: "white"}}>Friend Requests</h2>
                            {requests !== null ? <h2 style={{color: "white"}}>+{requests.length}</h2> : <h2 style={{color: "white"}}>+0</h2>}
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
                        <Friends friends={friends}/>
                    </div>
                </div>
            </div>
            <div>
                <FriendRequestModal show={show} hide={onClose} user={user} rerenderPage={rerenderPage} requests={requests} />
            </div>
        </div>
    )
}