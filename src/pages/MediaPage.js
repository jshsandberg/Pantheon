import React from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Album from "../components/Music/Album";
import Artist from "../components/Music/Artist";
import Song from "../components/Music/Song";

export default function MediaPage({ location }) {

    return (
        <div style={{width: "1920px"}}>
            <Header />
            <Menu />
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <div>
                    <Song data={location.state.track} />
                </div>
                <div>
                    <Album data={location.state.albums}/>
                </div>
                <div>
                    <Artist data={location.state.artist} />
                </div>
            </div>
        </div>
    )
}