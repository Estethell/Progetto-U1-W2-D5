/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

// for (let i = 0; i < pets.length; i++) {
//   console.log("Esercizio 1:", pets[i]);
// }

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// pets.sort();
// for (let i = 0; i < pets.length; i++) {
//   console.log("Esercizio 2:", pets[i]);
// }

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// pets.reverse();
// for (let i = 0; i < pets.length; i++) {
//   console.log("Esercizio 3:", pets[i]);
// }

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

// let pets2 = pets.slice(0, 1);
// let pets3 = pets.shift();
// let pets4 = pets.concat(pets3);

// console.log("esercizio 4:", pets4);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

// for (let i = 0; i < cars.length; i++) {
//   cars[i].licensePlate = true;
// }
// console.log("Esercizion 5:", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

// const newcar = { brand: "Fiat", model: "Panda", color: "red", trims: ["A", "B", "C"] };
// cars.push(newcar);

// for (let i = 0; i < cars.length; i++) {
//   delete cars[i].trims.pop();
// }

// console.log("Esercizio 6:", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

// for (let i = 0; i < cars.length; i++) {
//   let trims1 = cars[i].trims.slice(0, 1);
//   justTrims.push(trims1);
// }

// console.log("Esercizio 7:", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].color.charAt(0) === "b") {
//     console.log("Fizz");
//   } else {
//     console.log("Buzz");
//   }
// }

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let contatore = 0;
let i = 0;
while (contatore !== 32 && i < numericArray.length) {
  console.log("numero:", numericArray[i]);

  contatore = numericArray[i];
  i++;
}

console.log("Esercizio 9:", contatore);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const newCharactersArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      newCharactersArray.push(1);
      break;
    case "b":
      newCharactersArray.push(2);
      break;
    case "c":
      newCharactersArray.push(3);
      break;
    case "d":
      newCharactersArray.push(4);
      break;
    case "e":
      newCharactersArray.push(5);
      break;
    case "f":
      newCharactersArray.push(6);
      break;
    case "g":
      newCharactersArray.push(7);
      break;
    case "h":
      newCharactersArray.push(8);
      break;
    case "i":
      newCharactersArray.push(9);
      break;
    case "j":
      newCharactersArray.push(10);
      break;
    case "k":
      newCharactersArray.push(11);
      break;
    case "l":
      newCharactersArray.push(12);
      break;
    case "m":
      newCharactersArray.push(13);
      break;
    case "n":
      newCharactersArray.push(14);
      break;
    case "o":
      newCharactersArray.push(15);
      break;
    case "p":
      newCharactersArray.push(16);
      break;
    case "q":
      newCharactersArray.push(17);
      break;
    case "r":
      newCharactersArray.push(18);
      break;
    case "s":
      newCharactersArray.push(19);
      break;
    case "t":
      newCharactersArray.push(20);
      break;
    case "u":
      newCharactersArray.push(21);
      break;
    case "v":
      newCharactersArray.push(22);
      break;
    case "w":
      newCharactersArray.push(23);
      break;
    case "x":
      newCharactersArray.push(24);
      break;
    case "y":
      newCharactersArray.push(25);
      break;

    default:
      newCharactersArray.push(26);
  }
}

console.log("Esercizio 10:", newCharactersArray);
