let list=document.querySelector(".list ")
let listCard=document.querySelector(".listCard")
 let cartData=document.querySelector(".card")
let totle=document.querySelector(".totle")
// let badge=document.querySelector("badge")
const body=document.querySelector("body")
let closeShopping=document.querySelector(".closeShopping")
let openShopping=document.querySelector(".shopping")

// openShopping.addEventListener("click",()=>{
//     body.classList.add("active")
//     })

// closeShopping.addEventListener("click",()=>{
// body.classList.remove("active")
// })

    
    
// let products;
let prodects=[
    {
        id:1,
        title:"title prodect",
        imageUrl:     " css/images/photo_2024-02-11_13-57-07.jpg "    ,
        price:"150EP"
    }
    ,
    {
        id:2,
        title:"title prodect",
        imageUrl:      "css/images/photo_2024-02-11_14-22-44.jpg "      ,
        price:"150EP"
    }
    ,
    {
        id:3,
        title:"title prodect",
        imageUrl:      "css/images/photo_2024-02-11_14-22-50.jpg "      ,
        price:"150EP"
    }
    ,
    
   {
    
    id:4,
    title:"title prodect",
    imageUrl: "css/images/photo_2024-02-11_14-22-55.jpg ",
    price:"150EP"
   }
   ,
   {
    
    id:5,
    title:"title prodect",
    imageUrl: "css/images/photo_2024-02-11_14-23-12.jpg ",
    price:"150EP"
   }
]
let listCards=[];
let initApp=()=>{
    prodects.forEach((value)=>{
        let newDiv=document.createElement("div")
        newDiv.classList.add("item")
        newDiv.innerHTML=`
        <img src="${value.imageUrl}">
        <div class="title">${value. title}</div> 
        <div class=" price">${value.price}</div> 
       <button onClick="addTocard(${value.id})">AddToCard</button>
       <i class="far fa-heart  fav"></i>



       `
       list.appendChild(newDiv)
    })
}
initApp();
// let  addTocard=(key)=>{
//     if(listCards[key]==null){
//         listCards[key]=JSON.parse(JSON.stringify(prodects[key]))
//         listCards[key].badge=1
//     }
 
// }
// addTocard()
let badge=document.querySelector(".badge")
                     
let cartProdectsDiv=document.querySelector(".shopping_prodects div ");


let  addedItem=localStorage.getItem(" prodectInCart")?JSON.parse(localStorage.getItem("prodectInCart ")):[];
if(addedItem){
    addedItem.map( item => {
        cartProdectsDiv.innerHTML+= `<p>${item. title}</p>` ;  
    })
   
badge.style.display=="block";
    badge.innerHTML =addedItem.length;


}

 function addTocard(id){
let=choosenItem=prodects.find((item)=>item.id===id)
//   console.log( choosenProdects)
   cartProdectsDiv.innerHTML+= `<p>${choosenItem.title}</p>`;
   addedItem=[...addedItem , choosenItem ];
  
  localStorage.setItem ("prodectInCart", JSON.stringify(addedItem));
   let cartProdectLength=document.querySelectorAll(".shopping_prodects div P ");
   badge.style.display =="block";
 badge.innerHTML =cartProdectLength.length;
}
let shoppingCartIcon=document.querySelector(".shopping_cart");
let cartProdects=document.querySelector(".shopping_prodects");

shoppingCartIcon.addEventListener('click', openCart);
function openCart(){
    if(cartProdectsDiv.innerHTML !=""){
       if(cartProdects.style.display="block"){
        cartProdects.style.display =="none"
        
       }
       else{
        cartProdects.style.display ="block"
    }
        }   
     } 
    

    //  function getItem(){
    //     choosenProdects.push(choosenItem=prodects.find((item)=>item.id===id))
    //     console.log(choosenProdects)
    //     addItemsToDom()
    //  }
// function addItemsToDom(){

//     prodects.forEach((ele)=>{
//     let newDiv=document.createElement("div")
//     newDiv.classList.add("choosenProdects")
//     newDiv.innerHTML=`
//     <img src="${ele.imageUrl}">
//     <div class="title">${ele. title}</div> 
//     <div class=" price">${ele.price}</div>
//     <button  class="addToCart" onClick="addToCart(${ele.id})">AddToCarts</button>
//     <i class="far fa-heart  fav"></i>


//    `
//    cartData.appendChild(newDiv)
// })}
// addItemsToDom();