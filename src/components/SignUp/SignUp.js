import React, { useState, useContext, useRef } from "react";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import { IoCloseCircleOutline, IoCloudUpload } from "react-icons/io5";
import { API } from "../../utils/API";
import "./signUpStyle.css"

export default function SignUp() {

    const history = useHistory();

    const hiddenFileInput = useRef(null);

    const {setUser} = useContext(UserContext);
    
    const [input, setInput] = useState({});
    const [status, setStatus] = useState("")

    const handleInputChange = ({ target: { value, name }}) => {
        setInput({ ...input, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = await API.saveNewUser(input);
            if (newUser.data.msg === undefined) {
                await localStorage.setItem("auth-token", newUser.data.token);
                console.log(newUser.data)
                await setUser(newUser.data.savedUser)
                history.push({pathname: "/home"})
            } else {
                setStatus(newUser.data.msg)
            }
        } catch (err) {
            console.log(err)
        }         
    };

    const upload = async (e) => {
        e.preventDefault();
        hiddenFileInput.current.click();
    };

    const handleFileChange = e => {
        const fileUploaded = e.target.files[0];
        console.log(fileUploaded)

    };


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
            <h2 style={{textAlign: "center", borderBottom: "solid 1px", paddingBottom: "10px"}}>Sign Up</h2>
        </div>
        <div className="circleColor">
          <div style={{display: "flex", justifyContent: "center"}}>                  
                <div >
                    <form style={{marginTop: "2em", display: "flex", flexDirection: "column", gap: "1em"}}>
                        <input className="inputUsername" onChange={handleInputChange} type="text" name="username" placeholder="Username" />
                        <input className="inputUsername" onChange={handleInputChange} type="text" name="email" placeholder="Email" />
                        <input className="inputUsername" onChange={handleInputChange} type="text" name="password" placeholder="Password" />
                        <input className="inputUsername" onChange={handleInputChange} type="text" name="confirmed" placeholder="Confirm Password" />
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <button onClick={(e) => upload(e)} type="file" className="buttonSignUp">Upload Image</button>
                            <input type="file"
                                ref={hiddenFileInput}
                                style={{display:'none'}} 
                                onChange={handleFileChange}
                            /> 
                            <button className="buttonSignUp">Choose Image</button>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <button className="buttonConfirm" onClick={handleSubmit} name="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> 
    )
}