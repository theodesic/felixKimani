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
