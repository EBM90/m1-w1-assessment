// Write a function that returns the product of 2 numbers
function product(x, y) {
  if(typeof x !== 'number' || typeof y !== 'number'){
    return false
  }
  return x*y
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num%2===0
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if(a > b){
    return a
  } else {
    return b
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
    return false
  } else if(a > b && a> c){
    return a
  } else if(b > a && b > c) {
    return b
  } else {
    return c
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if(numbers.length === 0){
    return 0
  }
  if(typeof numbers !== 'object'){
    return false
  }

  for (let i=0; i<numbers.length; i++){
    if (typeof numbers[i] !== 'number'){
      return false
    }
  }

  let total = numbers.reduce(function(acc, curr){
     return acc + curr
  })

  return total

}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
    if(numbers.length === 0 || typeof numbers !== 'object'){
      return false
    }
    let high = 0
    for(let i = 0; i <numbers.length; i++){
      if (numbers[i] > high){
        high = numbers[i]
      }
    }
    return high
}

// Return the longest string in an array
function longestString(strings) {
  if(strings.length === 0 || typeof strings !== 'object'){
    return false
  }
  let long = ""
  for(let i = 0; i <strings.length; i++){
    if (typeof strings[i] === 'string' && strings[i].length > long.length){
      long = strings[i]
    }
  }
  return long
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
    if (typeof wordsArr !== 'object'){
      return false
    }
    return wordsArr.includes(word)
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if(wordsArr.length === 0){
    return false
  }
  let unique = wordsArr.forEach(function(w, i){
    if(wordsArr.indexOf(w, i+1)< 0){
      return w
    }
  })
  return unique
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (typeof personObj !== 'object'){
    return false
  }
  if(personObj.firstName === undefined || personObj.lastName === undefined){
    return false
  }
  return personObj.firstName + ' ' + personObj.lastName
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
    if(matrix.length === 0 || typeof matrix !== 'object'){
    return false
    }
    let largest = 0
    matrix.forEach(function(n){
      for(let i= 0; i< n.length; i++){
        if(n[i] > largest){
          largest = n[i]
        }
      }
    })
    return largest
}
