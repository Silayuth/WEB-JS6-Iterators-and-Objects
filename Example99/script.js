//-----------------------------------------copying Object------------------------------//

// const originalProduct = {
//     product_name: 'Sticky Notes',
//     quantity_in_stock: 20,
//     unit_price: 0.8
// };

// console.log('Original Product:', originalProduct);

// const copiedProduct = { ...originalProduct };

// console.log('Copied Product:', copiedProduct);

// copiedProduct.quantity_in_stock = 10;
// copiedProduct.unit_price = 1.0;

// console.log('Modified Copied Product:', copiedProduct);
// console.log('Original Product after Modification:', originalProduct);


//-----------------------------------------Adding/Modifying Properties:----------------------------//

// const product = { product_name: "Sticky Notes", quantity_in_stock: 20, unit_price: 0.8 };

// // Using spread operator to copy properties of 'product' and add a new property 'total_value'
// const product_total_value = {
//     ...product,
//     total_value: product.quantity_in_stock * product.unit_price
// };

// console.log('Product Total Value',product_total_value);




//----------------------------------------Copy Array--------------------//
// const originalArray = [1, 2, 3];
// const cloneArray = [...originalArray];

// console.log(cloneArray);


// const inventory = [
//    { product_name: 'Sticky Notes', quantity_in_stock: 20, unit_price: 0.8 },
//    { product_name: 'Highlighters', quantity_in_stock: 15, unit_price: 2 },
//    { product_name: 'All-Purpose Cleaner', quantity_in_stock: null, unit_price: 2.5 },
//    { product_name: 'Washing up liquid', quantity_in_stock: 15, unit_price: 1.8 },
//    { product_name: 'Laundry Detergent', quantity_in_stock: 20, unit_price: 3 }
//  ];
 
//  // Clone the inventory array using the spread operator
//  const clonedInventory = [...inventory];
 
//  console.log(clonedInventory); // Output: Same contents as the original inventory array
 


//----------------------------------Merge Array-------------------------//
// const numbers1 = [1, 2, 3];
// const numbers2 = [7, 8, 9];
// const moreNumbers = [...numbers1, 4, 5, 6,...numbers2];

// console.log(moreNumbers); // Output: [1, 2, 3, 4, 5, 6] 


//----------------------------in Function call-------------------------------//
// const numbers = [1, 2, 3];

// function sum(a,b,c) {
//   return a + b + c;
// }

// const result = sum(...numbers);

// console.log(result); // Output: 6

//-----------------------------------------------------------------------//

// const numbers = [1, 2, 3];

// function sum(numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }

// const result = sum([...numbers]);

// console.log(result); // Output: 6



//------------------------------------Inventory----------------------------//

// const inventory = [
//     { product_name: 'Sticky Notes', quantity_in_stock: 20, unit_price: 0.8 },
//     { product_name: 'Highlighters', quantity_in_stock: 15, unit_price: 2 },
//     { product_name: 'All-Purpose Cleaner', quantity_in_stock: null, unit_price: 2.5 },
//     { product_name: 'Washing up liquid', quantity_in_stock: 15, unit_price: 1.8 },
//     { product_name: 'Laundry Detergent', quantity_in_stock: 20, unit_price: 3 }
//   ];
  
//   // Function to calculate the total value of products in stock
//   function calculateTotalValue(products) {
//     let totalValue = 0;
//     products.forEach(product => {
//       if (product.quantity_in_stock !== null) {
//         totalValue += product.quantity_in_stock * product.unit_price;
//       }
//     });
//     return totalValue;
//   }
  
//   // Call the calculateTotalValue function with the inventory array
//   const totalValue = calculateTotalValue([...inventory]); // Spread the inventory array
  
//   console.log(`Total value of all products in inventory: $${totalValue}`);
  



//--------------------------------------------rest-------------------------------//
//Using Function Parameter (Regular and Expression )

// const numbers = [1, 2, 3];

// function sum(...rest) {
//   let total = 0;
//   for (let i = 0; i < rest.length; i++) {
//     total += rest[i];
//   }
//   return total;
// }

// const result = sum(...numbers);

// console.log(result); // Output: 6

//--------------------------------------Inventory-----------------------------------//


// const inventory = [
//     { product_name: "Sticky Notes", quantity_in_stock: 20, unit_price: 0.8 },
//     { product_name: "Highlighters", quantity_in_stock: 15, unit_price: 2 },
//     { product_name: "All-Purpose Cleaner", quantity_in_stock: null, unit_price: 2.5 },
//     { product_name: "Washing up liquid", quantity_in_stock: 15, unit_price: 1.8 },
//     { product_name: "Laundry Detergent", quantity_in_stock: 20, unit_price: 3 }
// ];

// // Function to calculate total value of products
// function calculateTotalValue(...products) {
//     let totalValue = 0;

//     products.forEach(product => {
//         if (product.quantity_in_stock !== null) {
//             totalValue += product.quantity_in_stock * product.unit_price;
//         }
//     });

//     return totalValue;
// }

// // Calculate total value of products in inventory
// const totalInventoryValue = calculateTotalValue(...inventory);
// console.log("Total value of all products in inventory: $" + totalInventoryValue);


//--------------------------------------------Using with object destructuring:------------//


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     country: 'USA',
//     occupation: 'Engineer'
//   };
  
//   const { firstName, lastName, ...details } = person;
  
//   console.log(firstName); // Output: John
//   console.log(lastName); // Output: Doe
//   console.log(details); // Output: { age: 30, country: 'USA', occupation: 'Engineer' }
  
//------------------------------------------Inventory--------------------------------------//

//   const product = {
//     product_name: 'Sticky Notes',
//     quantity_in_stock: 20,
//     unit_price: 0.8
//   };
  
//   const { product_name, ...restProductDetail } = product;
  
//   console.log(`Product Name: ${product_name}`);
//   console.log('Other Product Details:', restProductDetail);
  
  
