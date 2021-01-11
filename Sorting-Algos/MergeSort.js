import { sortButton, randArr } from "../Animation/Animation.js";

/**
 * Perform merge sort.
 * @param {Array} childnodes The array of object nodes.
 * @param {Array} aux The auxilary array for storing the sorted arrays.
 * @param {number} lo Lower bound of array.
 * @param {number} hi Upper bound of array.
 */
async function mergeSort(childnodes, aux, lo, hi) {
  // Base case: a one element array is sorted.
  if (hi <= lo) {
    return;
  }

  sortButton.disabled = true;
  randArr.disabled = true;

  let mid = Math.floor(lo + (hi - lo) / 2);
  await mergeSort(childnodes, aux, lo, mid); // Split left.
  await mergeSort(childnodes, aux, mid + 1, hi); // Split right.
  return merge(childnodes, aux, lo, mid, hi); // Merge left and right sub arrays.
}

/**
 * Merge sorted sub arrays together.
 * @param {Array} childnodes The array of object nodes.
 * @param {Array} aux The auxilary array for storing the sorted from merging.
 * @param {number} lo The lower bound of array.
 * @param {number} mid The middle element of the array.
 * @param {number} hi The upper bound element of array.
 */
async function merge(childnodes, aux, lo, mid, hi) {

  let slider = document.getElementById("customRange1");
  
  // Copy elements from the original array into the aux array. We are concerned with the height and textcontent of the divs, stored as a list of lists.
  for (let k = lo; k <= hi; k++) {
    aux[k] = [childnodes[k].style.height, childnodes[k].textContent];
  }

  let i = lo;
  let j = mid + 1;
  let k = lo;

  // Logic for merging two sorted subarrays.
  while (i <= mid && j <= hi) {

    // The left array's value is less than the right's, so overrwrite the values of the original array of childnodes with it.
    if (parseInt(aux[i][0]) < parseInt(aux[j][0])) {
      await delay(slider.value);
      childnodes[k].style.height = aux[i][0];
      childnodes[k].textContent = aux[i][1];
      childnodes[k].style.backgroundColor = COLORS.SWAP_COLOR;
      i++;
    } else {
      await delay(slider.value);
      childnodes[k].style.height = aux[j][0];
      childnodes[k].textContent = aux[j][1];
      childnodes[k].style.backgroundColor = COLORS.SWAP_COLOR;
      j++;
    }
    childnodes[k].style.backgroundColor = COLORS.SWAP_COLOR;
    k++;
  }

  // Update the childnodes with any remaining sorted values in the left sub array.
  while (i <= mid) {
    await delay(slider.value);
    childnodes[k].style.height = aux[i][0];
    childnodes[k].textContent = aux[i][1];
    childnodes[k].style.backgroundColor = COLORS.SWAP_COLOR;
    i++;
    k++;
  }

  return childnodes;
}

export { mergeSort };
