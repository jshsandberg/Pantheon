import React from "react";
import Line from "../../utils/line.png"
import "./statusBarStyle.css"


export default function StatusBar({ num }) {

    switch(num) {
        case 1: 
            return (
                <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} alt="line" src={Line} />
                    <div className="data">
                        <svg className="test" onClick={() => console.log("hello")}  style={{position: "absolute", left: "-12", top: "0", width: "90px", height: "40px"}} viewBox="0 0 600 600">
                            <g fill="#61DAFB">
                            <path d="m 110 0 a 1 1 0 0 0 0 600 h 453 l 350 -600 z " />
                            </g>
                        </svg>      
                        <h2 className="created" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Created</h2>
                    </div>
                {/* <div className="data">
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
                <div className="data">
                    <svg className="test" style={{position: "absolute", left: "450", top: "0", width: "126px", height: "40px"}} viewBox="0 0 600 600">
                        <g fill="#61DAFB">
                        <path d="M -255 0 L -600 600 h 1040 A 1 1 0 1 0 375 0 " />
                        </g>
                    </svg>
                    <h2 className="complete" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Completed</h2>
                </div> */}
            </div>
            )
      
        case 2: 
            return (
                <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
         <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} alt="line" src={Line} />
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
                {/* <div className="data">
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
                <div className="data">
                    <svg className="test" style={{position: "absolute", left: "450", top: "0", width: "126px", height: "40px"}} viewBox="0 0 600 600">
                        <g fill="#61DAFB">
                        <path d="M -255 0 L -600 600 h 1040 A 1 1 0 1 0 375 0 " />
                        </g>
                    </svg>
                    <h2 className="complete" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Completed</h2>
                </div> */}
            </div>
            )
    
        case 3: 
        return (
            <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
         <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} alt="line" src={Line} />
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
            {/* <div className="data">
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
            <div className="data">
                <svg className="test" style={{position: "absolute", left: "450", top: "0", width: "126px", height: "40px"}} viewBox="0 0 600 600">
                    <g fill="#61DAFB">
                    <path d="M -255 0 L -600 600 h 1040 A 1 1 0 1 0 375 0 " />
                    </g>
                </svg>
                <h2 className="complete" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Completed</h2>
            </div> */}
        </div>
        )
   
        case 4: 
        return (
            <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
             <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} alt="line" src={Line} />
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
            {/* <div className="data">
                <svg className="test" style={{position: "absolute", left: "350", top: "0", width: "126px", height: "40px"}} viewBox="0 0 600 600">
                    <g fill="#61DAFB">
                    <path d="m -255 0 L -600 600 h 1465 0 l 350 -600 z  " />
                    </g>
                </svg>
                <h2 className="final" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Final Vote</h2>
            </div>
            <div className="data">
                <svg className="test" style={{position: "absolute", left: "450", top: "0", width: "126px", height: "40px"}} viewBox="0 0 600 600">
                    <g fill="#61DAFB">
                    <path d="M -255 0 L -600 600 h 1040 A 1 1 0 1 0 375 0 " />
                    </g>
                </svg>
                <h2 className="complete" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Completed</h2>
            </div> */}
        </div>
        )
    
        case 5: 
            return (
                <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
         <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} alt="line" src={Line} />
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
                {/* <div className="data">
                    <svg className="test" style={{position: "absolute", left: "450", top: "0", width: "126px", height: "40px"}} viewBox="0 0 600 600">
                        <g fill="#61DAFB">
                        <path d="M -255 0 L -600 600 h 1040 A 1 1 0 1 0 375 0 " />
                        </g>
                    </svg>
                    <h2 className="complete" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Completed</h2>
                </div> */}
            </div>
            )
        case 6:
            return (
                <div style={{border: "solid 2px", padding: "20px", width: "500px", borderRadius: "25px", position: "relative"}}>
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "450px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "350px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "250px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "150px" }} alt="line" src={Line} />
                    <img style={{position: "absolute", width: "54px", height: "auto", transform: "rotate(120deg)", top: "-7px", right: "50px" }} alt="line" src={Line} />
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
                    <div className="data">
                        <svg className="test" style={{position: "absolute", left: "450", top: "0", width: "126px", height: "40px"}} viewBox="0 0 600 600">
                            <g fill="#61DAFB">
                            <path d="M -255 0 L -600 600 h 1040 A 1 1 0 1 0 375 0 " />
                            </g>
                        </svg>
                        <h2 className="complete" style={{fontSize: "15px", margin: "10px 10px 10px 10px"}}>Completed</h2>
                    </div>
                </div>
            )
            default:
                return (
                    null
                )
    }
    
}