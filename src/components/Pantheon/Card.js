import React from "react";
import { AcceptPantheonInvite } from "../Functions/AcceptPantheonInvite";
import { DeclinePantheonInvite } from "../Functions/DeclinePantheonInvite";
import Statue from "../../utils/UserPics/statue.jpg"
import Sticker from "../../utils/UserPics/stickerbrush.jpg"
import "./cardStyle.css"

export default function Card({ data, rerenderPage, user }) {

    const style = {
        backgroundImage: `url(${Sticker})`
    }

    return (
        <div className="body"> 
            <div style={style} className="cardOne">
                <div className="card-content">
                    <h2 style={{marginBottom: "10px"}} className="card-title">{data.creator}</h2>
                    <div className="card-body" style={{display: "flex", flexDirection: "column"}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "0px 0px 0px 0px"}}>
                            <h2>Test</h2>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <p style={{fontSize: "1.2rem", marginTop: "0px"}}>{data.players[1]}</p>
                            <p style={{fontSize: "1.2rem", marginTop: "0px"}}>{data.players[2]}</p>
                            <p style={{fontSize: "1.2rem", marginTop: "0px"}}>{data.players[3]}</p>
                        </div>
                    </div>
                    <button onClick={async () => {await AcceptPantheonInvite(data._id, user.username); await rerenderPage()}} style={{marginRight: "10px"}} className="buttonOne">Accept</button>
                    <button onClick={async () => {await DeclinePantheonInvite(data._id, user.username); await rerenderPage()}} className="buttonOne">Decline</button>
                </div>
            </div>
        </div>

    )
}