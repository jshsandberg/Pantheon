import React from "react";

export default function Friends({ friends }) {

    // useEffect(() => {
    //     const gettingFriends = async () => {
    //         const gotFriends = await GetFriends(user.username);
    //         setFriends(gotFriends)
    //     };
    //     gettingFriends();
    // }, [user])

    return (
        <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
            <div>
                <h2 style={{textAlign: "center"}}>Friends</h2>
            </div>
            <div style={{border: "solid 1px", overflow: "auto", maxHeight: "500px"}}>
                {
                    friends && friends.map((item, i) => {
                        return (
                            <div key={i} style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                <h2>{item.username}</h2>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    {/* <button style={{marginTop: "10px", marginBottom: "5px"}} onClick={() => console.log("Take user to pantheon history page")}>Pantheons</button>
                                    <button style={{marginBottom: "10px", marginTop: "5px"}} onClick={() => console.log("Take user to Friends of Friends pantheon history page")}>Friends</button> */}
                                </div>                            
                            </div>
                        )
                    })
                }
            </div>
           
        </div>
    )
};