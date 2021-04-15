import React, { useEffect, useContext, useState } from "react";
import { AcceptFriendRequest } from "../Functions/AcceptFriendRequest";
import { UserContext } from "../../context/userContext";
import { friendRequests } from "../Functions/CheckFriendRequest";
import { set } from "mongoose";

export default function FriendRequest() {

    const {user} = useContext(UserContext);
    const [rerender, setRerender] = useState(0);
    const [requests, setRequests] = useState(null);

    useEffect(() => {
        console.log("rerender")
        const checkForFriendRequests = async () => {
            const checkedRequest = await friendRequests(user.username);
            await setRequests(checkedRequest);
        };
        checkForFriendRequests();
    }, [user, rerender]);

    const acceptingFriendRequest = async (username, friendUsername) => {
        await AcceptFriendRequest(username, friendUsername);
        await setRerender(rerender => rerender + 1)
    };

    const decliningFriendRequest = async () => {

    };

    return (
        <div style={{display: "flex", flexDirection: "column", border: "solid 1px"}}>
            <div>
                <h2 style={{textAlign: "center"}}>Friend Request</h2>
            </div>
            {
                requests && requests.map((item, i) => {
                    return (
                        <div key={i} style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <div>
                                <h2>{item}</h2>
                            </div>
                            <div style={{marginTop: "8px"}}>
                                <button onClick={() => acceptingFriendRequest(user.username, item)}>Accept</button>
                                <button onClick={() => decliningFriendRequest()}>Decline</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}