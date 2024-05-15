//---forEach() Executes a provided function once for each array element
 let numbers = [1, 2, 3, 4, 5];

//Using forEach to log each number multiplied by 2
  numbers.forEach (number =>  {
    console.log(number * 2)
  });
  console.log(numbers);


//-------------primitive data types, by looping through the array and accessing the elements by their indices
let numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach((num, index) => {
    console.log(numbers1[index] = num * 2)  
});

console.log(numbers1)

    //--------------------------------------------Inventory----------------------------//

    const inventory = [
        { product_name: "Sticky Notes", quantity_in_stock: 20, unit_price: 0.8 },
        { product_name: "Highlighters", quantity_in_stock: 15, unit_price: 2 },
        { product_name: "All-Purpose Cleaner", quantity_in_stock: null, unit_price: 2.5 },
        { product_name: "Washing up liquid", quantity_in_stock: 15, unit_price: 1.8 },
        { product_name: "Laundry Detergent", quantity_in_stock: 20, unit_price: 3 }
      ];
      
      let totalValue = 0;
      
      inventory.forEach((product) => {
          if (product.quantity_in_stock !== null) {
          totalValue += product.quantity_in_stock * product.unit_price;
        }
      });
      console.log("Total value of all products in inventory: $" + totalValue);

//-----------------------------------------reference type-----------------------------------//

// const inventory = [
//     { product_name: 'apple', unit_price: 1.5 },
//     { product_name: 'banana', unit_price: 2 },
//     { product_name: 'mango', unit_price: 3 },
//     { product_name: 'pear', unit_price: 1 }
//   ];
  
//   const priceUpdate = 0.5;
  
//   inventory.forEach(product => {
//      product.unit_price += priceUpdate;

    
//   });
  
//   console.log('Updated Inventory:');
//   console.log(inventory);
  