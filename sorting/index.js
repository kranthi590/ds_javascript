// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < (array.length - i - 1); j++) {
      if (array[j + 1] < array[j]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function selectionSort(array) {
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

function mergeSort(arr) {
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

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let leftArray = [],
    rightArray = [],
    results = [];
  const pivot = array.pop();
  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot ) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }
  return results.concat(quickSort(leftArray), pivot, quickSort(rightArray));
}

module.exports = {
  bubbleSort,
  selectionSort,
  mergeSort,
  merge,
  quickSort
};
