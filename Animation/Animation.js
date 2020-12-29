// Import all sorting functions here.

import {bubbleSort} from '../Sorting-Algos/BubbleSort.js'
import {insertionSort} from '../Sorting-Algos/InsertionSort.js';
import {selectionSort} from '../Sorting-Algos/SelectionSort.js';
import {shellSort} from '../Sorting-Algos/ShellSort.js';
import {quickSort} from '../Sorting-Algos/QuickSort.js';
import {mergeSort} from '../Sorting-Algos/MergeSort.js';
import {isSorted} from '../Sorting-Algos/Swap.js';

var sortButton = document.getElementById("btn");
var options = document.getElementById("sorting-ctrl");
var randArr = document.getElementById("rand_arr");

// Perform animation when sort button is clicked.
sortButton.addEventListener("click", async function() {

    if (canvas.getDiv == null) return; 

    if (options.value == SORTING_ALGORITHM.BUBBLE_SORT) {
        sortButton.disabled = true;
        bubbleSort(canvas.getDiv.childNodes);
    }
    if (options.value == SORTING_ALGORITHM.INSERTION_SORT) {
        sortButton.disabled = true;
        insertionSort(canvas.getDiv.childNodes);
    }
    if (options.value == SORTING_ALGORITHM.SELECTION_SORT) {
        sortButton.disabled = true;
        selectionSort(canvas.getDiv.childNodes);
    }
    if (options.value == SORTING_ALGORITHM.SHELLSORT) {
        sortButton.disabled = true;
        shellSort(canvas.getDiv.childNodes);
    }
    if (options.value == SORTING_ALGORITHM.QUICKSORT) {
        quickSort(canvas.getDiv.childNodes);
    }
    if (options.value == SORTING_ALGORITHM.MERGESORT) {

        let len = canvas.getDiv.childNodes.length;
        let aux = Array.apply(null, Array(len));

        sortButton.disabled = true;
        randArr.disabled = true;

        let result = await mergeSort(canvas.getDiv.childNodes, aux, 0, len - 1);
        
        console.log(isSorted(result))
        
        if (isSorted(result)) {
            sortButton.disabled = false;
            randArr.disabled = false;
        }
     
    }

});

export {sortButton, randArr};