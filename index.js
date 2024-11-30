let countEl =document.getElementById("count-el") 
let saveEl = document.getElementById('save-el')

let count =countEl.textContent

function increment(){
    count ++
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
}