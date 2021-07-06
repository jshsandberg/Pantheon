import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { API } from "../../utils/API";
import "./Login.css"

export default function Login() {

    const history = useHistory();

    const {setUser} = useContext(UserContext);
    
    const [input, setInput] = useState({});
    const [status, setStatus] = useState("")

    const handleInputChange = ({ target: { value, name }}) => {
        setInput({ ...input, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const findUser = await API.loginUser(input);
            if (findUser.data.msg === undefined) {
                await localStorage.setItem("auth-token", findUser.data.token);
                await setUser(findUser.data.user);
                history.push({pathname: "/home"})
            } else {
                setStatus(findUser.data.msg)
            }
        } catch (err) {
            console.log(err)
        }         
    }


    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {
                status ? 
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "450px"}}>
                    <h2>{status}</h2>
                    <div onClick={() => setStatus("")} style={{fontSize: "35px", marginTop: "15px"}}>
                        <IoCloseCircleOutline />
                    </div>
                </div>
                :
                null
            }
        <div>
            <h2 style={{textAlign: "center", borderBottom: "solid 1px", paddingBottom: "10px"}}>Login</h2>
        </div>
        <div className="circleColorLogin">
          <div style={{display: "flex", justifyContent: "center"}}>                  
                <form style={{marginTop: "1.5em", display: "flex", flexDirection: "column", justifyContent: "center",  gap: "1em"}}>
                    <input className="inputUsername" onChange={handleInputChange} type="text" name="username" placeholder="Username" />
                    <input className="inputUsername" onChange={handleInputChange} type="password" name="password" placeholder="Password" />
                    <div className="buttonHolder">
                        <button style={{marginTop: ".5em"}} className="buttonConfirmLogin" onClick={handleSubmit} name="submit">Login</button>
                      </div>
                </form>
            </div>
        </div>
    </div> 
    )
}