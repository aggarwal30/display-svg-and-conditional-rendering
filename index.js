import React, { startTransition } from "react";

import ReactDOM from "react-dom/client";

import './index.css'
import EventBasics  from "./event";

//"https://m.media-amazon.com/images/I/61UaOebngeL._SL1280_.jpg"

// "https://m.media-amazon.com/images/I/71gSvhLIJZL._SL1440_.jpg"

// "https://m.media-amazon.com/images/I/71Z7ItgGEpL._SL1440_.jpg"

 

// Props 

 

const CardHeading = () =>{

    return (<h2 className="heading">Our Best Sellers</h2>);}

    

 

function CardList(){

    return(
      <>   
       <div >

           <CardHeading />

            <div className="cardList">

            <Card  cardImage="https://m.media-amazon.com/images/I/61UaOebngeL._SL1280_.jpg" imageTitle="Mehroon Suit with Dupatta"/>

             <Card  cardImage="https://m.media-amazon.com/images/I/71gSvhLIJZL._SL1440_.jpg" imageTitle="Purple Suit with Dupatta"/>

             <Card  cardImage="https://m.media-amazon.com/images/I/71Z7ItgGEpL._SL1440_.jpg" imageTitle="Blue Suit with Dupatta"/>

           </div>

       </div> 

      
      </>

 

    );

}

const imageButton = "Buy Now!" 

function Card(props)

{
    return (
        <>   
       <div className="card">

             <img className="imageSec" src={props.cardImage} alt="suit"/>

             <h4> {props.imageTitle}</h4>

             <button>{imageButton}</button>

        </div>

        </>

    );

}
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EventBasics/>)