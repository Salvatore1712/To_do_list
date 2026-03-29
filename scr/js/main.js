// selezione degli elementi
let inputText = document.querySelector(".main__input"); //input campo
const btnAdd = document.querySelector("#addBtn"); //bottone aggiungi
let listaUl = document.querySelector(".attivita__lista"); //lista UL




// funzione aggiungi
btnAdd.addEventListener("click", ()=> {
    
    //creazione bottone elimina
    const btnRemove = document.createElement("button");
    btnRemove.textContent = "ELIMINA";
    btnRemove.classList = "main__btn";

    let spanTag = document.createElement("span");
    spanTag.textContent = inputText.value.trim(); //cattura il testo in input
    
    //creazione elemento li
    let listaItem = document.createElement("li");
    listaItem.classList = "attivita__items";

    
    
    listaUl.appendChild(listaItem);
    listaItem.append(spanTag);
    listaItem.append(btnRemove);
    

    inputText.value = ""; //azzera il campo  
})

// funzione rimuovi attività
listaUl.addEventListener("click", (event)=> {
    let elCliccato = event.target;
    if (elCliccato.tagName === "SPAN") {
        const parenLi = elCliccato.parentElement;
        parenLi.classList.toggle("barrato");
    } else if (elCliccato.tagName === "BUTTON") {
        const parenLi = elCliccato.parentElement;
        parenLi.remove(parenLi)
    }
})