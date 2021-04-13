import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Album from "../components/Music/Album";
import Artist from "../components/Music/Artist";
import Song from "../components/Music/Song";
import SpotifyPlayerComponent from "../components/Music/SpotifyPlayer";

export default function MediaPage({ location }) {

    const {user} = useContext(UserContext);

    const [uri, setUri] = useState(null);

    const getUri = (data) => {
        setUri(data);
    }

    return (
        <div>
            <Header user={user} />
            <Menu user={user} />
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "5px", flexWrap: "wrap"}}>
                <div>
                    <Song data={location.state.track} getUri={getUri} />
                </div>
                <div>
                    <Album data={location.state.albums} getUri={getUri}/>
                </div>
                <div>
                    <Artist data={location.state.artist} getUri={getUri} />
                </div>
            </div>
            <div style={{position: "fixed", bottom: "0", width: "100%"}}>
                <SpotifyPlayerComponent uri={uri} />
            </div>
        </div>
    )
}