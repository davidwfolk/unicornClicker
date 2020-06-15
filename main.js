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
    multipler: 1
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
      name: "icream",
      price: 2,
      quantity: 0,
      multiplier: 20
    },
    cottonCandy: {
      name: "ccandy",
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
  // calcSingleUpgrade()
  console.log(food);
  // @ts-ignore
  document.getElementById("food-count").innerText = food
}

function purchaseSingleUpgrades(upgradeChoice) {
  let purchSing = clickUpGrades[upgradeChoice]
  let buySing = purchSing + clickUpGrades[upgradeChoice].quantity
  if (food >= clickUpGrades[upgradeChoice].price) {
    clickUpGrades[upgradeChoice].quantity ++
    food -= clickUpGrades[upgradeChoice].price
    clickUpGrades[upgradeChoice].price *= 1.5
    console.log(clickUpGrades[upgradeChoice].quantity);
    console.log(clickUpGrades[upgradeChoice].price);
  }
  drawClickUpgrades()
}

function drawClickUpgrades() {
  let template =''
  for (let u in clickUpGrades) {
    if (clickUpGrades.hasOwnProperty(u)) {
      let item = clickUpGrades[u];
      template += /*html*/`<h5 class='text-left ml-1'>${item.name}: ${item.quantity}</h5>`
    }
    document.getElementById("clickUpgrade").innerHTML = template
  }
  
}



drawClickUpgrades()
