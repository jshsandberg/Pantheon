import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import PantheonPic from "../utils/pantheon.gif";
// import Test from "../components/test";
// import Card from "../components/Pantheon/Card";

export default function WelcomePage() {

    const history = useHistory();

    const {user} = useContext(UserContext);

    useEffect(() => {
        if (user !== null) {
            history.push({pathname: "/home"})
        }
    }, [history, user]);

  

    return (
        <div>
            <Header />
            <div style={{display: "flex", justifyContent: "center"}}>
                <img style={{marginTop: "10vh"}} src={PantheonPic} alt="pantheonPicture" />
            </div>
        </div>
    )
}
