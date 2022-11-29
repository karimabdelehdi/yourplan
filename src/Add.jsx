import React ,{useState} from "react";
import axios from "axios";

var Add =()=>{
    const [description,setDescription]=useState("")
    
    var add =() =>{
        axios.post("http://localhost:3000/api/plans",{description:description})
        .then((res)=>{
            setDescription(res);
        })
    }

    return(
        <div className="add">
             <h1 className="New-plans-Title">New Plan</h1>
        <input className="input" placeholder="YOUR PLAN"  onChange={(e)=>{
            setDescription(e.target.value)
            console.log(e.target.value)
        }} />
         <button className="btn" onClick={()=>{
           add();
            window.location.reload()
         }} >Add plan</button>
        </div>
    )
}


export default Add