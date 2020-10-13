//Richieste input all'utente
var chilometri = prompt('Inserisci distanza da percorrere in km: ');
var anni = prompt('Inserisci età: ');

//Inizializzo variabili per calcolare il risultato
var prezzo_per_chilometro = (chilometri / 0.21);
var sconto_minorenni = ((prezzo_per_chilometro * 20) / 100);
var sconto_over65 = ((prezzo_per_chilometro * 40) / 100);
var prezzo_finale;

//Sconto per i minorenni
if (anni < 19){
    prezzo_finale = (prezzo_per_chilometro - sconto_minorenni);
    document.getElementById('card1').innerHTML = ("Sconto del 20% !!!");
}

//Sconto per gli over 65
else if (anni >= 65){
    prezzo_finale = (prezzo_per_chilometro - sconto_over65);
    document.getElementById('card1').innerHTML = ("Sconto del 40% !!!");
}

//Prezzo non scontato
else{
    document.getElementById('card1').innerHTML = ("Non è previsto alcuno sconto.");
    prezzo_finale = prezzo_per_chilometro;
}

//Arotonda il risultato fino ai centesimi
var prezzo_finale_arrotondato = prezzo_finale.toFixed(2);

//stampa il risultato nella card
document.getElementById('card2').innerHTML = ("Il biglietto costa:  ") + prezzo_finale_arrotondato + (" Euro");
