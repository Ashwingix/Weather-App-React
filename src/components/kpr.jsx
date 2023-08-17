import { useState } from "react";

const Kpr = () => {
    const[task,settask]=useState('')
    const [task1,setTask1]=useState('')
    const handleclick = ()=>{
        setTask1(task)
    }

    return ( 
        <div className="krp">
            <h1>KPR</h1>
            <input type="text" placeholder="search"  
            onChange={(e)=>settask(e.target.value)} /> 
            <br />
            {task1}
            <br></br>

            <button onClick={handleclick}>Submit</button>
        </div>
     );
}
 
export default Kpr;

