//---map() Creates a new array with the results of calling a provided function on every element.

   //  // [🐮,🐔,🥔,🌽].map(cook) = [🍔,🍗,🍟,🍿]
   //  // [🍇,🍎,🥩,🥚].map(make) => [🍷,🥤,🥧,🍳]
  
    let numbers = [1, 2, 3, 4, 5];

    //Using forEach to log each number multiplied by 2
      let result = numbers.map(number => number * 2);
    
       console.log(numbers);
       console.log(result);

//------------------------------------Inventory----------------------------------------//

// const inventory = [
//    { product_name: "Sticky Notes", quantity_in_stock: 20, unit_price: 0.8 },
//    { product_name: "Highlighters", quantity_in_stock: 15, unit_price: 2 },
//    { product_name: "All-Purpose Cleaner", quantity_in_stock: null, unit_price: 2.5 },
//    { product_name: "Washing up liquid", quantity_in_stock: 15, unit_price: 1.8 },
//    { product_name: "Laundry Detergent", quantity_in_stock: 20, unit_price: 3 }
// ];

// const inventoryWithTotalValue = inventory.map(product => {
//    return {
//        ...product,  // Spread the existing properties of the product
//        total_value: product.quantity_in_stock !== null ? product.quantity_in_stock * product.unit_price : 0
//    };
// });

// console.log('Inventory with Total Value:');
// console.log(inventoryWithTotalValue);

// console.log(inventory);

