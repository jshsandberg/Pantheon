import React, { useState } from "react";
import FourMan from "../../utils/4-Team-Single-Elimination.jpg";
import Modal from "../Modal/Modal";
import "./style.css"

export default function CreatePantheon() {

    const [pantheonTitleInput, setPantheonTitleInput] = useState("");
    const [show, setShow] = useState(false);
    const [pantheonObj, setPantheonObj] = useState(null);
    const [firstFighter, setFirstFighter] = useState(null);
    const [secondFighter, setSecondFighter] = useState(null);
    const [thirdFighter, setThirdFighter] = useState(null);
    const [fourthFighter, setFourthFighter] = useState(null);

    const submitChallenger = () => {
        
        if (firstFighter === null) {
            setFirstFighter("josh")
        } else if (secondFighter === null) {
            setSecondFighter("josh")
        } else if (thirdFighter === null) {
            setThirdFighter("josh")
        } else if (fourthFighter === null) {
            setFourthFighter("josh")
        }
    };

    const handlePantheonTitleChange = (e) => {
        setPantheonTitleInput(e.target.value);
    };

    const submitPantheon = async () => {
        const pantheon = {
            fighter1: firstFighter,
            fighter2: secondFighter,
            fighter3: thirdFighter,
            fighter4: fourthFighter,
            pantheon: pantheonTitleInput
        };
        await setPantheonObj(pantheon)
        await setShow(true);
    };

    const onClose = () => {
        setFirstFighter(null);
        setSecondFighter(null);
        setThirdFighter(null);
        setFourthFighter(null);
        setPantheonTitleInput("")
        setShow(false)
    };

    const savePantheon = async () => {
        console.log("SAVED PANTHEON")
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
                            <button onClick={() => submitPantheon()}>Submit</button>  
                        </div>
                    </div>
                    <div style={{position: "relative"}}>
                        <img style={{width: "100%", height: "378px"}} src={FourMan} alt="tournament" />
                        <p onClick={() => setFirstFighter(null)} style={{position: "absolute", top: "-2%", left: "7%"}}>{firstFighter}</p>
                        <p onClick={() => setSecondFighter(null)} style={{position: "absolute", top: "25%", left: "7%"}}>{secondFighter}</p>
                        <p onClick={() => setThirdFighter(null)} style={{position: "absolute", top: "52%", left: "7%"}}>{thirdFighter}</p>
                        <p onClick={() => setFourthFighter(null)} style={{position: "absolute", top: "80%", left: "7%"}}>{fourthFighter}</p>
                    </div>
                </div>
                <div style={{width: "45%"}}>
                    <h2 style={{textAlign: "center"}}>Add a Competitor</h2>
                    <div style={{display: "flex", flexDirection: "column", overflow: "auto", height: "378px"}}>
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
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <h2>Josh</h2>
                            <button onClick={() => submitChallenger()}>Add me</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} message={"Are you sure you want to submit this Pantheon?"} package={pantheonObj} hide={onClose} confirmed={savePantheon}/>
        </div>
               
        
    )
}