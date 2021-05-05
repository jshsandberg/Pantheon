import React from "react";
import Sword from "../../utils/sword.png";

export default function ResultsPantheon({ data }) {

    return (
        <div style={{padding: "50px"}}>
            {data && data.map((item, i) => {
               return (
                <div className="battle" key={i} style={{display: "flex", flexDirection: "row", border: "solid 2px #db3d44", marginBottom: "10px"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <img style={{width: "125px", height: "auto"}} src={item.battle.battleOne.fighterOne.music.image} alt="black"/>
                        <img style={{width: "125px", height: "auto"}} src={item.battle.battleOne.fighterTwo.music.image} alt="black"/>
                    </div>
                    <div style={{padding: "20px", marginTop: "40px", width: "200px", position: "relative"}}>
                        <img className="leftSword" src={Sword} alt="sword" />
                        <h2 style={{textAlign: "center", margin: "5px"}}>{item.battle.battleOne.fighterOne.username}</h2>
                        <h2 style={{textAlign: "center", margin: "5px"}}>VS</h2>
                        <h2 style={{textAlign: "center", margin: "5px"}}>{item.battle.battleOne.fighterTwo.username}</h2>
                    </div>
                    <div style={{margin: "0px 20px 10px 20px", padding: "0px", display: "flex", flexDirection: "column"}}>
                        <h2 style={{textAlign: "center", padding: "20px", backgroundColor: "dodgerblue", borderRadius: "30%"}}>{item.category}</h2>
                        <h2 style={{textAlign: "center", margin: "5px"}}>{item.finalBattle.fighterOne.username}</h2>
                        <h2 style={{textAlign: "center", margin: "5px"}}>VS</h2>
                        <h2 style={{textAlign: "center", margin: "5px"}}>{item.finalBattle.fighterTwo.username}</h2>
                    </div>
                    <div style={{padding: "20px", marginTop: "40px", width: "200px", position: "relative"}}>
                        <img className="rightSword" src={Sword} alt="sword" />
                        <h2 style={{textAlign: "center", margin: "5px"}}>{item.battle.battleTwo.fighterOne.username}</h2>
                        <h2 style={{textAlign: "center", margin: "5px"}}>VS</h2>
                        <h2 style={{textAlign: "center", margin: "5px"}}>{item.battle.battleTwo.fighterTwo.username}</h2>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <img style={{width: "125px", height: "auto"}} src={item.battle.battleTwo.fighterOne.music.image} alt="black"/> 
                        <img style={{width: "125px", height: "auto"}} src={item.battle.battleTwo.fighterTwo.music.image} alt="black"/>
                    </div>
                </div>
            )
            })}
        </div>
    )
}