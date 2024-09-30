let reverse = function(input) {
  let string = process.argv.slice(2).toString()
  let reverseString = string.split('').reverse().join('');
  console.log(reverseString);
}

reverse()