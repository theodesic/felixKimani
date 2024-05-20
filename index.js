//  window.addEventListener("scroll", function(){
//   let navholder = document.querySelector("navholder");
//   navholder.classList.toggle("sticky", window.scrollY > 0);
//  }) 
  // document.addEventListener("scroll", () => {
  //   const navholder = document.querySelector("navholder");


  //   if (window.scrollY > 0) {
  //     navholder.classList.add("scrolled");

  //   } else {
  //     navholder.classList.remove("scrolled");
  //   }
  // })
  
  //login
document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup-a").style.display = "flex";
}) 
   //on click hide the body
document.getElementById("button").addEventListener("click", function(){
  document.querySelector(".main").style.display = "none";
}) 
  //signup
document.getElementById("snp").addEventListener("click", function(){
  document.querySelector(".popup-b").style.display = "flex";
}) 
document.getElementById("snp").addEventListener("click", function(){
  document.querySelector(".main").style.display = "none";
}) 

      //officials popup
document.getElementById("Official").addEventListener("click", function(){
  document.querySelector(".main2").style.display = "block";
})
document.getElementById("Official").addEventListener("click", function(){
  document.querySelector(".main1").style.display = "none";
})
document.getElementById("back").addEventListener("click", function(){
  document.querySelector(".main2").style.display = "none";
})
document.getElementById("back").addEventListener("click", function(){
  document.querySelector(".main1").style.display = "block";
})

        //sports popup
document.getElementById("sports").addEventListener("click", function(){
  document.querySelector(".main3").style.display = "block";
})
document.getElementById("sports").addEventListener("click", function(){
  document.querySelector(".main1").style.display = "none";
})
document.getElementById("back-a").addEventListener("click", function(){
  document.querySelector(".main3").style.display = "none";
})
document.getElementById("back-a").addEventListener("click", function(){
  document.querySelector(".main1").style.display = "block";
})
        //casuals popup
document.getElementById("casuals").addEventListener("click", function(){
  document.querySelector(".main4").style.display = "block";
})
document.getElementById("casuals").addEventListener("click", function(){
  document.querySelector(".main1").style.display = "none";
})
document.getElementById("back-b").addEventListener("click", function(){
  document.querySelector(".main4").style.display = "none";
})
document.getElementById("back-b").addEventListener("click", function(){
  document.querySelector(".main1").style.display = "block";
})



let close = document.getElementById("close");

close.addEventListener("click", function(){
  document.querySelector(".main").style.display = "block";
})


//form validation

let form = document.getElementById("registration");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submit = document.getElementById("submit");


let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");


let emailCheck = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm


form.addEventListener("submit", (e)=>{
    // if (username.value === "" || username.value === null){
    //     e.preventDefault();
    //     usernameError.innerHTML = "username required";
    // }
    if (email.value === "" || email.value === null){
        e.preventDefault();
        emailError.innerHTML = "email required";
    }else if(!email.value.match(emailCheck)){
        e.preventDefault();
        emailError.innerHTML = "invalid email address";
    }
    if (password.value === "" || password.value === null){
        e.preventDefault();
        passwordError.innerHTML = "password required";
    }else if(password.value.length <=5){
        e.preventDefault();
        passwordError.innerHTML = "password must be more than 6 caracters";
    }else if(password.value.length >20){
        e.preventDefault();
        passwordError.innerHTML = "passwprd must be less than 20 characters";
    }else if(password.value !== confirmPassword.value){
        confirmPasswordError.innerHTML = "password do not match"
    }
})

/*form.addEventListener("mouseover", function(event){
    event.target.style.background = "green";
    event.target.style.color = "bisque";
    event.target.style.transition = "3s";
})*/

form.addEventListener("mouseout", function(event){
    event.target.style.transition = "2s";
})



navholder = document.getElementById("navholder") ;
window.onscroll 
