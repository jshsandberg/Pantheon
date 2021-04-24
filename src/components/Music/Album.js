import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useHistory } from "react-router-dom";
import "./albumStyle.css";

export default function Album({ data, getUri, pantheon }) {

    const history = useHistory();

    const sendUri = (uri) => {
        getUri(uri);
    }

    return (
        <div>
            {
                !pantheon ?
                    <h2 style={{textAlign: "center"}}>Albums</h2>
                :
                null
            }
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap"}}>
                {data.map((data, i) => {
                    const obj = {
                        albumId: data.id,
                        image: data.images[1].url,
                        albumName: data.name,
                        artist: data.artists[0].name,
                        artistId: data.artists[0].id,
                        uri: data.uri
                    }; 
                    return (
                            <div onClick={() => sendUri(data.uri)} onDoubleClick={() => history.push({pathname: "/album", state: obj})} className="card" key={i} style={{position: "relative", margin: "10px", display: "flex", flexDirection: "column", boxShadow: "10px 10px", padding: "15px 15px 0px 15px", border: "solid 1px", width: "200px", height: "315px"}}>
                                <div className="icon">
                                    <IoIosArrowDroprightCircle />
                                </div>    
                                <img style={{width: "200px"}} src={data.images[1].url} alt="album" />
                                <h1 className="albumName" style={{margin: "5px", overflow: "hidden"}}>{data.name}</h1>
                                <h2 style={{margin: "0px 0px 30px 5px"}}>{data.artists[0].name}</h2>
                            </div>
                    )
                })}
            </div>
        </div>
    )
};