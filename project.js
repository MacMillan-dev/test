function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }else
    alert("You have entered an invalid email address!")
    return (false)
}
var x=document.getElementById("Login");
var y=document.getElementById("Register");
var z=document.getElementById("btn");

function Register(){
  x.style.left="-400px"
  y.style.left="50px"
  z.style.left="110px"
}
function Login(){
  x.style.left="50px"
  y.style.left="450px"
  z.style.left="0"
}

const nav1=document.querySelector(".nav1");
window.addEventListener("scroll",showNav);
function showNav(){
  if(scrollY > 50 ){
    nav1.classList.add("newNav");
  }else{
    nav1.classList.remove("newNav");

  }
}