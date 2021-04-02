import React from "react";
import SpotifyPlayer from 'react-spotify-player';

export default function SpotifyPlayerComponent({ uri }) {

    if (uri !== null) {
        return (
            <div style={{width: "100%", backgroundColor: "dodgerblue", display: "flex", justifyContent: "center", height: "70px"}}>
                <div>
                    <SpotifyPlayer
                        size="compact"
                        uri={uri} 
                    />
                </div>
            </div>
        )
    } else {
        return (
            null
        )
    }
}