const input = document.getElementById("input")
const enterBtn = document.getElementById("enterBtn")
let list = []

enterBtn.addEventListener("click", function(){
    list.push(input.value)
    localStorage.setItem("list", JSON.stringify(list))
})