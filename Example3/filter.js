 
//---filter() Creates a new array with all elements that pass the test implemented by the provided function
        // [🍷,🥤,🥧,🍳].map(isDrink) => [🍷,🥤]
   
        // Using filter numbers > 5 from the array
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const filteredNumbers = numbers.filter(num => num > 5);
        
        console.log(filteredNumbers); // Output: [6, 7, 8, 9, 10]
        


//----------------------------------------Inventory---------------------------------------//
const inventory = [
  { product_name: 'Sticky Notes', quantity_in_stock: 20, unit_price: 0.8 },
  { product_name: 'Highlighters', quantity_in_stock: 15, unit_price: 2 },
  { product_name: 'All-Purpose Cleaner', quantity_in_stock: null, unit_price: 2.5 },
  { product_name: 'Washing up liquid', quantity_in_stock: 15, unit_price: 1.8 },
  { product_name: 'Laundry Detergent', quantity_in_stock: 20, unit_price: 3 }
];

const availableProducts = inventory.filter(product => product.quantity_in_stock !== null);

console.log(availableProducts);


