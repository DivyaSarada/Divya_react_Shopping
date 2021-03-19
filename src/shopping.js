/*import React from "react";
import phone from "./images/phone.jpg"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Shopping(props){
    
return(
    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
    
    <div className="card">  
    <div className="card-body">
        <img src={phone} className="card img-top"/>
         <h1 className="card-title">{props.data.item}</h1>
   <h2 className="card-price">{props.data.symbol+props.data.price}</h2>
   <p className="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
   <div className="card-footer"><small className="text-muted">*****</small>
   <button className="btn btn-warning" onClick={()=>{props.handle(props.data);}}>Add to cart</button></div>
   </div>
   </div>
 
</div>
);
}
export default Shopping;
 */  
import React from 'react';
import phone from "./images/phone.jpg"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Card(props){
    console.log(props);
    return(
        <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
            <div className="card">
                <img className="card-img-top" src={phone} alt="Mountain"/>
                <div className="card-body">
                    <h5 className="card-title text-primary">{props.data.id}</h5>
                    <strong>{props.data.price}</strong>
                    <p className="card-text">{props.data.description}</p>
                    <buttton className="btn btn-primary" onClick={() => props.Malliii(props.data)}>Add to Cart</buttton>
                </div>
            </div>
        </div>
    )
}

export default Card;

