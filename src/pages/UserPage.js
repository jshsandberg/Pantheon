import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { GetAllUsersPantheons } from "../components/Functions/GetAllUsersPantheons";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import CreatedPantheons from "../components/User/CreatedPantheons";
import { SeperatePantheons } from "../components/Functions/SeperatePantheons";

export default function UserPage() {

    const {user} = useContext(UserContext);

    const history = useHistory();

    const [creatorPantheons, setCreatorPantheons] = useState(null);


    useEffect(() => {
        if (user === null) {
            history.push({pathname: "/"})
        } else {
            const getUsersPantheons = async () => {
                const foundUserPantheons = await GetAllUsersPantheons(user.username);
                const seperatedPantheons = await SeperatePantheons(foundUserPantheons);
                await setCreatorPantheons(seperatedPantheons);
            };
            getUsersPantheons();
        }
    }, [user])


    return (
        <div>
            <div>
                <Header user={user} />
                <Menu user={user} />
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <CreatedPantheons data={creatorPantheons} />
            </div>
            <div>
                
   
            </div>
        </div>
    )
}