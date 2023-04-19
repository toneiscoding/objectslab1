
 

// Problem 1

// Declare a JS object called carThree with
// A property called wheels with a number value
// A property called owner with a string value
// A property called isBroken with a boolean value
// A property called color with a string value
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isBroken property
// Use dot notation to read the value of owner
// Create a new variable (not part of the object) called clientIsInterested that has no value.
// Check if car color is blue. If true, set clientIsInterested to true, else false.
// Delete the owner property of carThree.

let carThree = {
    wheels: 4,
    owner: "John Smith",
    isBroken: false,
    color: "blue",
}

    carThree.price = 5000,
    carThree['year'] = 2003,
    carThree.isBroken = false
    console.log(carThree.owner) //John Smith
    
let clientIsInterested =  {

}
    if (carThree.color === 'blue') {
        clientIsInterested = true;  
    } else {
        clientIsInterested = false;
    }
    
    console.log(clientIsInterested)// true

    delete carThree.owner;

// Problem 2

// Declare a JS object called store with
// A property called profit with a number value
// A property called manager with a string value
// A property called isOpenNow with a boolean value
// A property called isVeryExpensive with a boolean value
// Use dot notation to add a new property called location with a string value
// Use bracket notation to add a new property called storeType with a string value
// Use dot notation to change the value of the isOpenNow property
// Use dot notation to read the value of isVeryExpensive 
// Create a new variable (not part of the object) called canShopHere that has no value.
// Check if isOpenNow and NOT isVeryExpensive. If true set canShopHere to true, else false
// Delete the profit property of store.
 
let store = {
    profit: 10000,
    manager: 'Jane Doe',
    isOpenNow: false,
    isVeryExpensive: true
  };

    store.location = "Burien";
    store['storeType'] = 'clothing';
    store.isOpenNow = true;
    console.log(store.isVeryExpensive)

let canShopHere = {

}
if (store.isOpenNow && !store.isVeryExpensive) {
    canShopHere = true;
} else {
    canShopHere = false;
}

delete store.profit;

// Problem 3

 
// Declare a JS object called home with
// A property called rooms with a number value
// A property called bathrooms with a number value
// A property called isForSale with a boolean value
// A property called isInGoodLocation with a boolean value
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isForSale property
// Use dot notation to read the value of bathrooms
// Create a new variable (not part of the object) called buyHouse that has no value.
// Check if isForSale and isInGoodLocation. If true set buyHouse to true, else false
// Delete the isForSale property of home.
let home = {
    rooms: 5,
    bathrooms: 4,
    isForSale: false,
    isInGoodLocation: true
}
    home.price = 400000;
    home['year'] = 1950;
    home.isForSale = true;
    
    console.log(home.bathrooms)

let buyHouse = {

}

if (home.isForSale && home.isInGoodLocation) {
    buyHouse = true;
} else {
    buyHouse = false;
}
console.log(home.isForSale && home.isInGoodLocation)

delete home.isForSale;
// Problem 4, 5

// Declare a JS object with 4 properties (4 keys and 4 values).
// Use dot notation to add a new property.
// Use bracket notation to add a new property.
// Use dot notation to change the value of one of the properties.
// Use dot notation to read the value of one of the properties.
// Create a new variable (not part of the object) that has no value.
// Write some kind of if / else statement to check some information of the object. Based on true / false set the value of the variable you made in number 6 to true or false.
// Delete one of the object properties.

let girlfriendMaterial = {
    canCook: true,
    isPretty: true,
    age: 35,
    job: 'lawyer'
}

    girlfriendMaterial.cleans = true;
    girlfriendMaterial['isFunny'] = true;
    girlfriendMaterial.job = 'event planner';

    console.log(girlfriendMaterial.isPretty)

let introduceToParents = {

}
if (girlfriendMaterial.canCook && girlfriendMaterial.isPretty) {
    introduceToParents = true;
} else {
    introduceToParents = false;
}

console.log(introduceToParents)// true

let allStar = {
    top24InPoints: true,
    top24InVotes: true,
    top10InRebounds: true,
    top10InAssists: true,
}

    allStar.playerOfTheGame = 12;
    allStar["healthy"] = true;
    allStar.top10InAssists = false;

    console.log(allStar.top10InRebounds) // true

let notAnAllStar = {

}
    if (allStar.playerOfTheGame <= 10 && !allStar["healthy"]) {
        notAnAllStar = true;
    } else {
        notAnAllStar = false;
    }

    console.log(allStar.playerOfTheGame <= 10 && !allStar["healthy"])// false