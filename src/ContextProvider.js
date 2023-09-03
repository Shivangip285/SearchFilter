import React, {createContext, useState} from "react"
import SideMenu from "./SideMenu";
import Product from "./Product";

const Context = createContext("",()=>console.log(1));

export function ContextProvider () {
  const [state, setState] = useState("");

  const value = {state,setState}
  return (<Context.Provider value={value}>
      <SideMenu />
      <Product/>
    </Context.Provider>
  )
}

export default Context;