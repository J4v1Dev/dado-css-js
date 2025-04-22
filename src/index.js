
const dado = document.querySelector("button");

dado.addEventListener("click", function(){
    const number = 1 + Math.floor(Math.random() * 6);
    dado.textContent = number;
});