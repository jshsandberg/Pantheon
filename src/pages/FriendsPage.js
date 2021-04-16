import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Friends from "../components/Friends/Friends";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import AddFriend from "../components/Friends/AddFriend";
import FriendRequest from "../components/Friends/FriendRequest";

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
                            <Friends user={user}/>
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div>
                                <AddFriend user={user} /> 
                            </div>
                            <div>
                                <FriendRequest user={user} />
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