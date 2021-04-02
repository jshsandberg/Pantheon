import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getSpotifyAccess } from "../Functions/GetSpotifyToken";
import "./style.css"

export default function Header({ user }) {

    const history = useHistory()

    const [value, setValue] = useState("")

    const getSpotifyData = async (e) => {
        e.preventDefault();
        const data = await getSpotifyAccess(value);
        history.push({pathname: "/media", state: data})
        
    }
    
    return (
        <div className="headerStyle">
            <Link to="/login"><button className="loginButton">Login</button></Link>
            <Link to="/signup"><button className="signUpButton">Sign Up</button></Link>
            <Link style={{textDecoration: "none"}} to="/"><h1 style={{marginLeft: "30px", color: "white"}}>Pantheon</h1></Link>
            <form style={{position: "absolute", top: "11px", left: "345px"}}>
                <input onChange={(e) => setValue(e.target.value)} type="text" />
                <button onClick={(e) => getSpotifyData(e)} style={{padding: "10px"}}>Search</button>
            </form>
        </div>
    )
};
