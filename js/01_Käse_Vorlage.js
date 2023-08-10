// Initiieren des Inventars
var inventory = [];

// Funktion zum Hinzufügen von Gegenständen zum Inventar
function addToInventory(item) {
  inventory.push(item);
  console.log(item + " wurde dem Inventar hinzugefügt.");
}

// Funktion zum Entfernen von Gegenständen aus dem Inventar
function removeFromInventory(item) {
  var index = inventory.indexOf(item);
  if (index > -1) {
    inventory.splice(index, 1);
    console.log(item + " wurde aus dem Inventar entfernt.");
  } else {
    console.log(item + " konnte nicht gefunden werden.");
  }
}

// Funktion zum Überprüfen, ob ein Gegenstand im Inventar ist
function checkInventory(item) {
  if (inventory.indexOf(item) > -1) {
    console.log(item + " ist im Inventar.");
    return true;
  } else {
    console.log(item + " ist nicht im Inventar.");
    return false;
  }
}