import React from "react"
import img from "../images/download.png"
 function Navbar(props) {
    return (
        <nav>
            <img src={img} className="nav--logo"/>
            <button onClick={() =>props.setShowUser(true)}> Show User </button>
        </nav>
    )
};
export default Navbar;