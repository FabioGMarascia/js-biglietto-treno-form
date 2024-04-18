const km = document.getElementById("km").value;
const anni = document.getElementById("age").value;
const my_button = document.getElementById("my-button");
const base_price = km * 0.21;
let discounted_price = base_price;
let rounded_price;

if (anni < 18) {
	discounted_price = base_price * 0.8;
} else if (anni > 65) {
	discounted_price = base_price * 0.6;
}

rounded_price = discounted_price.toFixed(2);

my_button.addEventListener("click", function () {
	console.log(rounded_price);
});
