import React, { useRef } from "react";

const UncontrollerCom = () =>{

const userNameRef =useRef(null);
const addressRef =useRef(null);
const emailRef =useRef(null);
const phoneNoRef =useRef(null);

const handlesubmit=(e)=>{
    e.preventDefault()
const body= ({userName:userNameRef.current.value,
        address:addressRef.current.value,
        email:emailRef.current.value,
        phoneNo:phoneNoRef.current.value
    });
    console.log(body)
    userNameRef.current.value="";
    addressRef.current.value="";
    emailRef.current.value="";
    phoneNoRef.current.value="";
};

    return(
        <form
        className="flex flex-col gap-4 h-screen items-center w-full justify-center"
        onSubmit={handlesubmit}
        >
            <h1>UncontrollerCom</h1>
            <input type="text"
            ref={userNameRef}
            required
            className="p-3 border border-red-500 outline-none rounded"
            placeholder="username"
            />
            <input type="text"
            ref={addressRef}
            className="p-3 border border-red-500 outline-none rounded"
            placeholder="address"
            />
            <input type="email"
            ref={emailRef}
            required
            className="p-3 border border-red-500 outline-none rounded"
            placeholder="email"
            />
            <input type="number"
            ref={phoneNoRef}
            required
            className="p-3 border border-red-500 outline-none rounded"
            placeholder="phoneNo"
            />
            <button type="reset">Reset</button>
            <button type="submit">submit</button>
        </form>
    )
}

export default UncontrollerCom;