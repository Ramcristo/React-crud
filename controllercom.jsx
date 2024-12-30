import React, { useState } from "react";


const ControllerCom = ()=>{
    const [form,setform]=useState("");
console.log("re-rendaring..",form)
const handleChange = (e) =>
{
    setform(e.target.value);
}
   return(
    <div className="flex flex-col gap-4 h-screen items-center w-full justify-center ">
        <p>{form}</p>
        <input type="text"
        value={form}
        className="border-2 border-red-700 outline-none"
        onChange={handleChange}
        />
        <button onClick={() => setform('Ramkumar')}>BtnForm</button>
    </div>
   )

    
};

export default ControllerCom;
