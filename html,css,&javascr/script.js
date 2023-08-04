let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let Namefield = document.getElementById("NameField");
let title = document.getElementById("title");

signinbtn.onclick=function(){
    Namefield.style.maxHeight="0";
    title.innerHTML = "Sign In ";
    signupbtn.classList.add("disable");
   signinbtn.classList.remove("disable")
}
signupbtn.onclick=function(){
    Namefield.style.maxHeight="60px";
    title.innerHTML = "Sign Up ";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable")
}