import React, {useContext, useEffect, useState} from "react"
import "./product.css";
import {data} from "./Data"
import Context from "./ContextProvider"
const Product=()=> {
  let { state, setState, setStatep } = useContext(Context)
  //const { state, setState} = useContext(Context)
  //let[productDetails,setProductDetails]=useState(useContext(Context));
  //console.log("a",state);
  // useEffect(()=>{
  //   if(productData!==null){
  //   setProductDetails(productData)}
  // },[productData])
  //  let datas=productData!==null?data:productData;
   console.log("abc",state);
   
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