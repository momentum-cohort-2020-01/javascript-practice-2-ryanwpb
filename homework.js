// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.

remove = (arr, member) => {
  let arrCopy = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    if (arrCopy[i] === member) {
      arrCopy.splice(i, 1);
    }
  }
  return arrCopy;
};

//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
sum = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
};

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
average = arr => {
  if (arr.length === 0) {
    return;
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
minimum = arr => {
  let min = arr[0];
  for (let i = 0; i < arr.length; ) {
    if (min > arr[i]) {
      min = arr[i];
      i++;
    } else i++;
  }
  return min;
};

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.

//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// Step 1 − Set MIN to location 0
// Step 2 − Search the minimum element in the list
// Step 3 − Swap with value at location MIN
// Step 4 − Increment MIN to point to next element
// Step 5 − Repeat until list is sorted

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    if (min > array[i]) {
      min = array[0];
    }
  }
  return array;
}

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList(array) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    str += "string" + i + ", ";
    console.log(str);
  }
  return array;
}
