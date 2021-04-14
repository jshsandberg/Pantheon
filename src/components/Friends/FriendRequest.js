import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { friendRequests } from "../Functions/CheckFriendRequest";

export default function FriendRequest() {

    const {user} = useContext(UserContext);
    const [requests, setRequests] = useState(null);

    useEffect(() => {
        const checkForFriendRequests = async () => {
            const checkedRequest = await friendRequests(user.username);
            await setRequests(checkedRequest);
        };
        checkForFriendRequests();
    }, [user]);

    return (
        <div style={{display: "flex", flexDirection: "column", border: "solid 1px"}}>
            <div>
                <h2 style={{textAlign: "center"}}>Friend Request</h2>
            </div>
            {
                requests.map((item, i) => {
                    return (
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div>
                                <h2>{item}</h2>
                            </div>
                            <div>
                                <button>Accept</button>
                            </div>
                            <div>
                                <button>Decline</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}