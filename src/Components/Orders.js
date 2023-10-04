import React,{useContext} from 'react';
import {dispContext,foodListContext} from '../Context';
import '../Css/Orders.css';

export default function Orders(){
    const dispatch = useContext(dispContext);
    const foodslist = useContext(foodListContext);

    function disp(idx){
        console.log(dispatch({'type':'del','value':idx}));

    }
    return(
        <>
            <div className="ordd">
            {foodslist.map((food)=>{
                return(
                    <>
                    <div className="di" id={food.idx}>
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
                    <div>
                    <button className="close" onClick={()=> disp(food.idx)}>Cancel Order</button>
                </div>
                    </>
                );
            })}
            </div>
            
        </>
    );
}