/*  
    Inserisci un numero, se è pari stampa il numero, se è
    dispari stampa il numero successivo. 
*/
let printes1 = function(){
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
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-danger');
    }
    else{
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-danger');
    }
}

let btnEs1 = document.getElementById("btn-es1");
btnEs1.addEventListener('click', printes1);
