import React from "react";
import { AcceptPantheonInvite } from "../Functions/AcceptPantheonInvite";
import { DeclinePantheonInvite } from "../Functions/DeclinePantheonInvite";
import Card from "./Card";


export default function AcceptPantheon({ data, user, rerenderPage }) {

    return (
         <div>
             <div>
                 <h2>Pantheon Invites</h2>
             </div>
             {/* <div>
                 <Card />
             </div> */}
             {
                 data.length > 0 ? 
                    data.map((item, i) => {
                        return (
                            <div key={i} style={{border: "solid 1px", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                <h2>{item.category}</h2>
                                <div>
                                    <h2>Num of Players who Accepted {item.acceptedPlayers.length} / 4</h2>
                                </div>
                                <div>
                                    <h2>Creator: {item.creator}</h2>
                                </div>
                                <div>
                                    <button onClick={async () => {await AcceptPantheonInvite(item._id, user.username); await rerenderPage()}}>Accept Pantheon</button>
                                    <button onClick={async () => {await DeclinePantheonInvite(item._id, user.username); await rerenderPage()}}>Decline Pantheon</button>
                                </div>
                            </div>
                        )
                    })
                :
                <div>
                    <h2>There are no Pantheon Invites</h2>
                </div>
             }
        </div>
    )
}