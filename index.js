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

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}