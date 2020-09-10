const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Create an app where you generate random hex color

const btn =  document.getElementById("btn"); 
const color =  document.querySelector(".color");
const colorText =  document.getElementById("colorText")
console.log(colorText)
btn.addEventListener("click", function(){
    let hexValue =  "#"; 
    for(let i = 0; i<6 ;i++){
        hexValue += hex[getRandomNum()]
    }
    document.body.style.backgroundColor =  hexValue;
    color.textContent= hexValue; 
    colorText.style.color =  hexValue;
})
// Function to generate a random number. 

function getRandomNum(){
    return Math.floor(Math.random()* hex.length)

}

