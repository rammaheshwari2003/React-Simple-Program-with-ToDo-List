import { useSelector, useDispatch } from "react-redux";
import { bgColorChange } from "../components/colorSlice";
import { useState } from "react";

const ThemeChange=()=>{

   const bgcolor=useSelector((state)=>state.mycolor.bgcolor);
   const myDid=useDispatch();
   const [bgclr, setBgclr]=useState();
   return(
      <>
         <div style={{width:"100%" ,height:"100vh",textAlign:"center",padding:"10px",backgroundColor:bgcolor}}>
      
         <h1> Background Color Change</h1> <hr />
         Enter Color : <input type="text" value={bgclr} onChange={(e)=>{setBgclr(e.target.value)}} />
         <button onClick={()=>{myDid(bgColorChange({clr:bgclr}))}}>Click here</button>
         <hr />
         </div>
      
      </>
   )
}
export default ThemeChange;

