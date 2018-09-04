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
    return true;
  }
  else if (string.length % 2 === 1 && palindrome.length === Math.floor(string.length / 2) + 1){
    return true;
  } else {
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

// console.log((checkPalindrome('acecarr'))); 

// function groupAnagrams(array){
// let anagrams = new HashMap();
// let ret = [];
// for(let word of array){
//     let key = word.split('').sort().join('');
//     if(anagrams.get(key)){
//         anagrams.get(key).push(word);
//     }
//     else {
//         ret.push(anagrams.set(key, [word]));
//     }
// }
// return ret;
// }

function groupAnagrams(array){
let anagrams = new Map();
array.forEach(word => { //each word ex "east"
    const key = word.split('').sort().join(''); //split and sorted if its an anagram it will be the same ex "aest"
    const anagram = anagrams.get(key)||[]; //find a value at the key that's the split word, if no value, put empty array 
    anagrams.set(key, [...anagram, word]); //save the key in the hash map with each word in it
})
return Array.from(anagrams.values()); //change hashmap values into an array
}

console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));