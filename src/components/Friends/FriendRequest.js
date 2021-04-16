import React, { useEffect, useState } from "react";
import { AcceptFriendRequest } from "../Functions/AcceptFriendRequest";
import Modal from "../Modal/Modal";
import { DeclineFriendRequest } from "../Functions/DeclineFriendRequest"
import { friendRequests } from "../Functions/CheckFriendRequest";

export default function FriendRequest({ user }) {

    const [rerender, setRerender] = useState(0);
    const [requests, setRequests] = useState(null);
    const [message, setMessage] = useState("");

    console.log(message)

    useEffect(() => {
        const checkForFriendRequests = async () => {
            const checkedRequest = await friendRequests(user.username);
            await setRequests(checkedRequest);
        };
        checkForFriendRequests();
    }, [user, rerender]);

    const acceptingFriendRequest = async (username, friendUsername) => {
        const acceptedFriendRequest = await AcceptFriendRequest(username, friendUsername);
        await setMessage(acceptedFriendRequest);
        await setRerender(rerender => rerender + 1)
    };

    const decliningFriendRequest = async (username, friendUsername) => {
        const declinedFriendRequest = await DeclineFriendRequest(username, friendUsername);
        await setMessage(declinedFriendRequest);
        await setRerender(rerender => rerender + 1)
    };

    return (
        <div style={{display: "flex", flexDirection: "column", border: "solid 1px", padding: "10px", margin: "10px"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h2 style={{textAlign: "center", padding: "5px", marginRight: "15px"}}>Friend Request</h2>
                {
                    message === "Friend Request accepted" ?
                    <div style={{position: "relative"}}>
                        <h2 style={{marginLeft: "15px", backgroundColor: "green", padding: "5px", color: "white"}}>{message}</h2>
                        <button onClick={() => setMessage("")} style={{position: "absolute", top: "0", right: "-140px"}}>Close Message</button>
                    </div>
                    :
                    message === "Friend Request declined" ?
                    <div style={{position: "relative"}}>
                    <h2 style={{marginLeft: "15px", backgroundColor: "red", padding: "5px", color: "white"}}>{message}</h2>
                    <button onClick={() => setMessage("")} style={{position: "absolute", top: "0", right: "-140px"}}>Close Message</button>
                </div>                    :
                    null
                }
            </div>
            <div style={{maxHeight: "275px", overflow: "auto"}}>
            {
                requests && requests.length === 0 ?
                    <div>
                        <h2 style={{textAlign: "center"}}>There are no friend requests</h2>   
                    </div>
                :
                requests && requests.map((item, i) => {
                    return (
                        <div key={i} style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <div>
                                <h2>{item}</h2>
                            </div>
                            <div style={{marginTop: "8px"}}>
                                <button onClick={() => acceptingFriendRequest(user.username, item)}>Accept</button>
                                <button onClick={() => decliningFriendRequest(user.username, item)}>Decline</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )

}