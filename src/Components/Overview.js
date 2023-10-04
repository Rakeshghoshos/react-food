import React,{useState,useContext} from 'react';
import '../Css/Overview.css';
import {FaPlus,FaMinus,FaWindowClose} from 'react-icons/fa';
import foodContext,{dispContext} from '../Context';

export default function Overview({idx,image,name,desc,price,disp}){
    const [count, setcount] = useState(0);
    var food = useContext(foodContext);
    const dispatch = useContext(dispContext);
    function Add(){
        setcount(count+1);
    }
    function Sub(){
        if(count > 0){
            setcount(count - 1);
        }
    }

    function addtocart(){
        food.idx = idx;
        food.image = image;
        food.name = name;
        food.desc = desc;
        food.price = price;
        food.count = count;
        dispatch({'type': 'add','value': food});
    }
    
    return(
        <> 
        <div className="ord-div" id={idx}>
            <span></span>
            <button className="close" onClick={()=> disp(false)}>
                <FaWindowClose></FaWindowClose>
            </button>
            <div>
            <img src={`./food_images/${image}`} alt="img"/>
            <p>{desc}</p>
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
                    <span>{name}</span><br />
                    <span>Rs {price}</span>
                </div>
                <div className="qty">
                    <button onClick={() => Add()}><FaPlus></FaPlus></button>
                        {count}
                    <button onClick={()=> Sub()}><FaMinus></FaMinus></button>
                    <button className="addtocart" onClick={()=>addtocart()}>Add-To-Cart</button>
                </div>
            </div>
        </div>
        </>
    );
}