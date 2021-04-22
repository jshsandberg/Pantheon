import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GetNonAcceptedPantheons } from "../components/Functions/GetNonAcceptedPantheons";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import AcceptPantheon from "../components/Pantheon/AcceptPantheon";

export default function PantheonPage() {

    const {user} = useContext(UserContext);

    const history = useHistory();

    const [loading, setLoading] = useState(true);
    const [nonAcceptedPantheons, setNonAcceptedPantheons] = useState(null)
    const [rerender, setRerender] = useState(0);

    useEffect(() => {
        const checkData = async () => {
            if (user === null) {
                history.push({pathname: "/"})
            } else {
                const getNonAcceptedPantheon = async () => {
                    const foundNonAcceptedPantheons = await GetNonAcceptedPantheons(user.username);
                    setNonAcceptedPantheons(foundNonAcceptedPantheons);
                };
                await getNonAcceptedPantheon();
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
                <div>
                    <AcceptPantheon user={user} data={nonAcceptedPantheons} rerenderPage={rerenderPage} />
                </div>
            </div>
            :
            null
        }         
    </div>
    )
}