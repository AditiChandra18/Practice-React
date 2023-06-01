//Write a program to fetch data from an API and display it on the page.
const btn_click=document.getElementById("btn");
const output=document.getElementById("output");

btn_click.addEventListener( "click",function(){
    console.log("button clicked");
fetch("https://hplussport.com/api/products/")
.then(response => response.json())
.then( data => {
    // const movies= data.products;
     console.log(data);

   
    data.forEach(product => {

        const Title= product.name;
        const Year= product.price;
       // const Cast= product.image;

        const listItem = document.createElement('li');
        const image1=document.createElement('img');
        image1.setAttribute('src',product.image);

    //     // Set the text content of the list item to the product name
    //     listItem.textContent = product.name;

    //     // Append the list item to the product list
    //    output.appendChild(listItem);


        

        listItem.textContent= ` Name = ${Title}
        Price = ${Year}
        `
        listItem.append(image1);
        
        
        output.appendChild(listItem);
        
    });
}
)
.catch(error=>(
    output.textContent = `Error coming : ${error}`
));

});

