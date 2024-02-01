const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const number = 'O748105141'; // Replaced this with the actual value you want to check

// Changed from typeof number == primaryPhone to number === primaryPhone
const primaryValid = number === primaryPhone;
// Changed from typeof number == secondaryPhone to number === secondaryPhone
const secondaryValid = number === secondaryPhone;

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);
