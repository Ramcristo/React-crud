import React, { createContext, useContext, useState } from "react";

export const contextFunction=createContext();

const Contextcom = ({children})=>{
   const [coin,setCoin]=useState("A");
  

   return <contextFunction.Provider value={{coin,setCoin}}>
{children}
   </contextFunction.Provider>;
};

export default Contextcom;


 export const A = ()=>{
 const state =useContext(contextFunction);
   
    return(
      <div className="w-[200px] h-[200px] bg-gray-200 flex flex-col justify-center items-center">
         <h1>A component -{state.coin}</h1>
    <button className="px-3 py-1 rounded bg-pink-400 text-white"
    onClick={()=> state.setCoin("A")}
    > Button</button>

      </div>
    )
   };
 export const B = ()=>{
   const {coin,setCoin} =useContext(contextFunction);
    const B_data ="b test";
    return(
      <div className="w-[200px] h-[200px] bg-red-200 flex flex-col justify-center items-center">
    <h1>B component -{coin}</h1>
    <button className="px-3 py-1 rounded bg-blue-400 text-white"
     onClick={()=> setCoin("B")}> Button</button>
    </div>
   );
};

 export const C = ()=>{
   const state =useContext(contextFunction);
   
    return(
      <div className="w-[200px] h-[200px] bg-blue-200 flex flex-col justify-center items-center">
         <h1>C component-{state.coin}</h1>
         <button className="px-3 py-1 rounded bg-red-400 text-white"
          onClick={()=> state.setCoin("C")}> Button</button>
      </div>
    )
};

export const D = ()=>{
   const state =useContext(contextFunction);
    return(
      <div className="w-[200px] h-[200px] bg-yellow-200 flex flex-col justify-center items-center">
         <h1>D component-{state.coin}</h1>
         <button className="px-3 py-1 rounded bg-green-400 text-white"
          onClick={()=> state.setCoin("D")}> Button</button>
      </div>
    )
};