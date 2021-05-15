import React, { useState } from "react";
import Line from "../../utils/line.png"
import "./statusBarStyle.css"


export default function StatusBar({ num }) {

    const [hover, setHover] = useState(false)

    switch(num) {
        case 1: 
            return (
                <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} src={Line} />
            
                    <svg className="test" style={{position: "absolute", left: "0", top: "0", width: "540px"}} viewBox="0 0 600 600">
                        <g fill="#61DAFB">
                        <path d="m 22 0 a 1 1 0 0 0 1 45 L 56 45 L 82 0 z " />
                        </g>
                    </svg>
                </div>
            )
        break;
        case 2: 
            return (
                <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} src={Line} />
            
                    <svg className="test" style={{position: "absolute", left: "0", top: "0", width: "540px"}} viewBox="0 0 600 600">
                        <g fill="#61DAFB">
                        <path d="m 22 0 a 1 1 0 0 0 1 45 L 56 45 L 82 0 z " />
                        </g>
                    </svg>

                    <svg className="test" style={{position: "absolute", left: "50", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                        <g fill="#61DAFB">
                        <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                        </g>
                    </svg>
                </div>
            )
        break;
        case 3: 
        return (
            <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} src={Line} />
        
                <svg className="test" style={{position: "absolute", left: "0", top: "0", width: "540px"}} viewBox="0 0 600 600">
                    <g fill="#61DAFB">
                    <path d="m 22 0 a 1 1 0 0 0 1 45 L 56 45 L 82 0 z " />
                    </g>
                </svg>

                <svg className="test" style={{position: "absolute", left: "50", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                    <g fill="#61DAFB">
                    <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                    </g>
                </svg>

                <svg className="test" style={{position: "absolute", left: "150", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                    <g fill="#61DAFB">
                    <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                    </g>
                </svg>
            </div>
        )
        break;
        case 4: 
        return (
            <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
            <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} src={Line} />
            <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} src={Line} />
            <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} src={Line} />
            <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} src={Line} />
            <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} src={Line} />
     
            <svg className="test" style={{position: "absolute", left: "0", top: "0", width: "540px"}} viewBox="0 0 600 600">
                <g fill="#61DAFB">
                <path d="m 22 0 a 1 1 0 0 0 1 45 L 56 45 L 82 0 z " />
                </g>
            </svg>

            <svg className="test" style={{position: "absolute", left: "50", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                <g fill="#61DAFB">
                <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                </g>
            </svg>

            <svg className="test" style={{position: "absolute", left: "150", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                <g fill="#61DAFB">
                <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                </g>
            </svg>

            <svg className="test" style={{position: "absolute", left: "250", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                <g fill="#61DAFB">
                <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                </g>
            </svg>

     
            </div>
        )
        break;
        case 5: 
            return (
                <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} src={Line} />
         
                <svg className="test" style={{position: "absolute", left: "0", top: "0", width: "540px"}} viewBox="0 0 600 600">
                    <g fill="#61DAFB">
                    <path d="m 22 0 a 1 1 0 0 0 1 45 L 56 45 L 82 0 z " />
                    </g>
                </svg>
    
                <svg className="test" style={{position: "absolute", left: "50", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                    <g fill="#61DAFB">
                    <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                    </g>
                </svg>
    
                <svg className="test" style={{position: "absolute", left: "150", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                    <g fill="#61DAFB">
                    <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                    </g>
                </svg>
    
                <svg className="test" style={{position: "absolute", left: "250", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                    <g fill="#61DAFB">
                    <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                    </g>
                </svg>
    
                <svg className="test" style={{position: "absolute", left: "350", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                    <g fill="#61DAFB">
                    <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                    </g>
                </svg>
                </div>
            )
            break;
        case 6:
            return (
                <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} src={Line} />
                <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} src={Line} />
                    <div className="data">
                        <svg className="test" onClick={() => console.log("hello")}  style={{position: "absolute", left: "-12", top: "0", width: "90px", height: "40px"}} viewBox="0 0 600 600">
                            <g fill="#61DAFB">
                            <path d="m 110 0 a 1 1 0 0 0 0 600 h 453 l 350 -600 z " />
                            </g>
                        </svg>      
                        <h2 className="created" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Created</h2>
                    </div>


                    
                 
             

                    <div className="data">

    
                <svg className="test" style={{position: "absolute", left: "52", top: "0", width: "123px", height: "40px"}} viewBox="0 0 600 600">
                    <g fill="#61DAFB">
                    <path d="m -260 0 l -350 600 h 1465 l 350 -600 z " />
                    </g>
                </svg>
                <h2 className="accepted" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Accepted</h2>

                </div>
    
                <div className="data">

                <svg className="test" style={{position: "absolute", left: "150", top: "0", width: "126px", height: "40px"}} viewBox="0 0 600 600">
                    <g fill="#61DAFB">
                    <path d="m -255 0 L -600 600 h 1465 0 l 350 -600 z  " />
                    </g>
                </svg>
                <h2 className="music" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Choose Song</h2>
                </div>

                <div className="data">

                <svg className="test" style={{position: "absolute", left: "250", top: "0", width: "126px", height: "40px"}} viewBox="0 0 600 600">
                    <g fill="#61DAFB">
                    <path d="m -255 0 L -600 600 h 1465 0 l 350 -600 z  " />
                    </g>
                </svg>
                <h2 className="vote" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Voted</h2>
                </div>

                <div className="data">

                <svg className="test" style={{position: "absolute", left: "350", top: "0", width: "126px", height: "40px"}} viewBox="0 0 600 600">
                    <g fill="#61DAFB">
                    <path d="m -255 0 L -600 600 h 1465 0 l 350 -600 z  " />
                    </g>
                </svg>
                <h2 className="final" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Final Vote</h2>
                </div>

                
    
                {/* <svg className="test" style={{position: "absolute", left: "250", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                    <g fill="#61DAFB">
                    <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                    </g>
                </svg> */}
    
                {/* <svg className="test" style={{position: "absolute", left: "350", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                    <g fill="#61DAFB">
                    <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
                    </g>
                </svg> */}
    
                <svg className="test" style={{position: "absolute", left: "450", top: "0", width: "540px"}} viewBox="-5 0 600 600">
                    <g fill="#61DAFB">
                    <path d="M 24 0 L -2 45 L 73 45 A 1 1 0 1 0 72 0 " />
                    </g>
                </svg>
                </div>
       
            )
    }

    // return (
    //     <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
    //         <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} src={Line} />
    //         <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} src={Line} />
    //         <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} src={Line} />
    //         <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} src={Line} />
    //         <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} src={Line} />
     
    //         <svg style={{position: "absolute", left: "0", top: "0", width: "540px"}} viewBox="0 0 600 600">
    //             <g fill="#61DAFB">
    //             <path d="m 22 0 a 1 1 0 0 0 1 45 L 56 45 L 82 0 z " />
    //             </g>
    //         </svg>

    //         <svg style={{position: "absolute", left: "50", top: "0", width: "540px"}} viewBox="-5 0 600 600">
    //             <g fill="#61DAFB">
    //             <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
    //             </g>
    //         </svg>

    //         <svg style={{position: "absolute", left: "150", top: "0", width: "540px"}} viewBox="-5 0 600 600">
    //             <g fill="#61DAFB">
    //             <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
    //             </g>
    //         </svg>

    //         <svg style={{position: "absolute", left: "250", top: "0", width: "540px"}} viewBox="-5 0 600 600">
    //             <g fill="#61DAFB">
    //             <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
    //             </g>
    //         </svg>

    //         <svg style={{position: "absolute", left: "350", top: "0", width: "540px"}} viewBox="-5 0 600 600">
    //             <g fill="#61DAFB">
    //             <path d="M -2 45 L 107 45 L 133 0 L 25 -1 z  " />
    //             </g>
    //         </svg>

    //         <svg style={{position: "absolute", left: "450", top: "0", width: "540px"}} viewBox="-5 0 600 600">
    //             <g fill="#61DAFB">
    //             <path d="M 24 0 L -2 45 L 73 45 A 1 1 0 1 0 72 0 " />
    //             </g>
    //         </svg>

    //         {/* M 0 0 L 0 45 L 50 45 A 1 1 0 1 0 50 0  " */}

      
    // )
}