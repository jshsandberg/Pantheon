import React from "react";
import Header from "../components/Header/Header";
import SignUp from "../components/SignUp/SignUp";

export default function SignUpPage() {

    return (
        <div>
            <Header />
            <div style={{display: "flex", justifyContent: "center"}}>
                <SignUp />
            </div>
        </div>
    )
}