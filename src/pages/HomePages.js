import React from "react";
import Header from "../components/Header/Header";
import FriendsArena from "../components/FriendsArena/FriendsArena";
import CreatePantheon from "../components/CreatePantheon/CreatePantheon";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";



export default function HomePage() {
    return (
        <div>
            <Header />
            <Menu />
            <div style={{display: "block"}}>
                <FriendsArena />
                <CreatePantheon />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}