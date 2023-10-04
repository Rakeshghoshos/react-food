import React,{useReducer} from 'react';
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Addtocart from './Components/Addtocart';
import {FaCartPlus} from 'react-icons/fa';
import foodContext,{dispContext,foodListContext} from './Context';
import Orders from './Components/Orders';

export default function App(){

    const [foods, dispatch] = useReducer(reducer, []);

    function reducer(foods,actions){
        switch(actions.type){
            case 'add':
                return [...foods,actions.value];
            case 'del':
                return foods.filter((f)=> f.idx !== actions.value);
            default:
                return foods;
        }
    }
    const divstyle = {
        "width" : '5%',
        "backgroundColor" : 'darkred',
        "position" : 'fixed',
        "top" : '12%',
        "right": '0%',
        "height" : '5vh',
        "marginRight" : '4%',
        "padding" : '0.5%',
        "borderRadius" : '50%',
        "justifyContent": 'center',
    };

    const style = {
        "width" : '80%',
        "height" : '4vh',
        "color" : "lightpink",
        
    };

    return(
        <>  
            <foodContext.Provider value={{}}>
                <dispContext.Provider value={dispatch}>
                    <foodListContext.Provider value={foods}>
            <BrowserRouter >
                <Navbar/>
                <div style={divstyle}>
                <NavLink to="/addtocart"><FaCartPlus style={style}></FaCartPlus></NavLink>
                </div>
                <Routes>
                    <Route exact path="/" Component={Home}/>
                    <Route exact path="/about" Component={About}/>
                    <Route exact path="/login" Component={Login}/>
                    <Route exact path="/register" Component={Register}/>
                    <Route exact path="/addtocart" Component={Addtocart}/>
                    <Route exact path="/orders" Component={Orders}/>
                </Routes>
            </BrowserRouter>
            </foodListContext.Provider>
            </dispContext.Provider>
            </foodContext.Provider>
        </>
    );
}