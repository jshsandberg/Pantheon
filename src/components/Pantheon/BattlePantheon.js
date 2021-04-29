import React from "react";
import { useHistory } from "react-router-dom";
import Sword from "../../utils/sword.png";
import Black from "../../utils/testBlack.jpg";
import RedQuestions from "../../utils/redQuestion.jpg";
import "./style.css"

export default function BattlePantheon({user, data, rerenderPage}) {

    const history = useHistory();

    const checkIfUserAlreadySubmitted = async (item) => {
        if (item.battle.battleOne.fighterOne.username === user.username && item.battle.battleOne.fighterOne.music !== null) {
            console.log("Looks like fighter one has already submitted a song")
        } else if (item.battle.battleOne.fighterTwo.username === user.username && item.battle.battleOne.fighterTwo.music !== null) {
            console.log("Looks like fighter two has already submitted a song")
        } else if (item.battle.battleTwo.fighterOne.username === user.username && item.battle.battleTwo.fighterOne.music !== null) {
            console.log("Looks like fighter one has already submitted a song")
        } else if (item.battle.battleTwo.fighterTwo.username === user.username && item.battle.battleTwo.fighterTwo.music !== null) {
            console.log("Looks like fighter two has already submitted a song")
        } else { history.push({pathname: "/music", state: item}) }
    }
    
    return (
        <div>
            <div>
                <div>
                    <h2 style={{textAlign: "center"}}>Choose your song!</h2>
                </div>
                {
                    data.length > 0 ?
                    data.map((item, i) => {
                        return (
                            <div onClick={() => checkIfUserAlreadySubmitted(item)} className="battle" key={i} style={{display: "flex", flexDirection: "row", border: "solid 2px #db3d44", marginBottom: "10px"}}>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    {item.battle.battleOne.fighterOne.music === null ? <img style={{width: "100px", height: "auto", marginTop: "10px"}} src={RedQuestions} alt="black"/> : <img style={{width: "100px", height: "auto"}} src={item.battle.battleOne.fighterOne.music.image} alt="black"/>}
                                    {item.battle.battleOne.fighterTwo.music === null ? <img style={{width: "100px", height: "auto", marginTop: "20px"}} src={RedQuestions} alt="black"/> : <img style={{width: "100px", height: "auto"}} src={item.battle.battleOne.fighterTwo.music.image} alt="black"/>}
                                </div>
                                <div style={{padding: "20px", marginTop: "20px", width: "200px", position: "relative"}}>
                                    <img className="leftSword" src={Sword} alt="sword" />
                                    <h2 style={{textAlign: "center", margin: "5px"}}>{item.battle.battleOne.fighterOne.username}</h2>
                                    <h2 style={{textAlign: "center", margin: "5px"}}>VS</h2>
                                    <h2 style={{textAlign: "center", margin: "5px"}}>{item.battle.battleOne.fighterTwo.username}</h2>
                                </div>
                                <div style={{margin: "40px 20px 10px 20px", padding: "0px"}}>
                                    <h2 style={{textAlign: "center", padding: "20px", backgroundColor: "dodgerblue", borderRadius: "30%"}}>{item.category}</h2>
                                </div>
                                <div style={{padding: "20px", marginTop: "20px", width: "200px", position: "relative"}}>
                                    <img className="rightSword" src={Sword} alt="sword" />
                                    <h2 style={{textAlign: "center", margin: "5px"}}>{item.battle.battleTwo.fighterOne.username}</h2>
                                    <h2 style={{textAlign: "center", margin: "5px"}}>VS</h2>
                                    <h2 style={{textAlign: "center", margin: "5px"}}>{item.battle.battleTwo.fighterTwo.username}</h2>
                                </div>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    {item.battle.battleTwo.fighterOne.music === null ? <img style={{width: "100px", height: "auto", marginTop: "10px"}} src={RedQuestions} alt="black"/> : <img style={{width: "100px", height: "auto"}} src={item.battle.battleTwo.fighterOne.music.image} alt="black"/> }
                                    {item.battle.battleTwo.fighterTwo.music === null ? <img style={{width: "100px", height: "auto", marginTop: "20px"}} src={RedQuestions} alt="black"/> : <img style={{width: "100px", height: "auto"}} src={item.battle.battleTwo.fighterTwo.music.image} alt="black"/>}
                                </div>
                            </div>
                        )
                    })
                    :
                    <div>
                        <h2>There are no Pantheons ready for this step</h2>
                    </div>
                }
            </div>
        
        </div>
    )
}