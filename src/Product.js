import React, {useEffect, useState} from "react"
import "./product.css";
import {data} from "./Data"

const Product=({productData})=> {
   const searchBasedProducts=data.filter(x=>(x.name.indexOf(productData)!==-1));
   let datas=searchBasedProducts.length!==0?searchBasedProducts:data;
   console.log("a",productData,datas);
   console.log("abc",data.filter(x=>(x.name.indexOf(productData)!==-1)));
   
 return (
    <div className="products">
     {datas.map(x=> <div className="product">
      <img
          src={`${x.img}`}
          alt=""
      />
      <span className="name">${x.name}</span>
      <span className="priceText">${x.price}</span>
     </div>)}
     </div>
 )
}

export default Product;