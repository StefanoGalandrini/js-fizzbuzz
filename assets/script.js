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

let fizzBuzz = "";

for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0) {
		fizzBuzz = "Fizz";
	}
	if (i % 5 === 0) {
		fizzBuzz = fizzBuzz + "Buzz";
	}
	if (fizzBuzz === "") {
		console.log(i);
	} else {
		console.log(fizzBuzz);
		fizzBuzz = "";
	}
}
