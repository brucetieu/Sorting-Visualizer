/* Import all sorting functions here. */
import { bubbleSort } from "../Sorting-Algos/BubbleSort.js";
import { insertionSort } from "../Sorting-Algos/InsertionSort.js";
import { selectionSort } from "../Sorting-Algos/SelectionSort.js";
import { shellSort } from "../Sorting-Algos/ShellSort.js";
import { quickSort } from "../Sorting-Algos/QuickSort.js";
import { mergeSort } from "../Sorting-Algos/MergeSort.js";
import { heapSort } from "../Sorting-Algos/HeapSort.js";
import { isSorted } from "../Sorting-Algos/Swap.js";

/* Query Selectors */
var sortButton = document.getElementById("btn");
var options = document.getElementById("sorting-ctrl");
var randArr = document.getElementById("rand_arr");

/* Perform animation when sort button is clicked. */
sortButton.addEventListener("click", async function () {

  var childNodes = canvas.getDiv.childNodes;
  var len = childNodes.length;

  // If there's nothing in the page and user clicks the button, do nothing.
  if (canvas.getDiv == null) return;

  /* Perform the visualization based on what is chosen from the dropdown. */
  if (options.value == SORTING_ALGORITHM.BUBBLE_SORT) {
    sortButton.disabled = true;
    bubbleSort(childNodes);
  }
  if (options.value == SORTING_ALGORITHM.INSERTION_SORT) {
    sortButton.disabled = true;
    insertionSort(childNodes);
  }
  if (options.value == SORTING_ALGORITHM.SELECTION_SORT) {
    sortButton.disabled = true;
    selectionSort(childNodes);
  }
  if (options.value == SORTING_ALGORITHM.SHELLSORT) {
    sortButton.disabled = true;
    shellSort(childNodes);
  }
  if (options.value == SORTING_ALGORITHM.QUICKSORT) {
    quickSort(childNodes);
  }
  if (options.value == SORTING_ALGORITHM.MERGESORT) {

    // Create the auxilary array to store a copy of the child nodes.
    let aux = Array.apply(null, Array(len));

    sortButton.disabled = true;
    randArr.disabled = true;

    // Wait for the result of the final array from the mergesort.
    let result = await mergeSort(canvas.getDiv.childNodes, aux, 0, len - 1);

    // If the array is sorted, enable the randomize button and sort button.
    if (isSorted(result)) {
      sortButton.disabled = false;
      randArr.disabled = false;
    }
  }
  if (options.value == SORTING_ALGORITHM.HEAPSORT) {
    heapSort(canvas.getDiv.childNodes, len - 1);
  }
});

export { sortButton, randArr };
