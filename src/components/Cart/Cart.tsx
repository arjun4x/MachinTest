import React,{useContext, useMemo} from 'react'
import { listContext } from '../ListContext/listContextValue';
 
const Cart = () => {
    const {cartValues} = useContext(listContext);
    console.log(cartValues);
    // let  total  = 0;


    const addTotal = useMemo (()=>{
        
   let total = 0;
        cartValues.map((value)=>{
       if(value.shrtName  =="atv"){
        
       if( value.no / 3 >= 1){
       const val =  Math.trunc(value.no / 3);
       const newNo = value.no - val;
            total +=   newNo *109.50;
        
       }else{
               total +=   value.no *109.50;
       }  
     
    

    }else if(value.shrtName  =="ipd"){
        if(value.shrtName  =="ipd" && value.no > 4){
          total += value.no * 499.99;  
        }else{
                total += value.no * 549.99; 
        }
     
    }else if(value.shrtName  =="mbp"){
         total += value.no * 1399.99;

    }
 

        
        
    })   
    return total;
        },[cartValues])

//    if(value.shrtName  =="atv"){
//        if( value.no / 3 > 1){
//        const val =  Math.trunc(value.no / 3);
//        const newNo = value.no - val;
//             total +=   newNo *109.50;
        
//        }else{
//                total +=   value.no *109.50;
//        }  
     
    

//     }else if(value.shrtName  =="ipd"){
//         if(value.shrtName  =="ipd" && value.no > 4){
//           total += value.no * 499.99;  
//         }else{
//                 total += value.no * 549.99; 
//         }
     
//     }else if(value.shrtName  =="mbp"){{
//          total += value.no * 1,399.99;

//     }
//     return total;

        
        
//     }

 
//     },[cartValues])
 console.log(addTotal,'gggggggggggg');

  return (
    <>  {cartValues.length > 0 &&  <div style={{"padding":"100px"}}>

        <h2>Cart Values</h2>
 <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
{cartValues?.map((value,index)=>{

// addTotal(value);
   
return(
    <li key={index}>
    <div className="px-4 py-5 sm:px-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{value.shrtName}</h3><span>x{value.no}</span>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{value.name}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">Status: <span className="text-green-600">{value.price}</span></p>
        {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" >Add to Cart </a> */}
      </div>
    </div>
  </li>
)
    })
}
  <li>
    <div className="px-4 py-5 sm:px-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900"> Total Amount:{addTotal}</h3>
        {/* <p className="mt-1 max-w-2xl text-sm text-gray-500"></p> */}
      </div>
      {/* <div className="mt-4 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">Status: <span className="text-green-600"></span></p>
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" > </a>
      </div> */}
    </div>
  </li>
</ul>
</div>}
    </>

  )
}

export default Cart