
var inventory = [];


function addToInventory(item) {
  inventory.push(item);
  console.log(item + " wurde dem Inventar hinzugefügt.");
}


function removeFromInventory(item) {
  var index = inventory.indexOf(item);
  if (index > -1) {
    inventory.splice(index, 1);
    console.log(item + " wurde aus dem Inventar entfernt.");
  } else {
    console.log(item + " konnte nicht gefunden werden.");
  }
}


function checkInventory(item) {
  if (inventory.indexOf(item) > -1) {
    console.log(item + " ist im Inventar.");
    return true;
  } else {
    console.log(item + " ist nicht im Inventar.");
    return false;
  }
}