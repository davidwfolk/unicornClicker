let food = 0
let autoFood = 0
let eating = {
  "eat": 1
}

let clickUpGrades = {
  dots: {
    name: "dots",
    price: 50,
    quantity: 0,
    multipler: 1
  },
  skittles: {
    name: "skittles",
    price: 100,
    quantity: 0,
    multiplier: 2,
  }
}
  let autoUpgrades = {
    iceCream: {
      name: "icream",
      price: 250,
      quantity: 0,
      multiplier: 20
    },
    cottonCandy: {
      name: "ccandy",
      price: 500,
      quantity: 0,
      multiplier: 40
    }
  }

  let collectAutoUpgrades = {}

//NOTE Business Logic

function feed(playerChoice) {
  let feeding = eating[playerChoice]
  food += feeding
  //calcSingleUpgrade()
  console.log(food);
  
}





}