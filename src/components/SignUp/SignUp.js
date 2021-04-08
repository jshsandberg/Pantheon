import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { API } from "../../utils/API";

export default function SignUp() {
    
    const [input, setInput] = useState({});
    const [status, setStatus] = useState("")

    const handleInputChange = ({ target: { value, name }}) => {
        setInput({ ...input, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.username && input.email && input.password && input.confirmed){
            const newUser = await API.saveNewUser(input);
            await console.log(newUser)
        } else {
            setStatus("Need to fill out all of the forms!")
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
                        <h2 style={{textAlign: "center", borderBottom: "solid 1px", paddingBottom: "10px"}}>Sign Up</h2>
                    </div>
                    <div style={{margin: "20px"}}>
                        <form>
                            <label htmlFor="username">Username</label><br />
                            <input onChange={handleInputChange} type="text" name="username" /><br />
                            <label htmlFor="email">Email</label><br />
                            <input onChange={handleInputChange} type="text" name="email" /><br />
                            <label htmlFor="password">Password</label><br />
                            <input onChange={handleInputChange} type="password" name="password" />
                            <label htmlFor="confirmedPassword">Confirm Password</label><br />
                            <input onChange={handleInputChange} type="password" name="confirmed" />
                        </form>
                        <button onClick={handleSubmit} name="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}