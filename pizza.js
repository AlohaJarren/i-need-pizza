let order11821 = {
  customerName: "James Franko",
  Address: "2155 E Lake Dr",
  City: "Seattle",
  State: "WA",
  zipCode: "11310",
  Pizza: {
    Crust: "thin",
    pizzaSauce: "robust marinara",
    Cheese: "regular",
    Toppings: {
      Veggies: ["olives", "green peppers"],
      Meat: ["pepperoni", "ham", "sausage"]
    }
  },
  sideItems: ["breadsticks", "bbq wings 6 piece"],
  Sauces: "Ranch",
  specialInstructions: "Please cut pizza into squares",
  paymentType: "cash",
  storeId: 112
}

let order11372 = {
  customerName: "Justin Bieber",
  Address: "1801 W Rodeo Dr",
  City: "Beverly Hills",
  State: "CA",
  zipCode: "91833",
  Pizza: {
    Crust: "stuffed crust",
    pizzaSauce: "creamy garlic alfredo",
    Cheese: "double",
    Toppings: {
      Veggies: ["onion", "anchovies", "mushrooms"],
      Meat: ["chicken", "bacon"]
    }
  },
  Sides: "doube fudge brownie dessert",
  Sauces: ["bbq", "garlic sauce"],
  specialInstructions: "Please call 815 at the gate",
  paymentType: "credit card",
  storeId: 382
}

let currentOrders = {
  order11821: {
    customerName: "James Franko",
    Address: "2155 E Lake Dr",
    City: "Seattle",
    State: "WA",
    zipCode: "11310",
    Pizza: {
      Crust: "thin",
      pizzaSauce: "robust marinara",
      Cheese: "regular",
      Toppings: {
        Veggies: ["olives", "green peppers"],
        Meat: ["pepperoni", "ham", "sausage"]
      }
    },
    sideItems: ["breadsticks", "bbq wings 6 piece"],
    Sauces: "Ranch",
    specialInstructions: "Please cut pizza into squares",
    paymentType: "cash",
    storeId: 112
  },
  order11372: {
    customerName: "Justin Bieber",
    Address: "1801 W Rodeo Dr",
    City: "Beverly Hills",
    State: "CA",
    zipCode: "91833",
    Pizza: {
      Crust: "stuffed crust",
      pizzaSauce: "creamy garlic alfredo",
      Cheese: "double",
      Toppings: {
        Veggies: ["onion", "anchovies", "mushrooms"],
        Meat: ["chicken", "bacon"]
      }
    },
    Sides: "double fudge brownie dessert",
    Sauces: ["bbq", "garlic sauce"],
    specialInstructions: "Please call 815 at the gate",
    paymentType: "credit card",
    storeId: 382
  }
}

// changes to order 11821
currentOrders.order11821.Pizza["Pizza Sauce"] = "classic marinara";
currentOrders.order11821.Pizza["Toppings"].Veggies = ["onion", "anchovies", "mushrooms", "Spinach"];
currentOrders.order11821.Pizza["Toppings"].Meat = ["pepperoni", "ham"];



