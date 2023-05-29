import { useState } from "react";
import React from "/node_modules/react";
import ReactDOM from "/node_modules/react-dom";
const ToggleProgram=()=>{

    const [toggle, setToggle]= useState("no status");

    function btnClicked(){
        if(toggle==="false") setToggle("true"); 
        else{
            setToggle("true"); 
        }
    }

    return(
        <div>
            <h1>The toggle status is: {toggle}</h1>
            <button onClick={btnClicked}>Click</button>
        </div>
        
    );

}

export default ToggleProgram;

