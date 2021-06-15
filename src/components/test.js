import React, { useState } from "react";
import FormData from 'form-data';
import axios from 'axios';
import { IoImageOutline } from "react-icons/io5";


export default function Test() {

    const [image, setImage] = useState(null);

   const onSubmit = async (e) => {
        e.preventDefault()
        // const data = new FormData()
        // data.append('profileImg', image, image.name )

        // //     await axios({
        // //     method: "post",
        // //     url: "/api/user/test-image",
        // //     data: data, 
        // //     headers: data.getHeaders()
        // // }).then(res => {
        // //     console.log(res)
        // // })
        // await axios.post('/api/user/test-image', data, { headers: {'Content-Type': 'multipart/form-data' }})

        const data = new FormData();


        data.append('action', 'ADD');
        data.append('param', 0);
        data.append('secondParam', 0);
        data.append('file', new Blob(['test payload'], { type: 'text/csv' }));

        axios.post('/api/user/test-image', data);

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