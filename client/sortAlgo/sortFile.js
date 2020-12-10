/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

const swap = (i, j, array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};

const bubbleSort = (array, l) => {
  let change = false;
  const length = l || array.length;
  const arrayProgress = [];

  for (let i = 0; i < length - 1; i += 1) {
    if (array[i] > array[i + 1]) {
      swap(i, i + 1, array);
      change = true;
      const copy = array.slice();
      arrayProgress.push(copy);
    }
  }

  if (change === false) {
    return arrayProgress;
  }

  return arrayProgress.concat(bubbleSort(array, length - 1));
};

const quickSort = (l, r, array) => {
  let arrayProgress = [];
  const pivot = l;
  let left = l + 1;
  let right = r;
  let count = 0;
  if (pivot >= right) {
    return arrayProgress;
  }

  while (left <= right) {
    if (array[left] > array[pivot] && array[right] < array[pivot]) {
      swap(left, right, array);
      const copy = array.slice();
      arrayProgress.push(copy);
    }
    if (array[left] <= array[pivot]) {
      left++;
      count++;
    }
    if (array[right] >= array[pivot]) {
      right--;
    }
  }
  // if left side was never increased, it means it is in order so we do not need to swap
  if (count !== 0) {
    if (array[pivot] < array[right]) {
      right -= 1;
    }
    swap(pivot, right, array);
    const copy = array.slice();
    arrayProgress.push(copy);
  }
  // left part
  if (pivot <= right - 1) {
    arrayProgress = arrayProgress.concat(quickSort(pivot, right - 1, array));
  }

  // right part
  if (left <= r) {
    arrayProgress = arrayProgress.concat(quickSort(left, r, array));
  }
  return arrayProgress;
};

const mergeSort = (arr) => {
  const arrayProgress = [];
  const copy = arr.slice();
  const helper = (array, start, end) => {
    // set pivot to middle of array
    const mid = Math.ceil(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    if (array.length > 2) {
      left = helper(left, start, mid + start);
      right = helper(right, mid + start, end);
    }

    let leftIndex = 0;
    let rightIndex = 0;
    for (let i = start; i < end; i++) {
      if (left[leftIndex] <= ((right[rightIndex] !== undefined) ? right[rightIndex] : Infinity)) {
        copy[i] = left[leftIndex++];
      } else {
        copy[i] = right[rightIndex++];
      }
      arrayProgress.push(copy.slice());
    }
    return copy.slice(start, end);
  };

  helper(arr, 0, arr.length);
  return arrayProgress;
};

// const test = (() => {
//   const arr = [];
//   for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 50));
//   }
//   return arr;
// })();

module.exports = {
  bubbleSort,
  quickSort,
  mergeSort,
};
