import React from 'react';
import '../Css/Items.css';

export default function Item({image,name,desc,price,index,orders}){
    return(
        <div className="item" onClick={()=>{orders(index,image,name,desc,price)}}>
            <img src={`./food_images/${image}`} alt="img"/>
            <div id={index}>
                    <h2>{name}</h2>
                    <h4>Rs {price}</h4>
            </div>
            <p>{desc}</p>
        </div>
    );
}