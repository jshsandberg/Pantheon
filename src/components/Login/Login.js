import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { API } from "../../utils/API";

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
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{width: "250px", boxShadow: "5px 5px", marginTop: "30px", backgroundColor: "#f5f5f5", border: "solid 1px"}}>
                    <div>
                        <h2 style={{textAlign: "center", borderBottom: "solid 1px", paddingBottom: "10px"}}>Login</h2>
                    </div>
                    <div style={{margin: "20px"}}>
                        <form>
                            <label htmlFor="fname">Username</label><br />
                            <input onChange={handleInputChange}  type="text" id="username" name="username" /><br />
                            <label htmlFor="lname">Password</label><br />
                            <input onChange={handleInputChange} type="password" id="password" name="password" />
                            <button onClick={handleSubmit} name="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}