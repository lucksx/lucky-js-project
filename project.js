let input = document.getElementById('input')
let button = document.getElementById('btn')
let errMsg = document.getElementById("err")


button.onclick = function(){
    if (input.value === ''){
        let error = errMsg.innerHTML = "Error!!!! please input a value"
        // setTimeout(() => error.remove(), 3000)
    }
}