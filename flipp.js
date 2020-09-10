const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//First we target the elements we want to work with 


const btn  =  document.getElementById("btn");
const colorValue =  document.querySelector(".color-value"); 
const colorText =  document.getElementById("text-color"); 



btn.addEventListener("click", function(){
    // Create a random number. 
    const randomNum =  Math.floor(Math.random()*colors.length); 
    // Assign  the random number to the style of the background. 
    document.body.style.backgroundColor =  colors[randomNum]; 
    colorValue.textContent = colors[randomNum];
    colorText.style.color =  colors[randomNum]; 

})
