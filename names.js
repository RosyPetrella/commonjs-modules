// Crea una funzione che accetta due parametri: firstName, lastName.
// La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
//Esporta la funzione dal file.

function completeName(firstName, lastName) {
  let fullName = { firstName, lastName };
  return fullName;
}

module.exports = completeName;
