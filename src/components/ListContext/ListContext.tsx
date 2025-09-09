import React,{createContext,useState} from 'react'
import { listContext } from './listContextValue';
// import {valuetype} from '../list/List'

// export const listContext = createContext(null);





const ListContext : any = ({children }:any) => {

    const [listValues,setListValues] = useState([
        {shrtName:"ipd", name:"Super iPad",price:"$549.99" ,no:1},
        {shrtName:"mbp", name:"MacBook Pro",price:"$1,399.99",no:1},
        {shrtName:"atv", name:"Apple TV",price:"$109.50",no:1}
    ]);
    const sessionStroageValue  = sessionStorage.getItem('cart'); 
    debugger
    console.log(JSON.parse(sessionStroageValue),'lllllllllllllllll');
    const [cartValues,setCartValues] = useState(sessionStroageValue ? JSON.parse(sessionStroageValue) : []);
    const contextValues = {listValues,cartValues,setListValues,setCartValues}

  return (
    <listContext.Provider value={contextValues}>{children}</listContext.Provider>
  )
}

export default ListContext