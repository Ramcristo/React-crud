const TaskImage = ({task}) => {

    return (
       <div className="rounded-2xl overflow-hidden shadow-2xl">
        <img src={require(`../assets/${task.image}.jpg`)} alt='image' className="w-16"/>
            <div className="py-5">
                <div className="font-bold text-xl ">{task.names}</div> <br />
                <span className="text-justify ">{task.price}</span>
            </div>
            </div>
       
    )
}

export default TaskImage;

