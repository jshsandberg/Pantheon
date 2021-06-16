import React, { useState } from "react";
import FormData from 'form-data';
import axios from 'axios';
import { IoImageOutline } from "react-icons/io5";


export default function Test() {

    const [image, setImage] = useState(null);

   const onSubmit = async (e) => {
        e.preventDefault()
        const file = new FormData()
        file.append('file', image)

            await axios({
            method: "post",
            url: "/file/upload",
            data: file, 
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            console.log(res)
        })

    }

    const onFileChange = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <div className="container">
                <div className="row">
                    <form action="/profile" onSubmit={onSubmit} encType="multipart/form-data">
                        <div className="form-group">
                            <input type="file" onChange={onFileChange} name="avatar" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}