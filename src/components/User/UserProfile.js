import React, { useRef } from "react";
import UserProfileImage from "../../utils/UserProfile.png";
import axios from "axios";

export default function UserProfile({ user }) {

    const hiddenFileInput = useRef(null);



    const upload = async (e) => {
        e.preventDefault();
        hiddenFileInput.current.click();
    };

    const handleFileChange = async e => {
        const fileUploaded = e.target.files[0];
        const file = new FormData()
        file.append('file', fileUploaded);
        await axios({
            method: "post",
            url: "/file/upload",
            data: file, 
            headers: { "Content-Type": "multipart/form-data" }
        }).then(async res => {
            console.log(res.status)
            await axios ({
                method: "post",
                url: "/api/user/userImage",
                data: {image: res.data, user: user},
                headers: { "Conent-Type" : "application/json"}
            }).then(res => console.log(res))
        });
    };

    console.log(user)

    return (
        <div style={{marginTop: "1em"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", border: "solid 1px dodgerblue", padding: ".5em 4em .5em 4em"}}>
                <h2 style={{paddingRight: "2em"}}>{user.username}</h2>
                <div style={{paddingLeft: "2em"}}>
                    <img onClick={(e) => upload(e)} style={{width: "75px"}} src={user.imageUrl === null ? UserProfileImage : user.imageUrl} alt="userProfileImage" />
                    <input type="file"
                        ref={hiddenFileInput}
                        style={{display:'none'}} 
                        onChange={handleFileChange}
                        accept="image/*"
                    /> 
                </div>
            </div>
            <div>
                <h3>Email: {user.email}</h3>
                <h3>Pantheons Won: NA</h3>
                <h3>Amount of Friends: {user.friend.length}</h3>
            </div>

        </div>
    )
}