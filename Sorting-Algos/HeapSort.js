import {sortButton, randArr} from '../Animation/Animation.js';
import {swap} from './Swap.js';

/**
 * Locate the max node between left and right child.
 * @param {Array} childNodes The array of divs.
 * @param {number} index The index of parent node.
 */
function locateMaxChild(childNodes, index) {
    let leftChild = (2 * index) + 1;
    let rightChild = (2 * index) + 2;

    if (leftChild < childNodes.length && rightChild < childNodes.length) {
        if (parseInt(childNodes[leftChild].style.height) < parseInt(childNodes[rightChild].style.height)) {
            return rightChild;
        }
        return leftChild;
    }
    else if (rightChild >= childNodes.length) {
        return leftChild;
    }
}

/**
 * Trickle down smaller element to preverse max heap order.
 * @param {Array} childNodes The array of divs.
 * @param {number} index The index of the parent node.
 * @param {number} N The size of heap.
 */
async function trickle_down(childNodes, index, N) {

    while ((2 * index) + 1 < N) {
        let maxChild = locateMaxChild(childNodes, index);

        if (parseInt(childNodes[index].style.height) < parseInt(childNodes[maxChild].style.height)) {
            await swap(childNodes[index], childNodes[maxChild]);
        }
        index = maxChild;
    }

}

/**
 * Perform heapsort.
 * @param {Array} childNodes The array of divs.
 * @param {number} index The index of last element in heap.
 */
async function heapSort(childNodes, index) {
    randArr.disabled = true;
    sortButton.disabled = true;

    let N = index;

    // Heapify
    for (let i = Math.floor(N / 2); i >= 0; i--) {
        await trickle_down(childNodes, i, N);
    }

    // Heap sort
    while (N >= 0) {
        await swap(childNodes[0], childNodes[N]);
        childNodes[N].style.backgroundColor = COLORS.FINAL_SWAP_COLOR;
        N--;
        await trickle_down(childNodes, 0, N);
    }

    // Reset div color
    for (let i = 0; i <= index; i++) {
        childNodes[i].style.backgroundColor = COLORS.PRE_SWAP_COLOR;
    }

    randArr.disabled = false;
    sortButton.disabled = false;
}


export {heapSort}