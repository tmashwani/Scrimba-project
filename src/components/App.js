import React, {useState} from "react"
import Navbar from "./Navbar"
// import { Form, Input, InputNumber, Button } from 'antd';
import './App.css';
import Hero from "./Hero";
import Card from "./Card";
import Data from  "./Data";
import Modal from "./modal";
import User from "./user";
function App() {

  const [visible, setVisible] = useState(false);
  const [dataId, setDataId] = useState({});
  const [showUser, setShowUser] = useState(false)
  const cardClick = (item) => {
    console.log('crd click ', item);
    setDataId(item)
    setVisible(true)
    // return <Modal data={Data[id]} />
  }
  const closeModal = () => {
    setVisible(false)
  }

  const cards = Data.map((item, index) => {
    return (
        <Card
           
          cardClick={cardClick}
          key={index}
          item={item}
          // style={{padding: '10px'}}
          // id={index} 
          // rating={item.stats.rating}
          // reviewCount={item.stats.reviewCount}
          // location={item.location}
          // title={item.title}
          // price={item.price}
          // openSpots={item.openSpots}
          // img={item.img}
          // cardClick={cardClick}
        />
    )
  })
  
  

  return (
    <div>
      <Navbar setShowUser={setShowUser} />
      
      {showUser ? <User /> : 
      <>
        <Hero />
        
        <section  className="cards-list" >
        {cards} </section>
        {visible && <Modal data={dataId} closeModal={closeModal}  />}  
      </>
      }
    </div>
  );
}

export default App;
