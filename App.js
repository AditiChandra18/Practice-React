import ToggleProgram from "/ToggleProgram";
import React from "/node_modules/react";
import ReactDOM from "/node_modules/react-dom/client";

const App=()=>{
    return(
        <>
            <ToggleProgram />
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);