let increase=document.getElementById("increase");
let reset=document.getElementById("reset");
let decrease=document.getElementById("decrease");
let value = document.getElementsByTagName("h1")[0];
let num = 0;
increase.onclick = ()=>{
       num+=1;
       value.textContent=`${num}`;
}
reset.onclick = ()=>{
    num=0;
    value.textContent=`${num}`;
}
decrease.onclick = ()=>{
    num-=1;
    value.textContent=`${num}`;
}