//Il programma dovrà chiedere all’utente il
//numero di chilometri che vuole
//percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà
//calcolare il prezzo totale del viaggio.
//Il prezzo del biglietto è definito in base ai
//km (0.21 € al km), ma va applicato uno
//sconto del 20% per i minorenni e del
//40% per gli over 65.




//Richieste input all'utente
var chilometri = prompt('Inserisci distanza da percorrere in km: ');
var anni = prompt('Inserisci età: ');

//Inizializzo variabili per calcolare il risultato
var prezzo_per_chilometri = (chilometri * 0.21);
var sconto_minorenni = ((prezzo_per_chilometri * 20) / 100);
var sconto_over65 = ((prezzo_per_chilometri * 40) / 100);
var prezzo_finale;

//Sconto per i minorenni
if (anni < 18){
    prezzo_finale = (prezzo_per_chilometri - sconto_minorenni);
    document.getElementById('card1').innerHTML = ("Sconto del 20% !!!");
}

//Sconto per gli over 65
else if (anni >= 65){
    prezzo_finale = (prezzo_per_chilometri - sconto_over65);
    document.getElementById('card1').innerHTML = ("Sconto del 40% !!!");
}

//Prezzo non scontato
else{
    document.getElementById('card1').innerHTML = ("Non è previsto alcuno sconto.");
    prezzo_finale = prezzo_per_chilometri;
}

//Arotonda il risultato fino ai centesimi
var prezzo_finale_arrotondato = prezzo_finale.toFixed(2);

//stampa il risultato nella card
document.getElementById('card2').innerHTML = ("Il biglietto costa:  ") + prezzo_finale_arrotondato + (" Euro");
