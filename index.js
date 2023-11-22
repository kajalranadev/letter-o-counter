console.clear();

function countO(str) {
  let count = 0;
  let lowercaseStr = str.toLowerCase(); // Convert the string to lowercase

  for (let i = 0; i < lowercaseStr.length; i++) {
    if (lowercaseStr[i] === 'o') {
      count++;
    }
  }

  return count;
}

let str = "Rovor herO";
console.log(countO(str));
