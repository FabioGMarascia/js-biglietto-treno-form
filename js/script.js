const my_button = document.getElementById("my-button");
const my_button_2 = document.getElementById("my-button-2");

my_button.addEventListener("click", function () {
	const name_surname = document.getElementById("name").value;
	const km = document.getElementById("km").value;
	const age = document.getElementById("age").value;
	const base_price = km * 0.21;
	let discounted_price = base_price;
	let rounded_price;

	if (age < 18) {
		discounted_price = base_price * 0.8;
	} else if (age > 65) {
		discounted_price = base_price * 0.6;
	}

	rounded_price = discounted_price.toFixed(2);

	document.getElementById("passenger-name-surname").innerHTML = name_surname;

	document.getElementById("passenger-ticket-type").innerHTML = "Biglietto standard";

	document.getElementById("passenger-ticket-cost").innerHTML = `${rounded_price}€`;

	document.getElementById("name").value = "";
	document.getElementById("km").value = "";
	document.getElementById("age").value = "";
});

my_button_2.addEventListener("click", function () {
	alert("Annullamento del biglietto");
	window.location.reload();
});
