let prodectInCart= JSON.parse(localStorage.getItem("prodectInCart "))
if(prodectInCart){
    reloadCard(item)
}
let reloadCard=()=>{
    listCards.forEach((value)=>{
            let newDiv=document.createElement("li");
            newDiv.classList.add("item")
            newDiv.innerHTML=`
            <img src="${value.imageUrl}">
            <div class="title">${value. title}</div> 
            <div class=" price">${value.price}</div> 
           
            `
            list.appendChild(newDiv)
        
      
        
    })
}