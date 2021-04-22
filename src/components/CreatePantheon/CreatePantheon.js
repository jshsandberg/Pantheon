import React, { useEffect, useState } from "react";
import { GetFriends } from "../Functions/GetFriends.js";
import { SavePantheon } from "../Functions/SavePantheon";
import FourMan from "../../utils/4-Team-Single-Elimination.jpg";
import PantheonModal from "../Modal/PantheonModal";
import "./style.css"

export default function CreatePantheon({ user }) {

    const [pantheonTitleInput, setPantheonTitleInput] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [friends, setFriends] = useState(null);
    const [pantheonObj, setPantheonObj] = useState(null);
    const [secondFighter, setSecondFighter] = useState(null);
    const [thirdFighter, setThirdFighter] = useState(null);
    const [fourthFighter, setFourthFighter] = useState(null);

    useEffect(() => {
        const gettingFriends = async () => {
            const gotFriends = await GetFriends(user.username);
            await setFriends(gotFriends)
        };
        gettingFriends();
    }, [user])

    const submitChallenger = (username) => {
         if (secondFighter === null) {
            setSecondFighter(username)
        } else if (thirdFighter === null && username !== secondFighter) {
            setThirdFighter(username)
        } else if (fourthFighter === null && username !== secondFighter && username !==thirdFighter) {
            setFourthFighter(username)
        }
    };

    const handlePantheonTitleChange = (e) => {
        setPantheonTitleInput(e.target.value);
    };

    const submitPantheon = async () => {
        const pantheon = {
            fighter1: user.username,
            fighter2: secondFighter,
            fighter3: thirdFighter,
            fighter4: fourthFighter,
            pantheon: pantheonTitleInput
        };
        await setPantheonObj(pantheon)
        await setShow(true);
    };

    const onClose = () => {
        setSecondFighter(null);
        setThirdFighter(null);
        setFourthFighter(null);
        setPantheonTitleInput("")
        setShow(false)
    };

    const savePantheon = async () => {
        // MAKE THIS ASYNC
        const pantheon = await SavePantheon(pantheonObj);
        console.log(pantheon)
        await onClose()
    }

    return (
        <div style={{float: "left", width: "60%", boxSizing: "border-box", display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "10px"}}>
            <div style={{backgroundColor: "dodgerblue", margin: "auto", padding: "5px", width: "30%", borderRadius: "10px"}}>
                <h2 style={{textAlign: "center", color: "white"}}>Create a Pantheon</h2>
            </div>
            <div style={{borderStyle: "solid", margin: "10px 30px", display: "flex", flexDirection: "row"}}>
                <div style={{flexDirection: "column", width: "55%"}}>
                    <div style={{flexWrap: "wrap", display: "flex", justifyContent: "space-around"}}>
                        <h2 style={{marginTop: "20px", textAlign: "center", flex: "33%"}}>Tournament</h2>
                        <div style={{flex: "33%", justifyContent: "center", display: "flex"}}>
                            <form style={{marginTop: "10px"}}>
                                <label htmlFor="pantheonTitle">Pantheon Title:</label>
                                <br />
                                <input onChange={(e) => handlePantheonTitleChange(e)} type="text" id="fname" name="fname" value={pantheonTitleInput} />
                            </form>
                        </div>
                        <div style={{flex: "30%", justifyContent: "center", display: "flex"}}>
                            <button onClick={() => {secondFighter && thirdFighter && fourthFighter && pantheonTitleInput ? submitPantheon() : setError("Need to fill out all inputs")}}>Submit</button>  
                        </div>
                    </div>
                    <div style={{position: "relative"}}>
                        {
                            error ? 
                            <div>
                                <div style={{position: "absolute", top: "100px", left: "100px", border: "solid 1px", backgroundColor: "red", boxShadow: "5px 5px 0px 0px"}}>
                                    <h2>{error}</h2>
                                </div>
                                <div style={{position: "absolute", top: "80px", left: "380px"}}>
                                    <button onClick={() => setError(null)}>Close</button>
                                </div>
                            </div>
                            :
                            null
                        }
                        <img style={{width: "100%", height: "378px"}} src={FourMan} alt="tournament" />
                        <p style={{position: "absolute", top: "-2%", left: "7%"}}>{user.username}</p>
                        <p onClick={() => setSecondFighter(null)} style={{position: "absolute", top: "25%", left: "7%"}}>{secondFighter}</p>
                        <p onClick={() => setThirdFighter(null)} style={{position: "absolute", top: "52%", left: "7%"}}>{thirdFighter}</p>
                        <p onClick={() => setFourthFighter(null)} style={{position: "absolute", top: "80%", left: "7%"}}>{fourthFighter}</p>
                    </div>
                </div>
                <div style={{width: "45%"}}>
                    <h2 style={{textAlign: "center"}}>Add a Competitor</h2>
                    <div style={{display: "flex", flexDirection: "column", overflow: "auto", height: "378px"}}>
                        {
                            friends && friends.map((item, i) => {
                                return (
                                    <div key={i} style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                        <h2>{item.username}</h2>
                                        <button onClick={() => submitChallenger(item.username)}>Add me</button>
                                    </div> 
                                )
                            })
                        }
                        {/* <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <h2>Josh</h2>
                            <button onClick={() => submitChallenger()}>Add me</button>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <h2>Josh</h2>
                            <button onClick={() => submitChallenger()}>Add me</button>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <h2>Josh</h2>
                            <button onClick={() => submitChallenger()}>Add me</button>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <h2>Josh</h2>
                            <button onClick={() => submitChallenger()}>Add me</button>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <h2>Josh</h2>
                            <button onClick={() => submitChallenger()}>Add me</button>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <h2>Josh</h2>
                            <button onClick={() => submitChallenger()}>Add me</button>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <h2>Josh</h2>
                            <button onClick={() => submitChallenger()}>Add me</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <PantheonModal show={show} message={"Are you sure you want to submit this Pantheon?"} package={pantheonObj} hide={onClose} confirmed={savePantheon} />
        </div>
               
        
    )
}