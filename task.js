function calculateTax(income, expense) {
  if (income < 0 || expense < 0 || income < expense) {
    return "invalid input"
  }
  let tax = (income - expense) * 0.2;
  return tax;
}
let taxCal = calculateTax(100000, 13000);
console.log("Tax:",taxCal, "tk");

//2nd problem
function sendNotification(email) {
  if (!email.includes('@')) {
    return 'invalid E-mail';
  }
  let words = email.split("@");
  let firstWord = words[0];
  let lastWord = words[1];
  let finalWord = firstWord.concat(" sent you an email from ", lastWord);
  return finalWord; 
}
let email=sendNotification("shahin5067@gmail.com");
console.log(email);
//3rd problem
function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return 'invalid input';
  }
  let containDigit = false;
  for (let i = 0; i < name.length; i++) {
    let char = name[i];
    if (!isNaN(char) && char !== " ") {
      containDigit = true;
      break;
    }
  }
  return containDigit;
}

let checkDigit = checkDigitsInName('@%%');
console.log(checkDigit);

//
patriList =[{ name: 'hasina', district: 'gopalgonj'},
{ name: 'rojina', district: 'khulna' },
{ name: 'morjhina', district: 'dhaka' }];

function selectionName(name, district) {
  for (const patri of patriList) {
    if (typeof patri.name!=='string' && typeof patri.district!=='string') {
      return 'Invalid';
    }
    if (patri.name.includes('h') && patri.district === 'dhaka') {
      return 'proposal done'; 
    }    
  }
  return 'not available';
}
let contain = selectionName(patriList);
console.log(contain);
