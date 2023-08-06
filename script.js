const foodData = [
  {
    id: 1,
    foodname: "Apple",
    calorie: 95,
    category: "Fruit",
    protiens: 0.3,
    cab: 25,
  },
  {
    id: 2,
    foodname: "Banana",
    calorie: 105,
    category: "Fruit",
    protiens: 1.3,
    cab: 27,
  },
  {
    id: 3,
    foodname: "Orange",
    calorie: 62,
    category: "Fruit",
    protiens: 1.2,
    cab: 15,
  },
  {
    id: 4,
    foodname: "Pear",
    calorie: 95,
    category: "Fruit",
    protiens: 0.5,
    cab: 25,
  },
  {
    id: 5,
    foodname: "Grapefruit",
    calorie: 42,
    category: "Fruit",
    protiens: 1.1,
    cab: 11,
  },
  {
    id: 6,
    foodname: "Strawberry",
    calorie: 46,
    category: "Fruit",
    protiens: 1.5,
    cab: 10,
  },
  {
    id: 7,
    foodname: "Blueberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.1,
    cab: 14,
  },
  {
    id: 8,
    foodname: "Raspberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.4,
    cab: 15,
  },
  {
    id: 9,
    foodname: "Broccoli",
    calorie: 34,
    category: "Vegetable",
    protiens: 3.3,
    cab: 5,
  },
  {
    id: 10,
    foodname: "Cauliflower",
    calorie: 25,
    category: "Vegetable",
    protiens: 2.6,
    cab: 5,
  },
  {
    id: 11,
    foodname: "Green Beans",
    calorie: 31,
    category: "Vegetable",
    protiens: 2.4,
    cab: 4,
  },
  {
    id: 12,
    foodname: "Asparagus",
    calorie: 20,
    category: "Vegetable",
    protiens: 2.2,
    cab: 2,
  },
  {
    id: 13,
    foodname: "Spinach",
    calorie: 23,
    category: "Vegetable",
    protiens: 3.5,
    cab: 4,
  },
  {
    id: 14,
    foodname: "Kale",
    calorie: 33,
    category: "Vegetable",
    protiens: 4.3,
    cab: 7,
  },
  {
    id: 15,
    foodname: "Sweet Potato",
    calorie: 103,
    category: "Vegetable",
    protiens: 2,
    cab: 27,
  },
  {
    id: 16,
    foodname: "Potato",
    calorie: 161,
    category: "Vegetable",
    protiens: 4.3,
    cab: 37,
  },
  {
    id: 17,
    foodname: "Carrot",
    calorie: 41,
    category: "Vegetable",
    protiens: 0.9,
    cab: 9,
  },
  {
    id: 18,
    foodname: "Onion",
    calorie: 40,
    category: "Vegetable",
    protiens: 1.4,
    cab: 9,
  },
  {
    id: 19,
    foodname: "Egg",
    calorie: 77,
    category: "Protein",
    protiens: 6.3,
    cab: 0.5,
  },
  {
    id: 20,
    foodname: "Chicken Breast",
    calorie: 165,
    category: "Protein",
    protiens: 31,
    cab: 0,
  },
  {
    id: 21,
    foodname: "Salmon",
    calorie: 206,
    category: "Protein",
    protiens: 22,
    cab: 0,
  },
  {
    id: 22,
    foodname: "Tuna",
    calorie: 179,
    category: "Protein",
    protiens: 39,
    cab: 0,
  },
  {
    id: 23,
    foodname: "Beef",
    calorie: 250,
    category: "Protein",
    protiens: 26,
    cab: 0,
  },
  {
    id: 24,
    foodname: "Pork",
    calorie: 242,
    category: "Protein",
    protiens: 26,
    cab: 0,
  },
  {
    id: 25,
    foodname: "Lamb",
    calorie: 294,
    category: "Protein",
    protiens: 25,
    cab: 0,
  },
  {
    id: 26,
    foodname: "Shrimp",
    calorie: 85,
    category: "Protein",
    protiens: 20,
    cab: 0.2,
  },
  {
    id: 27,
    foodname: "Quinoa",
    calorie: 120,
    category: "Grain",
    protiens: 4.4,
    cab: 21,
  },
  {
    id: 28,
    foodname: "Brown Rice",
    calorie: 216,
    category: "Grain",
    protiens: 4.5,
    cab: 45,
  },
  {
    id: 29,
    foodname: "Oats",
    calorie: 389,
    category: "Grain",
    protiens: 16.9,
    cab: 66,
  },
  {
    id: 30,
    foodname: "Quinoa",
    calorie: 120,
    category: "Grain",
    protiens: 4.4,
    cab: 21,
  },
  {
    id: 31,
    foodname: "Bread",
    calorie: 265,
    category: "Grain",
    protiens: 9.4,
    cab: 49,
  },
  {
    id: 32,
    foodname: "Pasta",
    calorie: 131,
    category: "Grain",
    protiens: 5.5,
    cab: 26,
  },
  {
    id: 33,
    foodname: "Milk",
    calorie: 60,
    category: "Dairy",
    protiens: 3.2,
    cab: 5.1,
  },
  {
    id: 34,
    foodname: "Cheese",
    calorie: 402,
    category: "Dairy",
    protiens: 25,
    cab: 2.4,
  },
  {
    id: 35,
    foodname: "Yogurt",
    calorie: 59,
    category: "Dairy",
    protiens: 3.5,
    cab: 5,
  },
  {
    id: 36,
    foodname: "Butter",
    calorie: 717,
    category: "Dairy",
    protiens: 0.9,
    cab: 0.1,
  },
  {
    id: 37,
    foodname: "Almonds",
    calorie: 579,
    category: "Nuts",
    protiens: 21,
    cab: 22,
  },
  {
    id: 38,
    foodname: "Walnuts",
    calorie: 654,
    category: "Nuts",
    protiens: 15,
    cab: 14,
  },
  {
    id: 39,
    foodname: "Peanuts",
    calorie: 567,
    category: "Nuts",
    protiens: 26,
    cab: 16,
  },
  {
    id: 40,
    foodname: "Cashews",
    calorie: 553,
    category: "Nuts",
    protiens: 18,
    cab: 30,
  },
];

console.log(foodData);

// List of all food items

const listAllItems = (foodData) => {
  let i = 1;
  foodItems = foodData.map((food) => `${i++}. ${food.foodname}`);
  return foodItems.join("<br>");
};

console.log(listAllItems(foodData));

const item1 = document.querySelector("#item1");
const para1 = document.createElement("p");
para1.innerHTML = listAllItems(foodData);
item1.append(para1);

// List all food items with category vegetables

const listAllVegetables = (foodData) => {
  let i = 1;
  const vegetables = foodData
    .filter((food) => food.category === "Vegetable")
    .map((vegetable) => `${i++}. ${vegetable.foodname}`);
  return vegetables.join("<br>");
};

console.log(listAllVegetables(foodData));

const item2 = document.querySelector("#item2");
const para2 = document.createElement("p");
para2.innerHTML = listAllVegetables(foodData);
item2.append(para2);

// List all the food items with category fruit

const listAllFruits = (foodData) => {
  let i = 1;

  const fruits = foodData
    .filter((food) => food.category === "Fruit")
    .map((fruit) => `${i++}. ${fruit.foodname}`);
  return fruits.join("<br>");
};

console.log(listAllFruits(foodData));

const item3 = document.querySelector("#item3");
const para3 = document.createElement("p");
para3.innerHTML = listAllFruits(foodData);
item3.append(para3);

// List all the food items with category protien

const listAllProtiens = (foodData) => {
  let i = 1;

  const protiens = foodData
    .filter((food) => food.category === "Protein")
    .map((protien) => `${i++}. ${protien.foodname}`);
  return protiens.join("<br>");
};

console.log(listAllProtiens(foodData));

const item4 = document.querySelector("#item4");
const para4 = document.createElement("p");
para4.innerHTML = listAllProtiens(foodData);
item4.append(para4);

// List all the food items with category nuts

const listAllNuts = (foodData) => {
  let i = 1;

  const nuts = foodData
    .filter((food) => food.category === "Nuts")
    .map((nut) => `${i++}. ${nut.foodname}`);
  return nuts.join("<br>");
};

console.log(listAllNuts(foodData));

const item5 = document.querySelector("#item5");
const para5 = document.createElement("p");
para5.innerHTML = listAllNuts(foodData);
item5.append(para5);

// List all the food items with category grains

const listAllGrains = (foodData) => {
  let i = 1;

  const grains = foodData
    .filter((food) => food.category === "Grain")
    .map((grain) => `${i++}. ${grain.foodname}`);
  return grains.join("<br>");
};

console.log(listAllGrains(foodData));

const item6 = document.querySelector("#item6");
const para6 = document.createElement("p");
para6.innerHTML = listAllGrains(foodData);
item6.append(para6);

// List all the food items with category dairy

const listAllDairy = (foodData) => {
  let i = 1;

  const dairy = foodData
    .filter((food) => food.category === "Dairy")
    .map((product) => `${i++}. ${product.foodname}`);
  return dairy.join("<br>");
};

console.log(listAllDairy(foodData));

const item7 = document.querySelector("#item7");
const para7 = document.createElement("p");
para7.innerHTML = listAllDairy(foodData);
item7.append(para7);

// List all the food items with calorie above 100

const highCalorieProducts = (foodData) => {
  let i = 1;

  const products = foodData
    .filter((food) => food.calorie > 100)
    .map((product) => `${i++}. ${product.foodname}`);
  return products.join("<br>");
};

console.log(highCalorieProducts(foodData));

const item8 = document.querySelector("#item8");
const para8 = document.createElement("p");
para8.innerHTML = highCalorieProducts(foodData);
item8.append(para8);

// List all the food items with calorie below 100
const lowCalorieProducts = (foodData) => {
  let i = 1;

  const products = foodData
    .filter((food) => food.calorie < 100)
    .map((product) => `${i++}. ${product.foodname}`);
  return products.join("<br>");
};

console.log(lowCalorieProducts(foodData));

const item9 = document.querySelector("#item9");

const para9 = document.createElement("p");
para9.innerHTML = lowCalorieProducts(foodData);
item9.append(para9);

// List all the food items with highest protien content to lowest

const protienSorted = (foodData) => {
  let i = 1;

  const products = [...foodData];

  const names = products
    .sort((a, b) => {
      if (Number(a.protiens) > Number(b.protiens)) {
        return -1;
      }
      if (Number(a.protiens) < Number(b.protiens)) {
        return 1;
      }
      return 0;
    })
    .map((product) => `${i++}. ${product.foodname} => ${product.protiens}`);

  return names.join("<br>");
};

console.log(protienSorted(foodData));

const item10 = document.querySelector("#item10");
const para10 = document.createElement("p");
para10.innerHTML = protienSorted(foodData);
item10.append(para10);

// List all the food items with lowest cab content to highest

const cabSorted = (foodData) => {
  let i = 1;

  const products = [...foodData];

  const names = products
    .sort((a, b) => {
      if (Number(a.cab) < Number(b.cab)) {
        return -1;
      }
      if (Number(a.cab) > Number(b.cab)) {
        return 1;
      }
      return 0;
    })
    .map((product) => `${i++}. ${product.foodname} => ${product.cab}`);

  return names.join("<br>");
};

console.log(cabSorted(foodData));

const item11 = document.querySelector("#item11");
const para11 = document.createElement("p");
para11.innerHTML = cabSorted(foodData);
item11.append(para11);
