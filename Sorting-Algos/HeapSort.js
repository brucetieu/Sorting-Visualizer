import {sortButton, randArr} from '../Animation/Animation.js';
import {swap} from './Swap.js';


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

async function trickle_down(childNodes, index, N) {
    console.log(N);
    while ((2 * index) + 1 < N) {
        let maxChild = locateMaxChild(childNodes, index);
        console.log(maxChild);

        if (parseInt(childNodes[index].style.height) < parseInt(childNodes[maxChild].style.height)) {
            await swap(childNodes[index], childNodes[maxChild]);
        }
        index = maxChild;
    }

    // return childNodes;

}

async function heapSort(childNodes, index) {
    let N = index;


    // Heapify
    for (let i = Math.floor(N / 2); i >= 0; i--) {
        await trickle_down(childNodes, i, N);
    }

    // Heap sort
    while (N >= 0) {
        await swap(childNodes[0], childNodes[N]);
        N--;
        await trickle_down(0, N);
    }
}


export {heapSort}