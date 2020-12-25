// Import all sorting functions here.

import {bubbleSort} from './Sorting-Algos/BubbleSort.js';
import {insertionSort} from './Sorting-Algos/InsertionSort.js';
import {selectionSort} from './Sorting-Algos/SelectionSort.js';

var sortButton = document.getElementById("btn");
var options = document.getElementById("sorting-ctrl");
var randArr = document.getElementById("rand_arr");

// Perform animation when sort button is clicked.
sortButton.addEventListener("click", function() {

    if (canvas.getDiv == null) return; 

    if (options.value == SORTING_ALGORITHM.BUBBLE_SORT) {
        sortButton.disabled = true;
        bubbleSort(canvas.getDiv.childNodes);
    }
    else if (options.value == SORTING_ALGORITHM.INSERTION_SORT) {
        sortButton.disabled = true;
        insertionSort(canvas.getDiv.childNodes);
    }
    else if (options.value == SORTING_ALGORITHM.SELECTION_SORT) {
        sortButton.disabled = true;
        selectionSort(canvas.getDiv.childNodes);
    }

});

export {sortButton, randArr};