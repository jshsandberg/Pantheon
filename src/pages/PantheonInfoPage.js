import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import { UserContext } from "../context/userContext";


export default function PantheonInfoPage({ location: { state: { data } } }) {

    const {user} = useContext(UserContext);

    console.log(data)


    return (
        <div>
            <div>
                <Header user={user} />
                <Menu user={user} />
            </div>
            <div>
                <div>
                    <h1>{data.category}</h1>
                    <h1>COMING SOOOOON</h1>
                </div>
            </div>
        </div>
    )
};