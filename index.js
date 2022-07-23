const Fahrenheit = document.getElementById("Fahrenheit");
const Celsius = document.getElementById("Celsius");
const converted_temp =document.getElementById("converted-temp");
const input = document.querySelector("input");
let temp;

Fahrenheit.onclick = ()=>{
    converted_temp.textContent = input.value;
}

Celsius.onclick = ()=>{

}