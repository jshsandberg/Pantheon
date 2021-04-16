import React, { useState } from "react";
import { AddedFriend } from "../Functions/AddedFriend";

export default function AddFriend({ user }) {

    const [selector, setSelector] = useState("username");
    const [input, setInput] = useState(null);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const addFriend = async () => {
        const addedFriend = await AddedFriend(user.username, selector, input);
        setMessage(addedFriend);
    };

    return (
        <div style={{display: "flex", flexDirection: "column", border: "solid 1px", margin: "10px"}}>
            <div style={{display: "flex", flexDirection: "row", alignSelf: "center", padding: "10px", margin: "10px", justifyContent: "center"}}>
                <h2>Add Friend</h2>
                <div>
                    <form style={{display: "flex", flexDirection: "row"}}>
                        <label htmlFor="user"><h2 style={{marginLeft: "5px"}}>using:</h2></label>
                        <select onClick={(e) => setSelector(e.target.value)} style={{padding: "0px", height: "30px", marginTop: "25px", marginLeft: "10px"}} name="selector">
                        <option value="username">Username</option>
                        <option  value="email">Email</option>
                        </select>
                    </form>
                </div>
                <div style={{marginTop: "27px", marginLeft: '15px'}}>
                    <form>
                        <input onChange={handleChange} tye="text" name="userInput"/>
                    </form>
                </div>
                <div>
                    <button onClick={addFriend} style={{marginTop: "29px"}}>Submit</button>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
            {
                message === "Friend request sent" ?
                    <div style={{position: "relative"}}>
                        <h2 style={{backgroundColor: "green", padding: "10px", color: "white"}}>{message}</h2>
                        <button onClick={() => setMessage("")} style={{position: "absolute", top: "0", right: "-140px"}}>Close Message</button>
                    </div>
                :
                message === "User is already friends with this user" ?
                    <div style={{position: "relative"}}>
                        <h2 style={{backgroundColor: "red", padding: "10px", color: "white"}}>{message}</h2>
                        <button onClick={() => setMessage("")} style={{position: "absolute", top: "0", right: "-140px"}}>Close Message</button>
                    </div>
                :
                null
            }
        </div>
    </div>

    )
}