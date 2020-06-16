let food = 0
let autoFood = 0
let eating = {
  "eat": 1
}

let clickUpGrades = {
  dots: {
    name: "Dots",
    price: 2,
    quantity: 0,
    multiplier: 1,
  },
  skittles: {
    name: "Skittles",
    price: 2,
    quantity: 0,
    multiplier: 2,
  }
}
let autoUpgrades = {
  iceCream: {
    name: "Ice Cream",
    price: 2,
    quantity: 0,
    multiplier: 10
  },
  cottonCandy: {
    name: "Cotton Candy",
    price: 2,
    quantity: 0,
    multiplier: 20
  }
}

let collectAutoUpgrades = {}

//NOTE Business Logic

function feed(playerChoice) {
  let feeding = eating[playerChoice]
  food += feeding
  console.log(food);
  calcSingleUpgrade()
  // @ts-ignore
  document.getElementById("food-count").innerText = food
}



// #region SECTION Purchases

function purchaseSingleUpgrades(upgradeChoice) {
  let purchSing = clickUpGrades[upgradeChoice]
  let buySing = purchSing + clickUpGrades[upgradeChoice].quantity
  if (food >= clickUpGrades[upgradeChoice].price) {
    clickUpGrades[upgradeChoice].quantity++
    food -= clickUpGrades[upgradeChoice].price
    clickUpGrades[upgradeChoice].price = Math.round(clickUpGrades[upgradeChoice].price * 1.5)
    console.log(clickUpGrades[upgradeChoice].quantity);
    console.log(clickUpGrades[upgradeChoice].price);
    console.log("food", food);
    
  }
  drawClickUpgrades()
}

function purchaseAutoUpgrades(upgradeChoice) {
  let purchAuto = autoUpgrades[upgradeChoice]
  let buyAuto = purchAuto + autoUpgrades[upgradeChoice].quantity
  if (food >= autoUpgrades[upgradeChoice].price) {
    autoUpgrades[upgradeChoice].quantity++
    food -= autoUpgrades[upgradeChoice].price
    autoUpgrades[upgradeChoice].price = Math.round(autoUpgrades[upgradeChoice].price * 1.5)
    console.log(autoUpgrades[upgradeChoice].price);
    console.log(autoUpgrades[upgradeChoice].quantity);
  }
  drawAutoUpgrades()
}
// #endregion

//#region SECTION CALCULATE PURCHASES

//this will calculate the modifier of the cheese from each clickUpgrade
function calcSingleUpgrade() {
  for (const key in clickUpGrades) {
    food += clickUpGrades[key].multiplier * clickUpGrades[key].quantity
    
  }
}

function calcAutoUpgrade() {
  for (const key in autoUpgrades){
    food += autoUpgrades[key].multiplier * autoUpgrades[key].quantity
  }
}

//#endregion

// #region SECTION Draws
function drawClickUpgrades() {
  let template = ''
  for (let u in clickUpGrades) {
    if (clickUpGrades.hasOwnProperty(u)) {
      let item = clickUpGrades[u];
      template += /*html*/`<h5 class='text-left ml-1'>${item.name}: ${item.quantity}</h5>`
    }
    document.getElementById("clickUpgrade").innerHTML = template
  }
  drawDotsUpgradePrice()
  drawSkittlesUpgradePrice()
  totalFood()
}

function drawAutoUpgrades() {
  let template = ''
  for (let u in autoUpgrades) {
    if (autoUpgrades.hasOwnProperty(u)) {
      let item = autoUpgrades[u];
      template += /*html*/`<h5 class='text-left ml-1'>${item.name}: ${item.quantity}</h5>`
    }
    document.getElementById("autoUpgrade").innerHTML = template
  }
  drawCcandyUpgradePrice()
  drawIceCreamUpgradePrice()
  FoodPerSec()
}

//#endregion

//#region SECTION POWERUP PRICES
function drawDotsUpgradePrice() {
  let singlePowerup = clickUpGrades.dots.price
  // @ts-ignore
  document.getElementById("dots-price").innerText = singlePowerup
}

function drawSkittlesUpgradePrice() {
  let singlePowerup = clickUpGrades.skittles.price
  // @ts-ignore
  document.getElementById("skittles-price").innerText = singlePowerup
}

function drawIceCreamUpgradePrice() {
  let singlePowerup = autoUpgrades.iceCream.price
  // @ts-ignore
  document.getElementById("icecream-price").innerText = singlePowerup
}

function drawCcandyUpgradePrice() {
  let singlePowerup = autoUpgrades.cottonCandy.price
  // @ts-ignore
  document.getElementById("ccandy-price").innerText = singlePowerup
}
//#endregion

//#region SECTION AUTOUPGRADE TALLY
function startInterval() {
  let collectionInterval = setInterval(calcAutoUpgrade, 3000);

}

function totalFood () {
  let tfood = (clickUpGrades.dots.quantity * clickUpGrades.dots.multiplier) + (clickUpGrades.skittles.quantity * clickUpGrades.skittles.multiplier)
    // @ts-ignore
    document.getElementById("tfm").innerText = tfood
}

function FoodPerSec () {
  let fps = (autoUpgrades.iceCream.quantity * autoUpgrades.iceCream.multiplier) + (autoUpgrades.cottonCandy.quantity * autoUpgrades.cottonCandy.multiplier)
  console.log("fps", fps);
  // @ts-ignore
  
  document.getElementById("autofood").innerText = fps
}
//#endregion

drawClickUpgrades()
drawAutoUpgrades()
startInterval()
