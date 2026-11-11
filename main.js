const focimElem=document.getElementById("focim")
focimElem.textContent="Mátrix rendszer";

const statuszElemek=document.getElementsByClassName("statusz-szoveg")

console.log(statuszElemek.length);

statuszElemek[0].textContent="Rendszer ellenőrzése folyamatban...";
statuszElemek[1].textContent="Kapcsolódás a hálózathoz...";

const listaElemek=document.querySelectorAll(".lista-elem")

console.log(listaElemek[0])

listaElemek[1].textContent="Szerver állapot: ONLINE";
console.log(listaElemek)

const nevInput=document.querySelector("#jatekos-nev-input")

const inditoGomb=document.querySelector("#indito-gomb")

const eredmenyDiv=document.getElementById("eredmeny")

inditoGomb.addEventListener("click", indito)
function indito(){
    const gombFelirat=inditoGomb.textContent
    const jatekosNevElem=document.nevInput.value


    eredmenyDiv.insertAdjacentHTML("beforeend",`<span>${jatekosnev}, ${gombFelirat}</span>`)
    eredmenyDiv.textContent=`${jatekosnev}, ${gombFelirat}`
}

