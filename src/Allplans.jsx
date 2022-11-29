import React from "react";
import Axios from "axios"
const Allplans = (props) => {
var del = (id)=>{
 Axios.delete(`http://localhost:3000/plans/${id}`)
 .then((res)=>{
   console.log("oh you deleted me ")
 })
 .catch(err=>{
   console.log(err)
 })
}
    
  return (
    
 <div className="left-bloc ">
    {props.data.map((e,i)=>{

return (

    <div  key={e.id}>
      <ul>
          <div>
          <h1>{e.description} <span onClick={()=>{
             del(e.id) 
             window.location.reload()
          }}>👌</span> </h1> 

          </div>

      </ul>
    </div>
   
  );

    }
 
    )}
     </div> 
    ) } 

export default Allplans;

