import React, {useState} from "react"
import "./SideMenu.css"
import { data } from "./Data"
import Product from "./Product"

export default function SideMenu(){

    return (
        <div className="SideMenu">
            <input type="text" placeholder="Search..." className="search" onInputCapture={(e)=>{console.log(e.target.value,data.filter(x=>(x.name.indexOf(e.target.value)!==-1)));<Product productData={e.target.value} b="a"/>}
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