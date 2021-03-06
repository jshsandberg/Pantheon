import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useHistory } from "react-router-dom";
import "./artistStyle.css"

export default function Artist({ data, getUri , pantheon, getChildData }) {

    const history = useHistory();

    const sendUri = (uri) => {
        getUri(uri);
    }

    return (
        <div style={{marginBottom: "70px"}}>
            {
                !pantheon ?
                    <h2 style={{textAlign: "center"}}>Artists</h2>
                :
                null
            }
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap"}}>
                {data.map((data, i) => {
                    if (pantheon) {
                        return (
                            <div onClick={() => sendUri(data.uri)} onDoubleClick={() => getChildData(data)} className="card" key={i} style={{position: "relative", margin: "10px", display: "flex", flexDirection: "column", boxShadow: "10px 10px", padding: "15px 15px 0px 15px", border: "solid 1px", width: "200px", height: "315px"}}>
                                <div className="icon">
                                    <IoIosArrowDroprightCircle />
                                </div>    
                                {data.images.length === 0 ? <h4>No Image</h4> : <img style={{width: "200px", borderRadius: "50%"}} src={data.images[1].url} alt="album" /> }
                                <h1 style={{margin: "5px", overflow: "hidden"}}>{data.name}</h1>
                                <h2 style={{margin: "0px 0px 30px 5px"}}>Artist</h2>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div onClick={() => sendUri(data.uri)} onDoubleClick={() => history.push({pathname: "/artist", state: data.id})} className="card" key={i} style={{position: "relative", margin: "10px", display: "flex", flexDirection: "column", boxShadow: "10px 10px", padding: "15px 15px 0px 15px", border: "solid 1px", width: "200px", height: "315px"}}>
                                <div className="icon">
                                    <IoIosArrowDroprightCircle />
                                </div>    
                                {data.images.length === 0 ? <h4>No Image</h4> : <img style={{width: "200px", borderRadius: "50%"}} src={data.images[1].url} alt="album" /> }
                                <h1 style={{margin: "5px", overflow: "hidden"}}>{data.name}</h1>
                                <h2 style={{margin: "0px 0px 30px 5px"}}>Artist</h2>
                            </div>
                        )
                    }
                })}       
            </div>
        </div>
    )
}