import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import { getSpotifyAccess } from "../components/Functions/GetSpotifyToken";
import Tournament from "../components/Pantheon/Tournament";
import Song from "../components/Music/Song";
import SpotifyPlayerComponent from "../components/Music/SpotifyPlayer";
import Album from "../components/Music/Album";
import Artist from "../components/Music/Artist";
import { getAlbum } from "../components/Functions/GetAlbum";
import { getTrack } from "../components/Functions/GetTrack";
import AlbumSong from "../components/Music/AlbumSong";
import { getArtist } from "../components/Functions/GetArtist";
import TopSong from "../components/Music/TopSong";

export default function MusicPage({ location: { state } }) {

    const {user} = useContext(UserContext);

    const [rerender, setRerender] = useState(0);
    const [value, setValue] = useState("");
    const [tracks, setTracks] = useState(null);    
    const [albums, setAlbums] = useState(null);
    const [artists, setArtists] = useState(null);
    const [selection, setSelection] = useState(null);
    const [uri, setUri] = useState(null);
    const [childData, setChildData] = useState(null);
    const [albumName, setAlbumName] = useState(null);
    const [userSelection, setUserSelection] = useState(null);

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
    };

    const getChildData = async (value) => {
        if (selection === "albums") {
            await setAlbumName(value.name)
            await getAlbumData(value.id)
        } else {
            await getArtistInfo(value.id)
        }
    };

    const getAlbumData = async (id) => {
            const results = await getAlbum(id);
            await setChildData(results);
    };

    const getArtistInfo = async (id) => {
        const results = await getArtist(id);
        await setChildData(results);
    };

    const transferUserSelection = async (data) => {
        const results = await getTrack(data);
        // setUserSelection(results)
        console.log(results)

    };

    return (
        <div>
            <div>
                <div>
                    <Header user={user} pantheon={true} />
                    <Menu user={user} reset={rerender}/>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <div style={{padding: "10px", marginTop: "10px", width: "800px"}}>
                        <Tournament user={user} data={state} userSelection={userSelection} />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: "1000px"}}>
                        <form style={{display: "flex", justifyContent: "center", marginRight: "50px"}}>
                            <input style={{height: "20px", marginTop: "26px"}} onChange={(e) => setValue(e.target.value)} type="text" />
                            {   
                                childData ?
                                <button style={{padding: "10px"}} onClick={async (e) => { await e.preventDefault(); await setSelection(null); await setChildData(null); await setUri(null)}}>Go Back</button>
                                :
                                <button onClick={(e) => getSpotifyData(e)} style={{padding: "10px"}}>Search</button>
                            }
                        </form>  
                        {
                            selection && childData === null ? 
                                <div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                        { selection === "albums" ?  <h2 style={{padding: "20px", fontSize: "35px"}} onClick={() => setSelection("albums")}>Albums</h2> : <h2 style={{padding: "20px"}} onClick={() => setSelection("albums")}>Albums</h2>}
                                        { selection === "songs" ?  <h2 style={{padding: "20px", fontSize: "35px"}} onClick={() => setSelection("songs")}>Songs</h2> : <h2 style={{padding: "20px"}} onClick={() => setSelection("songs")}>Songs</h2>}
                                        { selection === "artists" ?  <h2 style={{padding: "20px", fontSize: "35px"}} onClick={() => setSelection("artists")}>Artists</h2> : <h2 style={{padding: "20px"}} onClick={() => setSelection("artists")}>Artists</h2>}
                                    </div>
                                    {
                                        selection === "songs" ?
                                        <div style={{width: "1000px", display: "flex", justifyContent: "center"}}>
                                            <Song data={tracks} pantheon={true} getUri={getUri} transferUserSelection={transferUserSelection} /> 
                                        </div>
                                        : 
                                        selection === "albums" ?
                                        <div style={{width: "1000px"}}>
                                            <Album data={albums} pantheon={true} getUri={getUri} getChildData={getChildData} /> 
                                        </div>
                                        :    
                                        <div style={{width: "1000px"}}>
                                            <Artist data={artists} pantheon={true} getUri={getUri} getChildData={getChildData} /> 
                                        </div>

                                    }
                                </div>
                            : 
                            selection && childData !== null ?
                            <div>
                                {

                                    selection === "albums" ?
                                    <div style={{width: "1000px"}}>
                                        <AlbumSong data={childData} getUri={getUri} pantheon={true} albumName={albumName} transferUserSelection={transferUserSelection}  />
                                    </div>
                                    :    
                                    <div style={{width: "1000px"}}>
                                        <TopSong data={childData.topTracks} pantheon={true} getUri={getUri} transferUserSelection={transferUserSelection} />
                                    </div>
                                }
                            </div>
                            :
                            null

                        }
                    </div>
                </div>
            </div>
            <div>
                <SpotifyPlayerComponent uri={uri} />
            </div>
        </div>
    )
}