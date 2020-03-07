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


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}

destructivelyUpdateDriverWithKeyAndValue(driver, "transmition", "Automadic")

function deleteFromDriverByKey(obj, key) {
  const newPerson  = delete obj.key;
  return newPerson
}

deleteFromDriverByKey(driver, "transmition")


function destructivelyeDeleteFromDriverByKey(driver, key) {
  return Object.assign({}, oldDriver, newDriver);
}
