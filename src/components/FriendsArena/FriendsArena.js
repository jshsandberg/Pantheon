import React from "react";
import "./friendsArenaStyle.css"

const testObj = {
    "_id" : "604028f8db9096309093a0e4",
    "players" : [ 
        "Jake", 
        "David", 
        "Robby", 
        "Josh"
    ],
    "acceptedPlayers" : [ 
        "Josh", 
        "David", 
        "Robby", 
        "Jake"
    ],
    "category" : "Full Test",
    "creator" : "Josh",
    "numOfPlayers" : 4,
    "battle" : {
        "battleOne" : {
            "fighterOne" : {
                "username" : "Jake",
                "music" : {
                    "uri" : "spotify:track:0PvFJmanyNQMseIFrU708S",
                    "name" : "For The Night (feat. Lil Baby & DaBaby)",
                    "album" : "Shoot For The Stars Aim For The Moon",
                    "artist" : "Pop Smoke",
                    "id" : "0PvFJmanyNQMseIFrU708S",
                    "image" : "https://i.scdn.co/image/ab67616d00001e0277ada0863603903f57b34369"
                }
            },
            "fighterTwo" : {
                "username" : "Josh",
                "music" : {
                    "uri" : "spotify:track:0PvFJmanyNQMseIFrU708S",
                    "name" : "For The Night (feat. Lil Baby & DaBaby)",
                    "album" : "Shoot For The Stars Aim For The Moon",
                    "artist" : "Pop Smoke",
                    "id" : "0PvFJmanyNQMseIFrU708S",
                    "image" : "https://i.scdn.co/image/ab67616d00001e0277ada0863603903f57b34369"
                }
            },
            "votesForFighterOne" : [ 
                "David", 
                "Robby"
            ],
            "votesForFighterTwo" : [],
            "playersWhoVoted" : [ 
                "David", 
                "Robby"
            ],
            "winner" : "Jake"
        },
        "battleTwo" : {
            "fighterOne" : {
                "username" : "Robby",
                "music" : {
                    "uri" : "spotify:track:7lPN2DXiMsVn7XUKtOW1CS",
                    "name" : "drivers license",
                    "album" : "drivers license",
                    "artist" : "Olivia Rodrigo",
                    "id" : "7lPN2DXiMsVn7XUKtOW1CS",
                    "image" : "https://i.scdn.co/image/ab67616d00001e0259779689e1d9c15ca2f76b84"
                }
            },
            "fighterTwo" : {
                "username" : "David",
                "music" : {
                    "uri" : "spotify:track:31qCy5ZaophVA81wtlwLc4",
                    "name" : "Anyone",
                    "album" : "Anyone",
                    "artist" : "Justin Bieber",
                    "id" : "31qCy5ZaophVA81wtlwLc4",
                    "image" : "https://i.scdn.co/image/ab67616d00001e024b02db5cefb177ff97346cf2"
                }
            },
            "votesForFighterOne" : [ 
                "Josh"
            ],
            "votesForFighterTwo" : [ 
                "Jake"
            ],
            "playersWhoVoted" : [ 
                "Jake", 
                "Josh"
            ],
            "winner" : "Robby"
        }
    },
    "finalBattle" : {
        "fighterOne" : {
            "username" : "Jake",
            "music" : {
                "uri" : "spotify:track:31qCy5ZaophVA81wtlwLc4",
                "name" : "Anyone",
                "album" : "Anyone",
                "artist" : "Justin Bieber",
                "id" : "31qCy5ZaophVA81wtlwLc4",
                "image" : "https://i.scdn.co/image/ab67616d00001e024b02db5cefb177ff97346cf2"
            }
        },
        "fighterTwo" : {
            "username" : "Robby",
            "music" : {
                "uri" : "spotify:track:5QO79kh1waicV47BqGRL3g",
                "name" : "Save Your Tears",
                "album" : "After Hours",
                "artist" : "The Weeknd",
                "id" : "5QO79kh1waicV47BqGRL3g",
                "image" : "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
            }
        },
        "votesForFighterOne" : [ 
            "Josh", 
            "David"
        ],
        "votesForFighterTwo" : [],
        "playersWhoVoted" : [ 
            "Josh", 
            "David"
        ],
        "winner" : "Jake"
    },
    "accepted" : true,
    "music" : true,
    "vote" : true,
    "final" : true,
    "finalMusic" : true,
    "finalVote" : true,
    "completed" : true,
    "__v" : 0
}

export default function FriendsArena() {


    return (
        <div style={{float: "left", width: "40%", boxSizing: "border-box", display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "10px"}}>
            <div style={{backgroundColor: "dodgerblue", margin: "auto", padding: "5px", width: "30%", borderRadius: "10px"}}>
                <h2 style={{textAlign: "center", color: "white"}}>Active Pantheons</h2>
            </div>
            <div className="parentDiv">
            {/* ADD MAP FUNCTION TO THIS PART */}
                <div className="highlight" style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                    <img style={{width: "20%", height: "20%"}} src={testObj.battle.battleOne.fighterOne.music.image} alt="album" />
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2>{testObj.battle.battleOne.fighterOne.username}</h2>
                    </div>
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2 style={{textAlign: "center"}}>VS</h2>
                    </div>
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2>{testObj.battle.battleOne.fighterTwo.username}</h2>
                    </div>                   
                    <img style={{width: "20%", height: "20%"}} src={testObj.battle.battleOne.fighterTwo.music.image} alt="album" />
                </div>   
            {/* END MAP FUNCTION HERE */}
            <div className="highlight" style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                    <img style={{width: "20%", height: "20%"}} src={testObj.battle.battleOne.fighterOne.music.image} alt="album" />
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2>{testObj.battle.battleTwo.fighterOne.username}</h2>
                    </div>
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2 style={{textAlign: "center"}}>VS</h2>
                    </div>
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2>{testObj.battle.battleOne.fighterTwo.username}</h2>
                    </div>                   
                    <img style={{width: "20%", height: "20%"}} src={testObj.battle.battleOne.fighterTwo.music.image} alt="album" />
                </div>   
                <div className="highlight" style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                    <img style={{width: "20%", height: "20%"}} src={testObj.battle.battleTwo.fighterOne.music.image} alt="album" />
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2>{testObj.battle.battleTwo.fighterOne.username}</h2>
                    </div>
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2 style={{textAlign: "center"}}>VS</h2>
                    </div>
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2>{testObj.battle.battleOne.fighterTwo.username}</h2>
                    </div>                   
                    <img style={{width: "20%", height: "20%"}} src={testObj.battle.battleTwo.fighterTwo.music.image} alt="album" />
                </div>   
                <div className="highlight" style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                    <img style={{width: "20%", height: "20%"}} src={testObj.battle.battleOne.fighterOne.music.image} alt="album" />
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2>{testObj.battle.battleOne.fighterOne.username}</h2>
                    </div>
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2 style={{textAlign: "center"}}>VS</h2>
                    </div>
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2>{testObj.battle.battleOne.fighterTwo.username}</h2>
                    </div>                   
                    <img style={{width: "20%", height: "20%"}} src={testObj.battle.battleOne.fighterTwo.music.image} alt="album" />
                </div>   
                <div className="highlight" style={{margin: "10px 30px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
                    <img style={{width: "20%", height: "20%"}} src={testObj.battle.battleOne.fighterOne.music.image} alt="album" />
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2>{testObj.battle.battleOne.fighterOne.username}</h2>
                    </div>
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2 style={{textAlign: "center"}}>VS</h2>
                    </div>
                    <div style={{alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <h2>{testObj.battle.battleOne.fighterTwo.username}</h2>
                    </div>                   
                    <img style={{width: "20%", height: "20%"}} src={testObj.battle.battleOne.fighterTwo.music.image} alt="album" />
                </div>   
            </div>
        </div>
   
    )
};