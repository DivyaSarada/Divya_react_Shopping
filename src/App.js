/*import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Shopping from './shopping';
import {useState} from "react";
function App(){
  let details=[
    {item:'Zebronics',symbol:'$', price:24.99},
    {item:'Sony',symbol:'$',price:26.99},
    {item:'JBL',symbol:'$',price:25.99},
    { item:'Philips', symbol:'$', price:27.99},
    { item:'Boat', symbol:'$', price:28.99},
    { item:'Redmi', symbol:'$', price:29.99},
       ]
       const[cartItems,setItems]=useState([]);
       function handle(data){
         setItems([...cartItems,data.item]);
       }
       function remove(item,index){
         cartItems.splice(index,1);
       }
    
  return (
    
    <div className="container"> 
     <div className="row">
          <div class="col-lg-4">

            <h1 class="my-4">Cart</h1>
            <ul class="list-group">
                {
                  cartItems.map((product,index) => {
                    return <li class="list-group-item d-flex justify-content-between align-items-center">
                      {product}
                      <button className="btn" onClick={()=>remove(product,index)}><span class="badge bg-primary rounded-pill">X</span></button>
                    </li>
                  })
                }
              </ul>
              
           </div>
           </div>
          <div className="row">
    {
     details.map((a,index)=>{
       return  <Shopping data={a} handle={handle} key={index}></Shopping>
     })
          }
</div>
</div>
  ); 
}  
export default App;
*/
import React from 'react';
import { useState } from 'react';
import Card from './shopping';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
    let items = [
        {
            id : "Item One",
            price : '24.99',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
        },
        {
            id : "Item Two",
            price : '24.99',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
        },
        {
            id : "Item Three",
            price : '24.99',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
        },
        {
            id : "Item Four",
            price : '24.99',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
        },
        {
            id : "Item Five",
            price : '24.99',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
        },      {
            id : "Item Six",
            price : '24.99',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, accusantium.'
        }

    ]

    // const [totalItems, setTotalItems] = useState( ikada raaskovali initialization 
    //                                     for ex: 0, '', [], {}, true, false, 10, 7, 100 ila );
    const b = useState([]);
    const totalItems = b[0];
    const setTotalItems = b[1];
    console.log(setTotalItems);
    console.log(totalItems);

    const [totalPrice, setTotalPrice] = useState(0);

    const handleAddToCart = (item) => {
        totalItems.push(item);
        setTotalItems([...totalItems]);
        let tempTotal = parseFloat(totalPrice) + parseFloat(item.price);
        setTotalPrice(tempTotal.toFixed(2));
    }

    const handleRemoveItem = (item, index) => {
        totalItems.splice(index, 1);
        setTotalPrice([...totalItems]);
        let tempTotal = totalPrice - item.price;
        setTotalPrice(tempTotal.toFixed(2))
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>Items in Cart - Total Price ${totalPrice}</h3>
                    <ul className='list-group'>
                    {
                        totalItems.map((item, index) => {
                            return <li 
                                        className='list-group-item d-flex justify-content-around'
                                        key={index}>
                                        {item.id}
                                        <span>${item.price}</span>
                                        <button className="btn btn-primary" onClick={() => handleRemoveItem(item, index)}>Remove Item</button>
                                    </li>
                        })
                    }
                    </ul>
                </div>
            </div>
            <div className="row">
            {
                items.map((item, index) => {
                    return <Card data={item} Malliii = {handleAddToCart} key={index}></Card>
                })
            }
            </div>
        </div>
    );
}

export default App;


