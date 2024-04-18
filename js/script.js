const km = prompt("Numero chilometri da percorrere");
const anni = prompt("Età del passeggero");
const prezzo_base = km * 0.21;
let prezzo_scontato = prezzo_base;
let prezzo_arrotondato;

if (anni < 18) {
	prezzo_scontato = prezzo_base * 0.8;
} else if (anni > 65) {
	prezzo_scontato = prezzo_base * 0.6;
}

prezzo_arrotondato = prezzo_scontato.toFixed(2);
console.log(prezzo_arrotondato);

document.getElementById(
	"prezzo-biglietto"
).innerHTML = `Il prezzo del biglietto è: ${prezzo_arrotondato}€`;
