import React from "react";
import StatusBar from "./StatusBar";
import { useHistory } from "react-router-dom";



export default function CreatedPantheons({ data }) {

    const history = useHistory();


    return (
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h2>User's Created Pantheons</h2>
            </div>
            <div>
                {data && data.map((item, i) => {
                    return (
                        <div key={i} onClick={() => history.push({pathname: "/pantheonInfo", state: item})} style={{display: "flex", flexDirection: "column",}}>
                            <div key={i} style={{display: "flex", flexDirection: "row", justifyContent: "center",}}>
                                <div style={{paddingRight: "10px"}}>
                                    <h2>{item.data.category}</h2>
                                </div>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    {item.data.players.map((item, i) => {
                                        return (
                                            <h4 key={i} style={{padding: "5px 10px 5px 10px"}}>{item}</h4>
                                        )
                                    })

                                    }
                                </div>
                            </div>
                            <div style={{display: "flex", justifyContent: "center"}}>
                               <StatusBar num={item.num} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
   
            </div>
        </div>
    )
}