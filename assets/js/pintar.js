// Ejercicio 4
let color = "#FAFAFA";
let box1 = document.getElementById("box-1");
let box2 = document.getElementById("box-2");
let box3 = document.getElementById("box-3");
let box4 = document.getElementById("box-4");

// Asignar color a las teclas A, S, D, F 
document.addEventListener("keydown",function (event){
    if(event.key === "a"){
        color = "red";
    }else if(event.key === "s"){
        color = "yellow";
    }else if(event.key === "d"){
        color = "blue";
    }else if(event.key === "f"){
        color = "purple";
    }else{
        color = "FAFAFA";
    }
});

// Asignar color a las cajas al hacer click
box1.addEventListener("click", function(){
    box1.style.backgroundColor = color;
});
box2.addEventListener("click", function(){
    box2.style.backgroundColor = color;
});
box3.addEventListener("click", function(){
    box3.style.backgroundColor = color;
});
box4.addEventListener("click", function(){
    box4.style.backgroundColor = color;
});
