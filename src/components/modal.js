import React from 'react'

const Modal = (props) => {
    console.log('modal props ', props);
    return(
        <div className='modal'>
            <img src={props.data.img} className="hero--photo" />
            <h1> {props.data.title} </h1>
            <p> {props.data.description} </p> 
            <p> Price : <b> {props.data.price} </b> </p>
            <button onClick={props.closeModal}> Close </button>  
        </div>
    )
}
export default Modal;