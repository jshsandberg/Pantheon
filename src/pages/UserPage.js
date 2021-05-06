import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext"
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import CreatedPantheons from "../components/User/CreatedPantheons";

export default function UserPage() {

    const {user} = useContext(UserContext);

    useEffect(() => {

    }, [])


    return (
        <div>
            <div>
                <Header user={user} />
                <Menu user={user} />
            </div>
            <div>
                <CreatedPantheons />
            </div>
        </div>
    )
}