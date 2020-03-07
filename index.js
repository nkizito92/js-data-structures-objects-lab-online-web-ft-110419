// Write your solution in this file!


const drvier = {
  name: "Kizito",
  vehicle: "Honda",
  type: "2door"
};

const newdriver = {
   name: "Godswill",
  vehicle: "Nissan",
  type: "4door"
}

function updateDriverWithKeyAndValue(oldDriver, newDriver) {
  return Object.assign({}, oldDriver, newDriver);
}

updateDriverWithKeyAndValue(drvier, newDriver)