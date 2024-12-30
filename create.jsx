import React, { useState } from "react"


const New = () => {
    const [form, setform] = useState(
        {
            productName: "iphone",
            price: "58000",
            rateing: "4",
        }
    );


    const handleSubmit = (e) => {
        e.preventDefault();
     console.log(form);
    }

    return (
        <div className="w-full h-screen bg-blue-200 flex flex-col justify-center items-center">
            <div className="w-[300px] h-[400px] flex flex-cols justify-center items-center bg-slate-600 ">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <h1 className="text-white text-xl ">Createcomponent</h1>
                    <input type="text"
                        value={form.productName}
                        placeholder="ProductName"
                        className="border-2 border-red-700 outline-none "
                        onChange={(e) => setform({...form,productName:e.target.value})} />

                    <input type="text"
                        value={form.price}
                        placeholder="Price"
                        className="border-2 border-red-700 outline-none "
                        onChange={(e) => setform({...form, price:e.target.value})} />

                    <input type="text"
                        value={form.rateing}
                        placeholder="Rating"
                        className="border-2 border-red-700 outline-none "
                        onChange={(e) => setform({...form,rateing:e.target.value})} />

                    <button type="submit" className="text-white bg-blue-500">Submit</button>
                    <button type="Reset" className="text-white bg-red-500">Reset</button>
                </form>
            </div>
        </div>
    )
}

export default New;