import React from "react";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";

export default function LoginPage() {

    return (
        <div>
            <Header />
            <div style={{display: "flex", justifyContent: "center"}}>
                <Login />
            </div>
        </div>
    )
}