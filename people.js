// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri.
// La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
// All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. **

const completeName = require("./names.js");
const hobbies = require("./hobbies.js");

function mergeObj() {
  const { firstName, lastName } = completeName("Rosy", "Petrella");
  const [hobbyOne, hobbyTwo, hobbyThree] = hobbies("PS", "Dnd", "Books");

  return {
    fullName: { firstName, lastName },
    hobbies: [hobbyOne, hobbyTwo, hobbyThree],
  };
}

console.log(mergeObj());
