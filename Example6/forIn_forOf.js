//--------------------------------loop through object---------------------------//
const person = {
    firstName: 'Jack',
    age: 30,
    gender: 'male'
 }

 for(property in person) {
    console.log(property + ':' + person[property]);
 }

//-------------------------------------------------------------------------------//
//  const inventoryItem = {
//   product_name: 'Sticky Notes',
//   quantity_in_stock: 20,
//   unit_price: 0.8
// };

// for (const property in inventoryItem) {
//   console.log(property + ': ' + inventoryItem[property]);
// }

//--------------------------------------------------------------------------------//
const inventory = [
  { product_name: 'Sticky Notes', quantity_in_stock: 20, unit_price: 0.8 },
  { product_name: 'Highlighters', quantity_in_stock: 15, unit_price: 2 },
  { product_name: 'All-Purpose Cleaner', quantity_in_stock: 0, unit_price: 2.5 },
  { product_name: 'Washing up liquid', quantity_in_stock: 15, unit_price: 1.8 },
  { product_name: 'Laundry Detergent', quantity_in_stock: 20, unit_price: 3 }
];

inventory.forEach(item => {
  console.log('Inventory Item:');
  for (const property in item) {
    console.log(property + ': ' + item[property]);
  }
  console.log('----------');
});


//if you use for each it will be like this
const inventoryForEach = [
  { product_name: 'Sticky Notes', quantity_in_stock: 20, unit_price: 0.8 },
  { product_name: 'Highlighters', quantity_in_stock: 15, unit_price: 2 },
  { product_name: 'All-Purpose Cleaner', quantity_in_stock: 0, unit_price: 2.5 },
  { product_name: 'Washing up liquid', quantity_in_stock: 15, unit_price: 1.8 },
  { product_name: 'Laundry Detergent', quantity_in_stock: 20, unit_price: 3 }
];

inventoryForEach.forEach(item => {
  console.log('Inventory Item:');
  console.log('product_name: ' + item.product_name);
  console.log('quantity_in_stock: ' + item.quantity_in_stock);
  console.log('unit_price: ' + item.unit_price);
  console.log('----------');
});



//-------------------------------Loop through object in object----------------//
  //  const car = {
  //       brand: 'Toyota',
  //       model: 'Camry',
  //       year: 2022,
  //       feature:["air conditions", "four wheels drive", "NAV"],
  //       owner: {
  //           firstName:'Jack' ,
  //           lastName:'Jones',
  //           age: 30
  //       }
  //     };
      
  //     for (let property in car) {
  //       if (property === 'owner') {
  //         for (let ownerProperty in car.owner) {
  //           console.log(ownerProperty + ': ' + car.owner[ownerProperty]);
  //         }
  //       } else {
  //         console.log(property + ': ' + car[property]);
  //       }
  //     }
      

  //     for(let carFeature in car.feature ){
  //       console.log(carFeature + ':' + car.feature[carFeature]);
  //     }

  //     for (let ownerOfCar in car.owner){
  //       console.log(ownerOfCar + ':' + car.owner[ownerOfCar]);
  //     }

//-----------------------------for of: iterate over iterable objects like arrays, strings
    const fruits = ['apple', 'banana', 'orange'];
    for (let index of fruits){
     console.log(`fruits is ${index}`);
    }

    const numbers = [30, 15, 2];
    for (let index of numbers){
         console.log(`numbers is ${index}`);
    }

    const numbers1 = [30, 15, 2];
    let sum = 0;
        for (let number of numbers) {
        sum += number;
        }
    console.log(`The sum of numbers is ${sum}`);

