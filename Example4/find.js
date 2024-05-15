//-------------------------findIndex()--------------//
     // [🍷,🥤,🥧,🍳].find(🥤) => 🥤

     const numbers = [1, 2, 3, 4, 5];

     const foundNumber = numbers.find(number => number > 2);
     
     console.log(foundNumber); // Output: 3
     

//------------------------------------------Inventory----------------------------------------//

     const inventory = [
        { product_name: 'Sticky Notes', quantity_in_stock: 20, unit_price: 0.8 },
        { product_name: 'Highlighters', quantity_in_stock: 15, unit_price: 2 },
        { product_name: 'All-Purpose Cleaner', quantity_in_stock: null, unit_price: 2.5 },
        { product_name: 'Washing up liquid', quantity_in_stock: 15, unit_price: 1.8 },
        { product_name: 'Laundry Detergent', quantity_in_stock: 20, unit_price: 3 }
    ];
    
    const productNameToFind = 'Highlighters';
    const product = inventory.find(product => product.product_name === productNameToFind);
    
    console.log(product);
    
    
