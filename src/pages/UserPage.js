import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { GetAllUsersPantheons } from "../components/Functions/GetAllUsersPantheons";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import CreatedPantheons from "../components/User/CreatedPantheons";
import { SeperatePantheons } from "../components/Functions/SeperatePantheons";
import UserPantheon from "../components/User/UserPantheon";
import { AllUserPantheons } from "../components/Functions/AllUserPantheons";
import UserProfile from "../components/User/UserProfile";

export default function UserPage() {

    const {user} = useContext(UserContext);

    const history = useHistory();

    const [creatorPantheons, setCreatorPantheons] = useState(null);
    const [userPantheons, setUserPantheons] = useState(null);


    useEffect(() => {
        if (user === null) {
            history.push({pathname: "/"})
        } else {
            const getUsersPantheons = async () => {
                const foundUserPantheons = await GetAllUsersPantheons(user.username);
                const seperatedCreatorPantheons = await SeperatePantheons(foundUserPantheons);
                await setCreatorPantheons(seperatedCreatorPantheons);
                const foundAllUserPantheons = await AllUserPantheons(user);
                const seperatedUserPantheons = await SeperatePantheons(foundAllUserPantheons);
                await setUserPantheons(seperatedUserPantheons)
            };
            getUsersPantheons();
        }
    }, [user, history]);


    return (
        <div>
            <div>
                <Header user={user} />
                <Menu user={user} />
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <CreatedPantheons data={creatorPantheons} />
                    <UserPantheon data={userPantheons} />
                </div>
                <div>
                    <UserProfile user={user} />
                </div>
            </div>
      
        </div>
    )
}