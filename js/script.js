/*  
    Inserisci un numero, se è pari stampa il numero, se è
    dispari stampa il numero successivo. 
*/
console.log('Snack 1:');
let printEs1 = function(){
    let numberEs1 = parseInt(document.getElementById("input-es1").value);
    let pari = numberEs1 % 2;
    if(pari == 0){
        document.getElementById("text-es1").innerHTML = "il numero inserito: " + numberEs1 + " &egrave; pari";
    }
    else{
        let displari = numberEs1++;
        document.getElementById("text-es1").innerHTML = "il numero inserito: " + displari + " &egrave; dispari quindi: " + numberEs1;
    }

    if(isNaN(numberEs1)){
        document.getElementById("text-es1").innerHTML = "inserire dei numeri!";
        btnEs1.classList.remove('btn-primary');
        btnEs1.classList.add('btn-danger');
    }
    else{
        btnEs1.classList.add('btn-primary');
        btnEs1.classList.remove('btn-danger');
    }
}

let btnEs1 = document.getElementById("btn-es1");
btnEs1.addEventListener("click", printEs1);
console.log('--------------------------');

/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole
generare una falsa lista di invitati con nome e cognome.
*/

console.log('Snack 2:');
const nomi = [];
const cognomi = [];
const lista = [];
let aggiungiNome = function(){
    let newName = document.getElementById("input-nome-es2").value;
    nomi.push(newName);
    for (let i = 0; i < nomi.length; i++) {
        console.log("nome " + i + ": " + nomi[i]);
      }      
}
let aggiungiCognome = function(){
    let newCognome = document.getElementById("input-cognome-es2").value;
    cognomi.push(newCognome);
    for (let i = 0; i < cognomi.length; i++) {
        console.log("cognome " + i + ": " + cognomi[i]);
    }
}
let generaLista = function(){
    let quantitaLista = parseInt(document.getElementById("input-lista-es2").value);
    console.log(quantitaLista)
    if(isNaN(quantitaLista)){
        document.getElementById("p-lista").innerHTML = "inserire dei numeri!";
        listaBtn.classList.remove('btn-primary');
        listaBtn.classList.add('btn-danger');
    }
    else{
        listaBtn.classList.add('btn-primary');
        listaBtn.classList.remove('btn-danger');
        document.getElementById("p-lista").innerHTML = " ";
    }
    // lunghezza array nomi 
    let nNomi = nomi.length;
    // lunghezza arrey cognomi 
    let nCognomi = cognomi.length;
    
    const div = document.getElementById("lista")
    // for per creare la lista 
    for (let i = 0; i < quantitaLista; i++) {
        // creo un numero casuale ogni volta che clica per l'arrey nomi
        let nRandomNomi = Math.floor(Math.random() * nNomi) + 1;
        // creo un numero casuale ogni volta che clica per l'arrey cognomi
        let nRandomCognomi = Math.floor(Math.random() * nCognomi) + 1;
        // inserisco per trovare il nome in modo casuale 
        let nome = nomi[nRandomNomi];
        // inserisco per trovare il cognome in modo casuale 
        let cognome = cognomi[nRandomCognomi];
        // creo nome lista sommando le 2 stringhe 
        let nomeLista = String(nome  + " " + cognome);

        let presente = false;
        for (let i = 0; i < lista.length; i++) {
            if(lista[i] != nomeLista){
                presente = true;
            }
        }
        if(presente == false){
            lista.push(nomeLista);
        }
        if(quantitaLista > lista.length){
            document.getElementById("p-lista").innerHTML = "non sono disponibili abbastanza nomi o cognomi per creare unas lista di " + quantitaLista + " persone";
        }
        for (let i = 0; i < lista.length; i++) {
            const text = document.createElement('span');

            // appendo contenuto span
            text.append(lista[i]);
    
            // appendo span a div
            div.append(text);
        }
    } 
}
const nomeBtn = document.getElementById("aggiungiNome");
nomeBtn.addEventListener("click", aggiungiNome);

const cognomeBtn = document.getElementById("aggiungiCognome");
cognomeBtn.addEventListener("click", aggiungiCognome);

const listaBtn = document.getElementById("generaLista-es2");
listaBtn.addEventListener("click", generaLista);

console.log('--------------------------');