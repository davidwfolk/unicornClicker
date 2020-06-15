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
    multiplier: 20
  },
  cottonCandy: {
    name: "Cotton Candy",
    price: 2,
    quantity: 0,
    multiplier: 40
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

}

//#endregion

drawClickUpgrades()
drawAutoUpgrades()
