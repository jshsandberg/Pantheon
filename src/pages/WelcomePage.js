import React, { useContext, useEffect } from "react";
import axios from "axios"
import { UserContext } from "../context/userContext";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";

export default function WelcomePage() {

    const history = useHistory();

    const {user} = useContext(UserContext);

    useEffect(() => {
        if (user !== null) {
            history.push({pathname: "/home"})
        }
    }, [history, user]);

    const sendMsg = async () => {
       await axios.get('/text').then(res => console.log(res))
    }

    return (
        <div>
            <Header />
            <button onClick={() => sendMsg()}>Send Message</button>
        </div>
    )
}
