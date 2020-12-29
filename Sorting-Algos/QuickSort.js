
/**
 * Imports swap utility method and sortbutton and randomize array buttons.
 */
import { sortButton, randArr } from "../Animation/Animation.js";
import { swap } from "./Swap.js";

/**
 * Quick sort function.
 * @param {object} childNodes The childnodes to be sorted.
 */
async function quickSort(childNodes) {

  // Wait for new pivots.
  await _qs(childNodes, 0, childNodes.length - 1);
}

/**
 * Partition the array and find the pivots for each partition.
 * @param {object} arr The full array of nodes.
 * @param {number} l The left bound of the array (0).
 * @param {number} r The right bound of the array.
 */
async function _qs(arr, l, r) {
    
    // Base case, return if there's no element or at most 1 element in the array of nodes.
    if (l >= r) {
    randArr.disabled = false;
    sortButton.disabled = false;
    return;
  }

  sortButton.disabled = true;
  randArr.disabled = true;

  // Find the pivots on the left and right sub arrays.
  let p = await partition(arr, l, r);
  await _qs(arr, l, p - 1);
  await _qs(arr, p + 1, r);
}

/**
 * Parition the array and find the new pivot.
 * @param {object} arr The array of nodes.
 * @param {number} l Lower bound of array.
 * @param {number} r Upper bound of the array.
 */
async function partition(arr, l, r) {
  let i = l - 1;

  // Choose last element in array to be the pivot.
  let pivot = arr[r].style.height;

  // Set the color of the pivot.
  arr[r].style.backgroundColor = COLORS.PIVOT;

  // Move all elements less than pivot to left sub array, and every thing else to the right of the pivot.
  for (let j = l; j < r; j++) {
    if (parseInt(arr[j].style.height) < parseInt(pivot)) {
      i++;
      if (j == r) {
        arr[j].style.backgroundColor = COLORS.PIVOT;
      }
      await swap(arr[i], arr[j]);
    }
  }
  // Swap pivot with position i + 1. Now all elements to left are < pivot, all elements to right are > pivot.
  await swap(arr[i + 1], arr[r]);
  return i + 1;
}

export { quickSort };
