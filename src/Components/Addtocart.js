import React,{useContext} from 'react';
import {FaWindowClose} from 'react-icons/fa'
import {dispContext,foodListContext} from '../Context';
import '../Css/Addtocart.css';

export default function Addtocart(){    
    const dispatch = useContext(dispContext);
    const foodslist = useContext(foodListContext);

    function disp(idx){
        console.log(dispatch({'type':'del','value':idx}));
    }
    function orders(){
        alert("order placed successfully");
    }

    return(
        <>
            <div className="orddiv">
            {foodslist.map((food)=>{
                return(
                    <div className="d" id={food.idx}>
                        <span></span>
                        <button className="close" onClick={()=> disp(food.idx)}>
                            <FaWindowClose></FaWindowClose>
                        </button>
                        <div>
                        <img src={`./food_images/${food.image}`} alt="img"/>
                        <p>{food.desc}</p>
                        </div>
                        <div >
                        
                            <p>
                                World best food
                                available in cheap
                                price just try it and 
                                assured you will not
                                regret visit all types of food items gujarati,punjabi,
                                rajasthani,bengali,south indian 
                                just try it....
                            </p>
                            <div>
                                <span>{food.name}</span><br />
                                <span>Rs {food.price}</span>< br/>
                                <span>quantity: {food.count}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div>
            <button className="close" onClick={()=> orders()}>Place Order</button>
            </div>
            </div>
            
        </>
    );
}
