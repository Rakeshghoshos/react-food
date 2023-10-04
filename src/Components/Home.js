import React,{useState , useEffect} from 'react';
import axios from 'axios';
import Items from './Items';
import '../Css/Home.css';
import Overview from './Overview';

export default function Home(){
    const [food, setfood] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [idx, setidx] = useState();
    const [image, setimage] = useState();
    const [name, setname] = useState();
    const [desc, setdesc] = useState();
    const [price, setprice] = useState();

    useEffect(() => {
        axios.get("http://localhost:1111/foods").then((res)=>{
            setfood(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }, [])
    function disp(){
        setIsShown(false);
    }
    function orders(i,image,name,desc,price){
        setIsShown(current => !current);
        setidx(i);
        setimage(image);
        setname(name);
        setdesc(desc);
        setprice(price);
    }

    return(
        <div className="home">
            {isShown && <Overview idx={idx} image={image} name={name} desc={desc} price={price} disp ={disp}/>}
             {food.map((f)=>{
                return(
                    <>
                    <Items image={f.image} name={f.name} desc={f.desc} price={f.price} index={f.id} orders={orders}/>
                    </>
                );
            })}
        </div>
    );
}