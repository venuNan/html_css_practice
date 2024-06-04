

document.getElementById("generate").onclick = function(){
    let first = document.getElementById("first").value
    let second = document.getElementById("second").value
    first = Number(first)
    second = Number(second)
    if(first<second){
        let random = Math.round(Math.random()*(second-first)+first);
        document.getElementById("random_num").textContent=random
    }
    else{
        document.getElementById("error").textContent="starting number needs to be graeter than ending number";
    }
}