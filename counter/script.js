let value = 0;
let count = document.getElementById("count") ;

let btni = document.getElementById("btn-ii");
let btnr = document.getElementById("btn-re");
let btnd = document.getElementById("btn-di");

btni.addEventListener('click',()=>{
    value++;
    count.textContent = value ;
});

btnd.addEventListener('click',()=>{
    value--;
    count.textContent = value;
});

btnr.addEventListener('click',()=>{
    value = 0;
    count.textContent = value;
});


