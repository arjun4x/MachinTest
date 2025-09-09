import React,{useContext} from 'react'
import { listContext } from '../ListContext/listContextValue'

type valuetype ={
    shrtName:string,
     name:string,
     price:string
    }
const List = () => {
const {listValues,setCartValues,cartValues} = useContext(listContext)
// console.log(constValues,"ggggggggg");



function handleClick(value:valuetype){
    
    const cartVal =  structuredClone(cartValues);
    debugger
    let checkval = 0;
if(cartVal.length > 0) {
    
    for(let i=0;i<cartVal.length;i++ ){
        if(cartVal[i]){
           if(cartVal[i].shrtName == value.shrtName) {
            cartVal[i].no = ++cartVal[i].no
            checkval = 1;
           }
        }
        
    }
}
if(checkval){
 setCartValues([...cartVal])
    sessionStorage.setItem("cart",JSON.stringify([...cartVal]));
}else{
    setCartValues([...cartValues,value])
    sessionStorage.setItem("cart",JSON.stringify([...cartValues,value]));
}
    
    // const sessionValue =  localStorage.getItem("cart");
    // debugger
    
//    sessionStorage.setItem("cart",JSON.stringify([...cartValues,value]));
    // }




}


  return (
 <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
{listValues?.map((value,index)=>{


   
return(
      <li>
    <div className="px-4 py-5 sm:px-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{value.shrtName}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{value.name}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">Status: <span className="text-green-600">{value.price}</span></p>
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=>{handleClick(value)}}>Add to Cart </a>
      </div>
    </div>
  </li>
)
    })
}
</ul>

  )
}

export default List