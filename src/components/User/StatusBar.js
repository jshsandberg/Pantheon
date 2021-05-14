import React from "react";
import Line from "../../utils/line.png"
import Test from "../SVG/test";


export default function StatusBar() {

    return (
        <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
            <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} src={Line} />
            <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} src={Line} />
            <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} src={Line} />
            <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} src={Line} />
            <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} src={Line} />

            <svg style={{position: "absolute", left: "0", top: "0", width: "540px"}} viewBox="0 0 600 600">
                <g fill="#61DAFB">
                <path d="m 22 0 a 1 1 0 0 0 1 45 L 56 45 L 82 0 z " />
                </g>
            </svg>

            <svg style={{position: "absolute", left: "50", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                <g fill="#61DAFB">
                <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                </g>
            </svg>

            <svg style={{position: "absolute", left: "150", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                <g fill="#61DAFB">
                <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                </g>
            </svg>

            <svg style={{position: "absolute", left: "250", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                <g fill="#61DAFB">
                <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                </g>
            </svg>

            <svg style={{position: "absolute", left: "350", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                <g fill="#61DAFB">
                <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                </g>
            </svg>

            <svg style={{position: "absolute", left: "450", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                <g fill="#61DAFB">
                <path d="M 24 0 L -2 45 L 73 45 A 1 1 0 1 0 72 0 " />
                </g>
            </svg>

            {/* M 0 0 L 0 45 L 50 45 A 1 1 0 1 0 50 0  " */}

        </div>
    )
}