let links=document.querySelector("#link")
let userData=document.querySelector("#user")
if(localStorage.getItem("username")){
    links.remove();
    user_info.style.display="flex"
    userData.innerHTML=localStorage.getItem("username")
 
}
let logOutBtn=document.querySelector("#logout");
function code1 (){
    localStorage.clear();
   setTimeout(() => {
       window.location="login.html"
   }, 1500);
}
logOutBtn.addEventListener("click",code1)
