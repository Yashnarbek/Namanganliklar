let elTurnOn = document.querySelector(".turn-on")
let elModalBox = document.querySelector(".modal-box")
let elOpen = document.querySelector(".open")
let elBody = document.querySelector("body")
let elModalWindow = document.querySelector(".modal-window")
let elClose = document.querySelector(".remove")

elOpen.addEventListener("click", function(evt){
    evt.preventDefault()
    elModalBox.classList.add("js-modal")
    elBody.classList.add("owerflow")
})
elClose.addEventListener("click", function(evt){
    evt.preventDefault()
    elModalBox.classList.remove("js-modal")
    elBody.classList.remove("owerflow")
})