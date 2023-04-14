const input = document.getElementById("input")
const enterBtn = document.getElementById("enterBtn")
const listEl = document.getElementById("list")
let list = []
const ListFromLS = JSON.parse(localStorage.getItem("list"))

if (ListFromLS){
    list = ListFromLS
    renderList()
}



enterBtn.addEventListener("click", function(){
    list.push(input.value)
    localStorage.setItem("list", JSON.stringify(list))
    input.value = ""
    renderList()
})

function renderList (){

    listEl.innerHTML = ``

    for (let i = 0; i < list.length; i++){
        listEl.innerHTML += 
            `
            <li>
                <div id="listItem" >
                    ${i + 1}. ${list[i]}
                    <button class="my-button" onmouseover="this.querySelector('i').style.color = 'red';" 
                        onmouseout="this.querySelector('i').style.color = '#707070';" style="border: none; background-color: transparent;">
                            <i class="fa-solid fa-trash" style="color: #707070; transition: color 0.3s;"></i>   
                    </button>



                </div>
            </li>
            `
    }


    

}