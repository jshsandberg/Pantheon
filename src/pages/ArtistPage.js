import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import { getArtist } from "../components/Functions/GetArtist";
import TopSong from "../components/Music/TopSong";
import SpotifyPlayerComponent from "../components/Music/SpotifyPlayer";
import Color from 'color-thief-react'
import ArtistAlbums from "../components/Music/ArtistAlbums";

export default function ArtistPage({ location }) {

    const {user} = useContext(UserContext);

    const [data, setData] = useState(null);
    const [dominantColor, setDominantColor] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [uri, setUri] = useState(null);

    useEffect(() => {
        const getArtistInfo = async (id) => {
            const info = await getArtist(id);
            await setData(info);
            await setIsLoading(false);
        }
        getArtistInfo(location.state)
    }, [location]);

    const style = {
        backgroundColor: `rgba(${dominantColor})`,
        backgroundImage: `linear-gradient(rgba(${dominantColor}), white)`,
        height: "600px",
        position: "absolute",
        width: "100%",
        zIndex: "-10"
    };

    const getUri = (data) => {
        setUri(data);
    };

    return (
        <div style={{position: "relative"}}>
        <Header user={user} />
        <Menu user={user} />
        {
            isLoading ?
            <h2>Loading</h2>
            :
            <div>
                <div style={style}></div>
                <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                    <img style={{margin: "30px"}} src={data.artist.images} alt="album" />
                    <div style={{alignSelf: "flex-end"}}>
                        <h1 style={{fontSize: "85px", marginBottom: "10px", color: "black"}}>{data.artist.artistName}</h1>
                        <div style={{marginBottom: "30px"}}>
                            <h2 style={{color: "black"}}>Followers: {data.artist.followers}</h2>
                        </div>
                    </div>
                </div>
                <TopSong data={data.topTracks} getUri={getUri} />
                <ArtistAlbums data={data.albums} />
                <div style={{position: "fixed", bottom: "0", width: "100%"}}>
                    <SpotifyPlayerComponent uri={uri} />
                </div>
                <Color src={data.artist.images} crossOrigin="anonymous" format="rgbArray">
                    {({ data, loading }) => {if (!loading) setDominantColor(data)}}
                </Color>
            </div>
        }
          
    
    </div>
    )
}