import React from "react";
import img from "../images/istockphoto-664966806-612x612.jpg";
// import img from "../images/download.png"
 function Card(props) {
  console.log('crd props',props)

            let badgeText
            if (props.item.openSpots === 0) {
            badgeText = "SOLD OUT"
            } else if (props.item.location === "Online") {
            badgeText = "ONLINE"
            }
        return (
            <div className="card" style={props.style} onClick={() => props.cardClick(props.item)}>
                  {badgeText && <div className="card--badge">{badgeText}</div>}
                  {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
                <img src={props.item.img} className="card--image" />
                <div className="card--stats">
                    <img src={img}className="card--star" />
                    <span>{props.item.rating}</span>
                    <span className="gray">({props.item.reviewCount})   </span>
                    <span className="gray"> {props.item.location} •</span>
                </div>
                <p className="card--title">{props.item.title}</p>
                <p className="card--price"><span className="bold">from ${props.item.price}</span> / person</p>
            </div>
        )
    };
export default Card;    