import React, { useState, useContext, useRef } from "react";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { API } from "../../utils/API";
import axios from "axios";
import "./signUpStyle.css"



export default function SignUp() {

    const history = useHistory();

    const hiddenFileInput = useRef(null);

    const {setUser} = useContext(UserContext);
    
    const [input, setInput] = useState({});
    const [notify, setNotify] = useState(false);
    const [status, setStatus] = useState("");
    const [userImage, setUserImage] = useState(null);
    const [userPreImage, setUserPreImage] = useState(null);

    
    const handleInputChange = ({ target: { value, name }}) => {
        setInput({ ...input, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            if (userImage !== null && userPreImage === null) {
                const file = new FormData()
                file.append('file', userImage);
    
                const imgUrl = {}
    
                await axios({
                    method: "post",
                    url: "/file/upload",
                    data: file, 
                    headers: { "Content-Type": "multipart/form-data" }
                }).then(res => {
                    imgUrl['data'] = res.data
                });

                console.log(notify)

                const newUser = await API.saveNewUser(input, notify, imgUrl.data);
                if (newUser.data.msg === undefined) {
                    await localStorage.setItem("auth-token", newUser.data.token);
                    console.log(newUser.data)
                    await setUser(newUser.data.savedUser)
                    history.push({pathname: "/home"})
                } else {
                    setStatus(newUser.data.msg)
                }

            } else if (userImage === null && userPreImage !== null) {
                const newUser = await API.saveNewUser(input, notify, userPreImage);
                if (newUser.data.msg === undefined) {
                    await localStorage.setItem("auth-token", newUser.data.token);
                    console.log(newUser.data)
                    await setUser(newUser.data.savedUser)
                    history.push({pathname: "/home"})
                } else {
                    setStatus(newUser.data.msg)
                }
            } else {
                setStatus("Please choose to either upload an image or choose an already provided image.")
            }
           

           
        } catch (err) {
            console.log(err)
        }         
    };

    const upload = async (e) => {
        e.preventDefault();
        hiddenFileInput.current.click();
    };

    const handleFileChange = async e => {
        const fileUploaded = e.target.files[0];
        await setUserPreImage(null);
        await setUserImage(fileUploaded);
    };

    const handleChecked = async e => {
        setNotify(e.target.checked)
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
            <h2 style={{textAlign: "center", borderBottom: "solid 1px", paddingBottom: "10px"}}>Sign Up</h2>
        </div>
        <div className="circleColor">
          <div style={{display: "flex", justifyContent: "center"}}>                  
                <form style={{marginTop: "1.5em", display: "flex", flexDirection: "column", justifyContent: "center",  gap: "1em"}}>
                    <input className="inputUsername" onChange={handleInputChange} type="text" name="username" placeholder="Username" />
                    <input className="inputUsername" onChange={handleInputChange} type="text" name="email" placeholder="Email" />
                    <input className="inputUsername" onChange={handleInputChange} type="password" name="password" placeholder="Password" />
                    <input className="inputUsername" onChange={handleInputChange} type="password" name="confirmed" placeholder="Confirm Password" />
                    <div className="buttonHolder">
                        <span style={{position: "relative"}} />
                        {userImage !== null && userPreImage === null ?
                            <>
                                <button style={{backgroundColor: "gray", color: "white"}} onClick={(e) => upload(e)} type="file" className="buttonSignUp1">Upload Image</button>
                                <input type="file"
                                    ref={hiddenFileInput}
                                    style={{display:'none'}} 
                                    onChange={handleFileChange}
                                    accept="image/*"
                                /> 
                            </>
                            :
                            <>
                                <button onClick={(e) => upload(e)} type="file" className="buttonSignUp1">Upload Image</button>
                                <input type="file"
                                    ref={hiddenFileInput}
                                    style={{display:'none'}} 
                                    onChange={handleFileChange}
                                    accept="image/*"
                                /> 
                            </>
                        }
                        {userImage === null && userPreImage !== null ?
                            <button style={{backgroundColor: "gray", color: "white"}} onClick={(e) => {e.preventDefault(); setUserImage(null); setUserPreImage("testimage")}} className="buttonSignUp2">Choose Image</button>
                            :
                            <button onClick={(e) => {e.preventDefault(); setUserImage(null); setUserPreImage("testimage")}} className="buttonSignUp2">Choose Image</button>
                        }
              
                        <span className="divider" />
                    </div>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "center"}}>
                        <h4 style={{margin: "0px 0px 0px 0px", color: "white"}}>Recieve updates via email</h4>
                        <input onClick={(e) => handleChecked(e)} style={{marginLeft: "2em"}} type="checkbox" id="notification" name="notification" />
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button style={{marginTop: ".5em"}} className="buttonConfirm" onClick={handleSubmit} name="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div> 
    )
}