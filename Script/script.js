

let firstName = "Shedrach"
let lastName = "mkpuma"
let quote = "A thousand miles begins with a single step"
let uppercase = firstName.toUpperCase()
console.log(uppercase)

console.log(uppercase.toLowerCase() )
console.log(quote)

let Principal = 100000;
let Rate = 20;
let Time = 2;
let Interest = (Principal * Rate * Time) /100;

console.log(Interest);

// Hour
// If hour is between 6am and 12pm: Good morning
// If its between 12pm and 6pm:Good evening

let hour = 14;
if (hour >= 6 && hour < 12)
  console.log('Good morning');
else if(hour >= 12 && hour < 18)
  console.log('Good afternoon');
else
  console.log('Good evening');