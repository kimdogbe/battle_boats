export function createShip(shipLength) {
  const length = shipLength;
  let hitCount = 0;
  let sunk = false;

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

  return { length, hitShip, getHitCount }
}