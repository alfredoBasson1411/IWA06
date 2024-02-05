const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

// Check if ''hourOfDay' is defined, minuteOfDay is not null, and both are 00
if (typeof hourOfDay !== 'undefined' && minuteOfDay !== null && hourOfDay === 0 && minuteOfDay === 0) {
    // Convert tax to a decimal
    const taxAsDecimal = parseFloat(tax) / 100;
    
    // Calculate salary after deducting tax
    const startingAfterTax = salary * (1 - taxAsDecimal);
    
    // Calculate balance after deducting expenses
    const balance = startingAfterTax - transport - food - rent;
    
    // Output formatted balance with 'R' symbol and 2 decimal places
    console.log('R ' + balance.toFixed(2));
  } else {
    // Output a message if the conditions for balance calculation are not met
    console.log('Balance calculation skipped: Invalid time or time not known.');
  }
  // done
  
  
  
  