import React from "react";
import AddFriend from "../Friends/AddFriend";
import FriendRequest from "../Friends/FriendRequest";
import "./modalStyle.css"


export default function FriendRequestModal({ show, hide, user }) {

    const onClose = () => {
        hide()
    };

    if (show) {
        return (
            <div style={{display: "flex", flexDirection: "column"}} className="friendRequestModal">
                <div style={{position: "relative"}}>
                    <h2 style={{textAlign: "center"}}>Friend Requests</h2>
                    <button style={{position: "absolute", top: "0", right: "0"}} className="modalFriendRequestButton" onClick={() => onClose()}>Close</button>
                </div>
                <div>
                    <AddFriend user={user} />
                </div>
                <div>
                    <FriendRequest user={user} />
                </div>
            </div>
        )
    } else {
        return null
    }
}