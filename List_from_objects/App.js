
import React from "/node_modules/react"
import ReactDOM from "/node_modules/react-dom/client";
import Display from "/List_from_objects/Display";


const App=()=>{
    return(
        <>
            <Display items={items} />
        </>
    )
}


const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);