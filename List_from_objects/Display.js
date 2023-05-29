//Write a program to render a list of items from an array of objects.



const Display=({items})=>{

    return(
        <div>
    
       {items.map(item=>(
            
                <div>
                    <li key={item.id}>{item.id} and {item.name}</li>
                </div>
        ))}

        </div>
    );

  
}


  export default Display;