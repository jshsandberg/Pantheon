import React from "react";

export default function SignUp() {

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "250px", boxShadow: "5px 5px", marginTop: "30px", backgroundColor: "#f5f5f5", border: "solid 1px"}}>
            <div>
                <h2 style={{textAlign: "center", borderBottom: "solid 1px", paddingBottom: "10px"}}>Sign Up</h2>
            </div>
            <div style={{margin: "20px"}}>
                <form>
                    <label for="fname">Username</label><br />
                    <input type="text" id="fname" name="fname" /><br />
                    <label for="fname">Email</label><br />
                    <input type="text" id="fname" name="fname" /><br />
                    <label for="lname">Password</label><br />
                    <input type="password" id="lname" name="lname" />
                    <label for="lname">Confirm Password</label><br />
                    <input type="password" id="lname" name="lname" />
                    <button type="submit" name="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
    )
}