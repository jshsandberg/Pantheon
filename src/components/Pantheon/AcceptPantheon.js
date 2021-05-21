import React from "react";
import Card from "./Card";


export default function AcceptPantheon({ data, user, rerenderPage }) {

    return (
         <div>
             <div>
                 <h2>Pantheon Invites</h2>
             </div>
             <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
             {
                 data.length > 0 ? 
                    data.map((item, i) => {
                        return (
                            <div key={i}>
                                <Card data={item} rerenderPage={rerenderPage} user={user} />
                            </div> 
                        )
                    })
                :
                <div>
                    <h2>There are no Pantheon Invites</h2>
                </div>
             }
             </div>
            
        </div>
    )
}