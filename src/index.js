const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?


const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const cell = document.getElementById("cell");
const phone = document.getElementById("phone");
const dob = document.getElementById("date_of_birth");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postCode = document.getElementById("postcode");

function parse(data) {
	console.log(data);
	
	const first_name = data["name"]["first"];
	const last_name = data["name"]["last"];
	fullName.innerHTML = first_name+" "+last_name
	
	email.innerHTML = data["email"];
	cell.innerHTML = data["cell"];
	phone.innerHTML = data["phone"];

	dob.innerHTML = data["dob"]["date"].split("T")[0];

	street.innerHTML = data["location"]["street"];
	city.innerHTML = data["location"]["city"];
	state.innerHTML = data["location"]["state"];
	postCode.innerHTML = data["location"]["postcode"];

}

function fetchData() {
	let data = fetch("https://randomuser.me/api/")
		.then (res => res.json())
		.then (parsed => parsed["results"][0])
		.then (parse)
}

const button = document.getElementsByClassName("btn btn-primary")[0]

button.addEventListener("click", () => fetchData());

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
