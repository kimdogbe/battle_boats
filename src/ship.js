export function createShip(shipLength) {
  const length = shipLength;
  let hitCount = 0;
  let sunk = false;
  let location = [];

  function addLocation(row, col){
    location.push('' + row + col);
  }

  function getLocation(){
    return location;
  }

  const checkShipSunk = function() {
    if (hitCount === length) {
      sunk = true;
    }
  }
  
  const hitShip = function () {
    if (!sunk) {
      hitCount++;
      checkShipSunk();
    }
  }

  const getHitCount = () => hitCount;

  return { length, hitShip, getHitCount, addLocation, getLocation }
}