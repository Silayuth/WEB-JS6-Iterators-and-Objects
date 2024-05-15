//---reduce(acc+curr) - used to iterate over an array and accumulate a single value through the application of a given callback function
  //[🍷,🥤,🥧,🍳].reduce(eat) => [🥗]

        //array.reduce(callback, initialValue);
        // numbers.reduce((accumulator, currentValue) => {
        //     //doing something or return something
        // }, initialValue);
//-----------------------------------------------------------------------//
         //example 1
         let numbers = [9,8,7,6,5];

         let sum = numbers.reduce((accumulator, currentValue) => {
             console.log(`accumulator: ${accumulator}`);
             console.log(`currentValue: ${currentValue}`);
             return (accumulator * currentValue);
         }, 1);

         console.log(sum); // Output: 15

//-----------------------------------------------------------------------//

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((total, number) => {
//             console.log(`total: ${total}`);
//             console.log(`number: ${number}`)
//             return (total + number)
// },15);
// console.log(sum); // 15


const inventory = [
  { product_name: 'Sticky Notes', quantity_in_stock: 20, unit_price: 0.8 },
  { product_name: 'Highlighters', quantity_in_stock: 15, unit_price: 2 },
  { product_name: 'All-Purpose Cleaner', quantity_in_stock: 10, unit_price: 2.5 },
  { product_name: 'Washing up liquid', quantity_in_stock: 15, unit_price: 1.8 },
  { product_name: 'Laundry Detergent', quantity_in_stock: 20, unit_price: 3 }
];

const totalQuantityInStock = inventory.reduce((total, product) => {
  return total + product.quantity_in_stock;
}, 0);

console.log("Total quantity of all products in stock: " + totalQuantityInStock);
// Output: Total quantity of all products in stock: 80


// const inventory = [
//   { product_name: 'Sticky Notes', quantity_in_stock: 20, unit_price: 0.8 },
//   { product_name: 'Highlighters', quantity_in_stock: 15, unit_price: 2 },
//   { product_name: 'All-Purpose Cleaner', quantity_in_stock: 10, unit_price: 2.5 },
//   { product_name: 'Washing up liquid', quantity_in_stock: 15, unit_price: 1.8 },
//   { product_name: 'Laundry Detergent', quantity_in_stock: 20, unit_price: 3 }
// ];

// const totalInventoryValue = inventory.reduce((total, product) => {
//   return total + (product.quantity_in_stock * product.unit_price);
// }, 0);

// console.log("Total value of all products in inventory: $" + totalInventoryValue.toFixed(2));
// Output: Total value of all products in inventory: $161.00

