import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BattlePantheon from "../components/Pantheon/BattlePantheon";  
import { GetNonAcceptedPantheons } from "../components/Functions/GetNonAcceptedPantheons";
import { UserContext } from "../context/userContext";
import { GetPantheonBattle } from "../components/Functions/GetPantheonBattle";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import AcceptPantheon from "../components/Pantheon/AcceptPantheon";

export default function PantheonPage() {

    const {user} = useContext(UserContext);

    const history = useHistory();

    const [loading, setLoading] = useState(true);
    const [nonAcceptedPantheons, setNonAcceptedPantheons] = useState(null)
    const [rerender, setRerender] = useState(0);
    const [pantheonBattle, setPantheonBattle] = useState(null);

    useEffect(() => {
        const checkData = async () => {
            if (user === null) {
                history.push({pathname: "/"})
            } else {
                const getNonAcceptedPantheon = async () => {
                    const foundNonAcceptedPantheons = await GetNonAcceptedPantheons(user.username);
                    setNonAcceptedPantheons(foundNonAcceptedPantheons);
                }
                const chooseMusicForBattle = async () => {
                    const selectMusicForBattle = await GetPantheonBattle(user.username);
                    setPantheonBattle(selectMusicForBattle);
                };
                await getNonAcceptedPantheon();
                await chooseMusicForBattle();
                await setLoading(false)
            }
        };
        checkData();
      
    }, [user, history, rerender]);

    const rerenderPage = () => {
        setRerender(rerender => rerender + 1);
    }


    return (
        <div>
        {
            !loading ?
            <div>
                <div>
                    <Header user={user} />
                    <Menu user={user} reset={rerender}/>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <div>
                        <AcceptPantheon user={user} data={nonAcceptedPantheons} rerenderPage={rerenderPage} />
                    </div>
                    <div>
                        <BattlePantheon user={user} data={pantheonBattle} rerenderPage={rerenderPage} />
                    </div>
                </div>
            </div>
            :
            null
        }         
    </div>
    )
}