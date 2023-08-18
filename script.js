function rand (min, max){
    const valor = Math.random()* (max - min + 1) + min
    return Math.floor(valor)
}

function draw (){
    const min = Number(document.getElementById("min").value)
    const max = Number(document.getElementById("max").value)

    if (min > max) {
        alert("The number max need to be higher than min");
    }else{
        document.getElementById("number").innerHTML = (rand(min,max))
    }
}