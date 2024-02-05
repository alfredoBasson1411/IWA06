const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = !isNaN(Number(primaryPhone));
const secondaryValid = !isNaN(Number(secondaryPhone));

console.log('Primary phone is a valid numerical string:', primaryValid);
console.log('Secondary phone is a valid numerical string:', secondaryValid);
