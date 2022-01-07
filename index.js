let mensajeMultiplo3 = "Fizz";
let mensajeMultiplo5 = "Buzz";
let multiplo3 = false;
let multiplo5 = false;

for (let index = 1; index <= 100; index++) {
    multiplo5 = index%5 === 0;
    multiplo3 = index%3 === 0;

    if (multiplo3 && multiplo5) {
        console.log(mensajeMultiplo3 + mensajeMultiplo5)
    } else if (multiplo3) {
        console.log(mensajeMultiplo3);
    } else if (multiplo5) {
        console.log(mensajeMultiplo5);
    } else {
        console.log(index);
    }
}