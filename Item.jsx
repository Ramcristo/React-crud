import React, { useState }  from "react";
import TaskImage from "./Fruits";




const Item = () => {
    const [fruits, setfruits] = useState([
        {
            id: 1,
            image: '1',
            names: 'Apple-The Healthy fruit',
            price: 250
        },
        {
            id: 2,
            image: '2',
            names: 'Orange-The medical fruit',
            price: 150
        }, {
            id: 1,
            image: '3',
            names: 'Strawbery-The Tasty fruit',
            price: 200
        }, {
            id: 4,
            image: '4',
            names: 'Banana-The favourate fruit',
            price: 50
        }
    ])
    return (
        <div className="w-5/6 mx-auto shadow-2xl">
            <h1 className="text-center  p-5">
                <span className="font-bold text-3xl"> welcome to My fruit shop</span></h1>
                <p className='text-xl text-center p-2'> Enter the people happy to purchase?</p>
           
            <div className="grid grid-cols-1 grid-cols-2 gap-10 p-12">
                {
                    fruits.map((fruit) => {
                        return (
                            <div key={fruit.id}>
                                <TaskImage
                                    task={fruit}
                              />
                            </div>

                        )
                    })
                }
            </div>
        </div>

    )
}
export default Item;