// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(array) { // Bubble sort has a worst-case and average complexity of О(n2)
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < (array.length - i - 1); j++) {
      if (array[j + 1] < array[j]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function selectionSort(array) { // selectionSort sort has a worst-case and average complexity of О(n2)
  for (var i = 0; i < array.length; i++) {
    var minIndex = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(array, minIndex, i);
    }
  }
  return array;
}

function mergeSort(arr) { //  Merge sort is O(nLogn)
  if (arr.length === 1) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function quickSort(array) { // quicksort shows that, on average, the algorithm takes O(n log n) 
  if (array.length <= 1) {
    return array;
  }
  var pivot = array[0];
  var left = [];
  var right = [];
  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

module.exports = {
  bubbleSort,
  selectionSort,
  mergeSort,
  merge,
  quickSort
};
