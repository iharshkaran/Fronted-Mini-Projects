let box = document.querySelector(".box");
// box.addEventListener("mouseover",function(dts){
//     box.style.backgroundColor = "yellow";
// })

// box.addEventListener("mouseout",function(dts){
//     box.style.backgroundColor = "red";
// })
window.addEventListener("mousemove",function(dts){
    box.style.top = dts.clientY + "px";
    box.style.left= dts.clientX + "px";
});