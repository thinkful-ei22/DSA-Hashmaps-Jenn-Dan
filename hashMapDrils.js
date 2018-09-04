const HashMap = require('./hashMapClass');

const lor = new HashMap();

lor.set('Hobbit', 'Bilbo');
lor.set('Hobbit', 'Frodo');
lor.set('Wizard', 'Gandolf');
lor.set('Human', 'Aragon');
lor.set('Elf', 'Legolas');
lor.set('Maiar', 'The Necromancer');
lor.set('Maiar', 'Sauron');
lor.set('RingBearer', 'Gollum');
lor.set('LadyOfLight', 'Galadriel');
lor.set('HalfElven', 'Arwen');
lor.set('Ent', 'Treebeard');

// lor.get('Hobbit');
// console.log(lor.get('Maiar')); //Sauron
// console.log(lor);


//Our solution that works most of the times =))
function checkPalindrome(string){
  let palindrome = new HashMap();
  for (let i = 0; i < string.length; i++){
    palindrome.set(string.charAt(i), i);
    console.log(palindrome);
  }
  // console.log(Object.keys(palindrome).length);
  if (string.length % 2 === 0 && palindrome.length === string.length / 2){
    console.log(string.length);
    console.log(palindrome.length);
    return true;
  }
  else if (string.length % 2 === 1 && palindrome.length === Math.floor(string.length / 2) + 1){
    console.log(string.length);
    console.log(palindrome.length);
    return true;
  } else {
    console.log(string.length);
    console.log(palindrome.length);
    return false;
  }
}

//another solution
function checkPalindrome(string){
  let palindrome = new HashMap();
  let odd = 0;
  for (let i = 0; i < string.length; i++){
    try {
      let charCount = palindrome.get(string[i]);
      charCount++;
      if(charCount % 2 === 0) {
        odd--;
      } else {
        odd++;
      }
      palindrome.set(string[i], charCount);
    } catch {
      palindrome.set(string[i], 1);
      odd++;
    }
  }
  if(string.length % 2 === 0 && odd === 0 
    || string.length % 2 === 1 && odd === 1){
      return true;
    } else {
      return false
    }
}

console.log((checkPalindrome('acecarr'))); 