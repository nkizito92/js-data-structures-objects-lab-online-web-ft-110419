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

function destructivelyUpdateDriverWithKeyAndValue(oldDriver, newDriver) {
  return Object.assign({}, oldDriver, newDriver);
}

function deleteFromDriverByKey(driver, key) {
  return Object.assign({}, oldDriver, newDriver);
}
