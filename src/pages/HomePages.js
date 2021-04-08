import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header";
import FriendsArena from "../components/FriendsArena/FriendsArena";
import CreatePantheon from "../components/CreatePantheon/CreatePantheon";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";



export default function HomePage() {

    const {user} = useContext(UserContext);

    const history = useHistory();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user === null) {
            history.push({pathname: "/"})
        } else {
            setLoading(false)
        }
    }, [user, history])

    return (
        <div>
            {
                !loading ?
                <div>
                    <Header user={user} />
                    <Menu />
                    <div style={{display: "block"}}>
                        <FriendsArena />
                        <CreatePantheon />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
                :
                null
            }         
        </div>
    )
}