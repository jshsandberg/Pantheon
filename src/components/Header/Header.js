import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link, useHistory } from "react-router-dom";
import { getSpotifyAccess } from "../Functions/GetSpotifyToken";
import "./style.css"

export default function Header({ user, pantheon }) {

    console.log(pantheon)

    const history = useHistory();

    const {setUser} = useContext(UserContext);

    const [value, setValue] = useState("");

    const getSpotifyData = async (e) => {
        e.preventDefault();
        const data = await getSpotifyAccess(value);
        history.push({pathname: "/media", state: data})   
    };

    const signOut = () => {
        localStorage.removeItem("auth-token");
        setUser(null);
        history.push({pathname: "/"})
    };

    
    return (
        <div className="headerStyle">
            {
                user ?
                <div>
                    <button onClick={signOut} className="signOutButton">Sign Out</button>
                    <h2 className="user">{user.username}</h2>
                </div>
                :
                <div>
                    <Link to="/login"><button className="loginButton">Login</button></Link>
                    <Link to="/signup"><button className="signUpButton">Sign Up</button></Link>
                </div>
            }
            <Link style={{textDecoration: "none"}} to="/home"><h1 style={{marginLeft: "30px", color: "white"}}>Pantheon</h1></Link>
            {
                !pantheon ?    
                <form style={{position: "absolute", top: "11px", left: "345px"}}>
                    <input onChange={(e) => setValue(e.target.value)} type="text" />
                    <button onClick={(e) => getSpotifyData(e)} style={{padding: "10px"}}>Search</button>
                </form>
                :
                null
            }
          
        </div>
    )
};
