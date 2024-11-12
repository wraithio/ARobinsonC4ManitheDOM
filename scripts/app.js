let foxPTS = document.getElementById("foxPTS");
let foxREB = document.getElementById("foxREB");
let foxAST = document.getElementById("foxAST");

let ellisPTS = document.getElementById("ellisPTS");
let ellisREB = document.getElementById("ellisREB");
let ellisAST = document.getElementById("ellisAST");

let rozPTS = document.getElementById("rozPTS");
let rozREB = document.getElementById("rozREB");
let rozAST = document.getElementById("rozAST");

let murrPTS = document.getElementById("murrPTS");
let murrREB = document.getElementById("murrREB");
let murrAST = document.getElementById("murrAST");

let domPTS = document.getElementById("domPTS");
let domREB = document.getElementById("domREB");
let domAST = document.getElementById("domAST");

let body = document.getElementById("bodyClass");
let beamBTN = document.getElementById("beamBTN");


foxPTS.addEventListener("click", function(){
    foxPTS.innerText = "Fox averages 24.2 points per game."
})
foxREB.addEventListener("click", function(){
    foxREB.innerText = "Fox averages 5.3 rebounds per game."
})
foxAST.addEventListener("click", function(){
    foxAST.innerText = "Fox averages 4.7 assists per game."
})



ellisPTS.addEventListener("click", function(){
    ellisPTS.innerText = "Ellis averages 5.7 points per game."
})

ellisREB.addEventListener("click", function(){
    ellisREB.innerText = "Ellis averages 1.8 rebounds per game."
})
ellisAST.addEventListener("click", function(){
    ellisAST.innerText = "Ellis averages 0.9 assists per game."
})


rozPTS.addEventListener("click", function(){
    rozPTS.innerText = "Derozan averages 24.8 points per game."
})

rozREB.addEventListener("click", function(){
    rozREB.innerText = "Derozan averages 4.0 rebounds per game."
})
rozAST.addEventListener("click", function(){
    rozAST.innerText = "Derozan averages 4.2 assists per game."
})


murrPTS.addEventListener("click", function(){
    murrPTS.innerText = "Murray averages 13.5 points per game."
})

murrREB.addEventListener("click", function(){
    murrREB.innerText = "Murray averages 8.5 rebounds per game."
})
murrAST.addEventListener("click", function(){
    murrAST.innerText = "Murray averages 1.7 assists per game."
})


domPTS.addEventListener("click", function(){
    domPTS.innerText = "Sabonis averages 20.7 points per game."
})

domREB.addEventListener("click", function(){
    domREB.innerText = "Sabonis averages 12.8 rebounds per game."
})
domAST.addEventListener("click", function(){
    domAST.innerText = "Sabonis averages 6.6 assists per game."
})

beamBTN.addEventListener("click", function(){
    bodyClass.className = "LTBimg " + "shake"; 
    
})
