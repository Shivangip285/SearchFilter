import React, {useContext, useState} from "react"
import "./SideMenu.css"
import { data } from "./Data"
import Product from "./Product"
import Context from "./ContextProvider.js"

export default function SideMenu(){

    let { state, setState} = useContext(Context)
    console.log("a",state);
    //const a=()=>{setState(state++)};
    return (
        <div className="SideMenu">
            <input type="text" placeholder="Search..." className="search" onInputCapture={(e)=>{console.log(e.target.value,data.filter(x=>(x.name.indexOf(e.target.value)!==-1)));}
            }/>
            <h1>Categories</h1>
            <div className="cats">
            </div>
            <h1>Maximum Price</h1>
            <div className="price">
                <input type="range" className="priceRange"/>
                <span className="priceValue"></span>
            </div>
        </div>
    )
}