
    let forma =document.forms["forma"];

forma.addEventListener("submit", function(e){
    e.preventDefault();
    let inputTop = document.getElementById("text-up");
    let inputBot = document.getElementById("text-bot");
    let img =document.getElementById("img");
   inputTop.innerHTML=forma["virsutinis"].value;
inputBot.innerHTML=forma["apatinis"].value;
img.setAttribute("src", forma["url"].value);
});


