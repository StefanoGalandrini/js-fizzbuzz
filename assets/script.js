/*
	FIZZBUZZ PSEUDOCODE

	Prepara una variabile fizzBuzz in cui inserire il testo da visualizzare:

	Esegui un ciclo da 1 a 100:
	FOR (i=1; i<=100; i++)

		fizzBuzz = ""
		IF resto(i/3) = 0 allora fizzBuzz = "Fizz"
		IF resto(i/5) = 0 allora fizzBuzz = fizzBuzz + "Buzz"

		scrivi fizzBuzz
*/

/*	cicli IF nidificati:
	TODO semplificare codice

for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("fizzbuzz");
	} else if (i % 3 === 0) {
		console.log("fizz");
	} else if (i % 5 === 0) {
		console.log("buzz");
	} else {
		console.log(i);
	}
}
*/

// Global variables
let fizzBuzz = "";
let typeOfClass = "";
const square = document.querySelector("main");

// Loop from 1 to 100 included
for (let i = 1; i <= 100; i++) {
	// declare target element variable
	let nextDiv = document.createElement("div");

	// conditions to create inner text
	if (i % 3 === 0) {
		fizzBuzz = "Fizz";
		typeOfClass = "fizz";
	}
	if (i % 5 === 0) {
		fizzBuzz = fizzBuzz + "Buzz";
		typeOfClass = typeOfClass + "buzz";
	}
	if (fizzBuzz === "") {
		nextDiv.innerHTML = i.toString();
		nextDiv.classList.add("all", "normal");
		// console.log(i);
	} else {
		nextDiv.innerHTML = fizzBuzz;
		nextDiv.classList.add("all", typeOfClass);
		// console.log(fizzBuzz, typeOfClass);
	}

	// Create new <div>
	square.appendChild(nextDiv);

	// Reset variables
	fizzBuzz = "";
	typeOfClass = "";
}
