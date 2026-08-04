const list =  document.querySelector("#list")

function wax_cusub() {
    const ardey_Cusub = document.createElement("li")

    ardey_Cusub.textContent = "yuusuf"
    list.appendChild( ardey_Cusub)
 
}

function ka_masax() {
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
else{
    alert("fadlan xog cusub soo xaree mahadsanid")
}
}