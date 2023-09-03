import React, {useEffect, useState} from "react"
import "./product.css";
import {data} from "./Data"

const Product=({productData})=> {
  let[productDetails,setProductDetails]=useState(data);
  console.log("a",productData);
  useEffect(()=>{
    if(productData!==null){
    setProductDetails(productData)}
  },[productData])
   let datas=productData!==null?data:productData;
   console.log("abc",data.filter(x=>(x.name.indexOf(productData)!==-1)));
   
 return (
    <div className="products">
     {data.map(x=> <div className="product">
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