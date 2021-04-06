import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import AlbumSong from "../components/Music/AlbumSong";
import { getAlbum } from "../components/Functions/GetAlbum";
import SpotifyPlayerComponent from "../components/Music/SpotifyPlayer";
import Color from 'color-thief-react'

export default function AlbumPage({ location }) {

    const history = useHistory();

    const [dominantColor, setDominantColor] = useState("");
    const [info, setInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [uri, setUri] = useState(null);

    useEffect(() => {
        const getAlbumFromState = async (id) => {
            const results = await getAlbum(id);
            await setInfo(results);
            await setIsLoading(false)
        };
        getAlbumFromState(location.state.albumId);
    }, [location]);

    const getUri = (data) => {
        setUri(data);
    }


    const style = {
        backgroundColor: `rgba(${dominantColor})`,
        backgroundImage: `linear-gradient(rgba(${dominantColor}), white)`,
        height: "600px",
        position: "absolute",
        width: "100%",
        zIndex: "-10"
    };

    return (
        <div style={{position: "relative"}}>
            <Color src={location.state.image} crossOrigin="anonymous" format="rgbArray">
                {({ data, loading }) => {if (!loading) setDominantColor(data)}}
            </Color>
            <Header />
            <Menu />
            <div style={style}></div>
            <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                <img style={{margin: "30px"}} src={location.state.image} alt="album" />
                <div style={{alignSelf: "flex-end"}}>
                    <h1 style={{fontSize: "85px", marginBottom: "10px", color: "black"}}>{location.state.albumName}</h1>
                    <div style={{marginBottom: "30px"}}>
                        <h2 onClick={() => history.push({pathname: "/artist", state: location.state.artistId })} style={{color: "black", cursor: "pointer"}}>{location.state.artist}</h2>
                    </div>
                </div>
            </div>
            {
                !isLoading ?
                <AlbumSong data={info} getUri={getUri} />
                :
                <h2>Loading</h2>
            }
            <div style={{position: "fixed", bottom: "0", width: "100%"}}>
                <SpotifyPlayerComponent uri={uri} />
            </div>
        </div>
    )
}