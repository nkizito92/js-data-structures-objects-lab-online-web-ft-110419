// Write your solution in this file!


const driver = {
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
const updateDriver = updateDriverWithKeyAndValue(driver, 'engine', 'Standard');
updateDriver

function destructivelyUpdateDriverWithKeyAndValue(oldDriver, newDriver) {
  return Object.assign({}, oldDriver, newDriver);
}

function deleteFromDriverByKey(driver, key) {
  return Object.assign({}, oldDriver, newDriver);
}
function destructivelyeDeleteFromDriverByKey(driver, key) {
  return Object.assign({}, oldDriver, newDriver);
}
