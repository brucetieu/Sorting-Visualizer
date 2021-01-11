import {sortButton, randArr} from '../Animation/Animation.js';
import {swap} from './Swap.js';

async function heapSort(childNodes, index) {
    let N = index;

    // Heapify
    for (let i = Math.floor(N / 2); i >= 0; i--) {
        trickle_down(childNodes, i, N);
    }

    // Heap sort
    while (N >= 0) {
        swap(childNodes[0], childNodes[N]);
        N--;
        trickle_down(0, N);

    }


}

function trickle_down(childNodes, index, N) {
    while ((2 * index) + 1 < N) {
        let maxChild = locateMaxChild(index);

        if (childNodes[index] < childNodes[maxChild]) {
            swap(index, maxChild);
        }
        let index = maxChild;
    }

    return childNodes;

}

function locateMaxChild(childNodes, index) {
    let leftChild = (2 * index) + 1;
    let rightChild = (2 * index) + 2;

    if (leftChild < childNodes.length && rightChild < childNodes.length) {
        if (childNodes[leftChild] < childNodes[rightChild]) {
            return rightChild;
        }
        return leftChild;
    }
    else if (right_child >= childNodes.length) {
        return leftChild;
    }
}

export {heapSort}