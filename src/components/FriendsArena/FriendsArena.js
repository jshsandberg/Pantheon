import React, { useEffect, useState } from "react";
import { GetFriendsPantheon } from "../Functions/GetFriendsPantheon";
import { CheckUserVotePantheon } from "../Functions/CheckUserVotePantheon";
import { CheckUserVoteFinalPantheon } from "../Functions/CheckUserVoteFinalPantheon";
import { GetWinner } from "../Functions/GetWinner";
import VotingModal from "../Modal/VotingModal";
import FinalVotingModal from "../Modal/FinalVotingModal";
import "./friendsArenaStyle.css"

export default function FriendsArena({ user }) {

    const [pantheon, setPantheon] = useState(null);
    const [show, setShow] = useState(false);
    const [battle, setBattle] = useState(null);
    const [item, setItem] = useState(null);
    const [number, setNumber] = useState(null);
    const [rerender, setRerender] = useState(0);
    const [finalPantheon, setFinalPantheon] = useState(null);
    const [finalShow, setFinalShow] = useState(false);
    const [winner, setWinner] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const gettingFriendsPantheon = async () => {
            const gotFriendsPantheon = await GetFriendsPantheon(user);
            const checkIfUserVotedForPantheon = await CheckUserVotePantheon(gotFriendsPantheon.pantheonList, user.username);
            const checkIfUserVotedInFinalPantheon = await CheckUserVoteFinalPantheon(gotFriendsPantheon.finalPantheonList, user.username);
            const showOffWinner = await GetWinner(user.username);
            await setWinner(showOffWinner);
            await setFinalPantheon(checkIfUserVotedInFinalPantheon);
            await setPantheon(checkIfUserVotedForPantheon);
            await setLoading(false);
        };
        
        gettingFriendsPantheon();
    }, [user, rerender]);

    const onClose = () => {
        setShow(false);
        setFinalShow(false);
    };

    const rerenderPage = () => {
        setRerender(rerender =>  rerender + 1)
    }


    return (
        <div style={{float: "left", width: "40%", boxSizing: "border-box", display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "10px"}}>
            <div style={{backgroundColor: "dodgerblue", margin: "auto", padding: "5px", width: "30%", borderRadius: "10px"}}>
                <h2 style={{textAlign: "center", color: "white"}}>Active Pantheons</h2>
            </div>
            <div className="parentDiv">
                {winner && winner.map((item, i) => {
                    return (
                        <div key={i} style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                            {item.finalBattle.winner === item.finalBattle.fighterOne.username ? <img style={{width: "20%", height: "20%"}} src={item.finalBattle.fighterOne.music.image} alt="album" /> : <img style={{width: "20%", height: "20%"}} src={item.finalBattle.fighterTwo.music.image} alt="album" />}
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                <h1>Winner</h1>
                            </div>
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                <h2 style={{textAlign: "center", margin: "0px", padding: "0px"}}>{item.category}:</h2>
                            </div>
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                            {item.finalBattle.winner === item.finalBattle.fighterOne.username ?  <h1>{item.finalBattle.fighterOne.username}</h1> : <h1>{item.finalBattle.fighterTwo.username}</h1>}
                            </div>                   
                        </div>
                    )
                })}
                {finalPantheon && finalPantheon.map((item, i) => {
                    return (
                        <div key={i}>
                            {item.voted === false ?
                            <div onClick={async () => {await setBattle(item.finalPantheon.finalBattle); await setItem(item.finalPantheon); await setFinalShow(true)}} className="highlight" style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                                <img style={{width: "20%", height: "20%"}} src={item.finalPantheon.finalBattle.fighterOne.music.image} alt="album" />
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2>{item.finalPantheon.finalBattle.fighterOne.username}</h2>
                                </div>
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2 style={{textAlign: "center", margin: "0px", padding: "0px"}}>FINAL</h2>
                                    <h2 style={{textAlign: "center", margin: "0px", padding: "0px"}}>VS</h2>
                                </div>
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2>{item.finalPantheon.finalBattle.fighterTwo.username}</h2>
                                </div>                   
                                <img style={{width: "20%", height: "20%"}} src={item.finalPantheon.finalBattle.fighterTwo.music.image} alt="album" />
                            </div>
                            :
                            <div style={{position: "relative"}}>
                                <h2 className="voted">Already Voted</h2>
                                <div style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                                    <img style={{width: "20%", height: "20%"}} src={item.finalPantheon.finalBattle.fighterOne.music.image} alt="album" />
                                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                        <h2>{item.finalPantheon.finalBattle.fighterOne.username}</h2>
                                    </div>
                                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                        <h2 style={{textAlign: "center", margin: "0px", padding: "0px"}}>FINAL</h2>
                                        <h2 style={{textAlign: "center", margin: "0px", padding: "0px"}}>VS</h2>
                                    </div>
                                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                        <h2>{item.finalPantheon.finalBattle.fighterTwo.username}</h2>
                                    </div>                   
                                    <img style={{width: "20%", height: "20%"}} src={item.finalPantheon.finalBattle.fighterTwo.music.image} alt="album" />
                                </div>
                           </div>
                            }
                        </div>
                    )
                })}
            {pantheon && pantheon.map((item, i) => {
                return (
                    <div key={i} >
                        {item.battleOne === false ?
                            <div onClick={async () => {await setBattle(item.pantheon.battle.battleOne); await setItem(item.pantheon); await setNumber(1); await setShow(true)}} className="highlight" style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                                <img style={{width: "20%", height: "20%"}} src={item.pantheon.battle.battleOne.fighterOne.music.image} alt="album" />
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2>{item.pantheon.battle.battleOne.fighterOne.username}</h2>
                                </div>
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2 style={{textAlign: "center"}}>VS</h2>
                                </div>
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2>{item.pantheon.battle.battleOne.fighterTwo.username}</h2>
                                </div>                   
                                <img style={{width: "20%", height: "20%"}} src={item.pantheon.battle.battleOne.fighterTwo.music.image} alt="album" />
                            </div>
                        :
                        <div style={{position: "relative"}}>
                            <h2 className="voted">Already Voted</h2>
                            <div style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                                <img style={{width: "20%", height: "20%"}} src={item.pantheon.battle.battleOne.fighterOne.music.image} alt="album" />
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2>{item.pantheon.battle.battleOne.fighterOne.username}</h2>
                                </div>
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2 style={{textAlign: "center"}}>VS</h2>
                                </div>
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2>{item.pantheon.battle.battleOne.fighterTwo.username}</h2>
                                </div>                   
                                <img style={{width: "20%", height: "20%"}} src={item.pantheon.battle.battleOne.fighterTwo.music.image} alt="album" />
                            </div>
                        </div>
                        }
                        {item.battleTwo === false ?
                            <div onClick={async () => {await setBattle(item.pantheon.battle.battleTwo); await setItem(item.pantheon); await setNumber(2); await setShow(true)}} className="highlight" style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                                <img style={{width: "20%", height: "20%"}} src={item.pantheon.battle.battleTwo.fighterOne.music.image} alt="album" />
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2>{item.pantheon.battle.battleTwo.fighterOne.username}</h2>
                                </div>
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2 style={{textAlign: "center"}}>VS</h2>
                                </div>
                                <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                    <h2>{item.pantheon.battle.battleTwo.fighterTwo.username}</h2>
                                </div>                   
                                <img style={{width: "20%", height: "20%"}} src={item.pantheon.battle.battleTwo.fighterTwo.music.image} alt="album" />
                            </div>
                        :
                        <div style={{position: "relative"}}>
                        <h2 className="voted">Already Voted</h2>
                        <div style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                            <img style={{width: "20%", height: "20%"}} src={item.pantheon.battle.battleTwo.fighterOne.music.image} alt="album" />
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                <h2>{item.pantheon.battle.battleTwo.fighterOne.username}</h2>
                            </div>
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                <h2 style={{textAlign: "center"}}>VS</h2>
                            </div>
                            <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                                <h2>{item.pantheon.battle.battleTwo.fighterTwo.username}</h2>
                            </div>                   
                            <img style={{width: "20%", height: "20%"}} src={item.pantheon.battle.battleTwo.fighterTwo.music.image} alt="album" />
                        </div>
                    </div>
                        }
                    </div>
                )
            })}
            {!loading && pantheon.length === 0 && finalPantheon.length === 0 && winner.length === 0 ?
                <div>
                    <h2 style={{textAlign: "center"}}>There are no active Pantheons</h2>
                </div>
                :
                null
            }
            </div>
            <div>
                <VotingModal show={show} hide={onClose} item={battle} pantheon={item} user={user} number={number} rerenderPage={rerenderPage} />
                <FinalVotingModal show={finalShow} hide={onClose} item={battle} pantheon={item} user={user} number={number} rerenderPage={rerenderPage} />
            </div>
        </div>
   
    )
};