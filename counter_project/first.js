
var count = 0;

document.getElementById("increment").onclick = function(){
    count +=1;
    document.getElementById("value").textContent = count;
    console.log(count)
}

document.getElementById("decrement").onclick = function(){
    count -=1;
    document.getElementById("value").textContent = count;
    console.log(count)
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("value").textContent = count;
}