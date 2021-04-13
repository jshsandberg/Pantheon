import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { AddedFriend } from "../Functions/AddedFriend";

export default function AddFriend() {

    const {user} = useContext(UserContext);

    const [selector, setSelector] = useState("username");
    const [input, setInput] = useState(null);

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const addFriend = async () => {
        const addedFriend = await AddedFriend(user.username, selector, input);
    };

    return (
        <div style={{display: "flex", border: "solid 1px", flexDirection: "row", alignSelf: "center", padding: "10px"}}>
            <h2>Add Friend</h2>
            <div>
                <form style={{display: "flex", flexDirection: "row"}}>
                    <label for="user"><h2 style={{marginLeft: "5px"}}>using:</h2></label>
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
    )
}