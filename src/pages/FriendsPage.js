import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import AddFriend from "../components/Friends/AddFriend";

export default function FriendsPage() {

    const history = useHistory();

    const [loading, setLoading] = useState(true);

    const {user} = useContext(UserContext);


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
                    <Menu user={user} />
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div>
                                <AddFriend /> 
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}