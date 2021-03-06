import React from "react";
import { AcceptPantheonInvite } from "../Functions/AcceptPantheonInvite";
import { DeclinePantheonInvite } from "../Functions/DeclinePantheonInvite";
import "./cardStyle.css"

export default function Card({ data, rerenderPage, user }) {

    const style = {
        backgroundImage: `url("${data.creator.imageUrl}")`
    }


    return (
        <div className="body"> 
            <div style={style} className="cardOne">
                <div className="card-content">
                    <h2 style={{marginBottom: "10px"}} className="card-title">
                        {data.pantheon.creator}
                        </h2>
                    <div className="card-body" style={{display: "flex", flexDirection: "column"}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "0px 0px 0px 0px"}}>
                            <h2>{data.pantheon.category}</h2>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <p style={{fontSize: "1.2rem", marginTop: "0px"}}>
                                {data.pantheon.players[1]}
                          
                                </p>
                            <p style={{fontSize: "1.2rem", marginTop: "0px"}}>
                                {data.pantheon.players[2]}
                           
                            </p>
                            <p style={{fontSize: "1.2rem", marginTop: "0px"}}>
                                {data.pantheon.players[3]}
                            </p>
                        </div>
                    </div>
                    <button 
                    onClick={async () => {await AcceptPantheonInvite(data.pantheon._id, user.username); await rerenderPage()}} 
                    style={{marginRight: "10px"}} className="buttonOne">Accept</button>
                    <button 
                    onClick={async () => {await DeclinePantheonInvite(data.pantheon._id, user.username); await rerenderPage()}} 
                    className="buttonOne">Decline</button>
                </div>
            </div>
        </div>

    )
}