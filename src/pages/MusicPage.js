import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import { getSpotifyAccess } from "../components/Functions/GetSpotifyToken";
import Tournament from "../components/Pantheon/Tournament";
import Song from "../components/Music/Song";
import SpotifyPlayerComponent from "../components/Music/SpotifyPlayer";
import Album from "../components/Music/Album";
import Artist from "../components/Music/Artist";

export default function MusicPage({ location: { state } }) {

    const {user} = useContext(UserContext);

    const [rerender, setRerender] = useState(0);
    const [value, setValue] = useState("");
    const [tracks, setTracks] = useState(null);    
    const [albums, setAlbums] = useState(null);
    const [artists, setArtists] = useState(null);
    const [selection, setSelection] = useState(null);
    const [uri, setUri] = useState(null);




    // const rerenderPage = () => {
    //     setRerender(rerender => rerender + 1);
    // };


    // const getMusicForPantheon = async (e, value) => {
    //     e.preventDefault()
    //     const data = await getSpotifyAccess(value);
    //     setTracks(data.track);
    //     setAlbums(data.albums);
    //     setArtists(data.artist);
    //     setSelection("songs");
    // };

    const getUri = (data) => {
        setUri(data);
    };

    
    const getSpotifyData = async (e) => {
        e.preventDefault();
        const data = await getSpotifyAccess(value);
        setTracks(data.track);
        setAlbums(data.albums);
        setArtists(data.artist);
        setSelection("songs");

        // history.push({pathname: "/media", state: data})   
    };




    return (
        <div>
        {/* {
            !loading ? */}
            <div>
                <div>
                    <Header user={user} pantheon={true} />
                    <Menu user={user} reset={rerender}/>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <Tournament user={user} data={state} />
                    <div style={{display: "flex", flexDirection: "column"}}>
                        {
                            selection ? 
                                <div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                        { selection === "albums" ?  <h2 style={{padding: "20px", fontSize: "35px"}} onClick={() => setSelection("albums")}>Albums</h2> : <h2 style={{padding: "20px"}} onClick={() => setSelection("albums")}>Albums</h2>}
                                        { selection === "songs" ?  <h2 style={{padding: "20px", fontSize: "35px"}} onClick={() => setSelection("songs")}>Songs</h2> : <h2 style={{padding: "20px"}} onClick={() => setSelection("songs")}>Songs</h2>}
                                        { selection === "artists" ?  <h2 style={{padding: "20px", fontSize: "35px"}} onClick={() => setSelection("artists")}>Artists</h2> : <h2 style={{padding: "20px"}} onClick={() => setSelection("artists")}>Artists</h2>}
                                    </div>
                                    {
                                        selection === "songs" ?
                                        <div style={{width: "1000px", display: "flex", justifyContent: "center"}}>
                                            <Song data={tracks} pantheon={true} getUri={getUri} /> 
                                        </div>
                                        : 
                                        selection === "albums" ?
                                        <div style={{width: "1000px"}}>
                                            <Album data={albums} pantheon={true} getUri={getUri} /> 
                                        </div>
                                        :    
                                        <div style={{width: "1000px"}}>
                                            <Artist data={artists} pantheon={true} getUri={getUri} /> 
                                        </div>

                                    }
                                </div>
                        : 
                        <form>
                            <input onChange={(e) => setValue(e.target.value)} type="text" />
                            <button onClick={(e) => getSpotifyData(e)} style={{padding: "10px"}}>Search</button>
                        </form>  
                        }
                    </div>
                </div>
            </div>
            <div>
                <SpotifyPlayerComponent uri={uri} />
            </div>
            {/* :
            null
        }          */}
    </div>
    )
}