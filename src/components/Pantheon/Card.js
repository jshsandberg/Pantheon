import React from "react";
import "./cardStyle.css"

export default function Card() {
    return (
        <div className="cardBorder">
            <div className="cardStatue">
                <h2 className="cardTitle">Test</h2>

                <p className="content">Hello World</p>
                <button className="acceptBtn">Accept</button>
                <button className="declineBtn"> Decline</button>
            </div>
        </div>
    )
}