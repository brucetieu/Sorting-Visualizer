import {sortButton, randArr} from '../Animation/Animation.js';
import {swap} from './Swap.js';

// Source: Algorithms 4th Edition - Sedgewick
/**
 * Perform the shellsort algorithm.
 * @param {object} childnodes The array of nodes.
 */
async function shellSort(childnodes) {
    randArr.disabled = true;

    let N = childnodes.length;
    let h = 1;

    // Use Knuth's 3x + 1 increment sequence.
    while (h < Math.floor(N/3)) {
        h = 3*h + 1;
    }

    // h-sort the array.
    while (h >= 1) {
        for (let i = h; i < N; i++) {
            for (let j = i; j >= h && parseInt(childnodes[j].style.height) < parseInt(childnodes[j-h].style.height); j -= h) {
                await swap(childnodes[j], childnodes[j-h]);
            }
        }
        h = Math.floor(h/3);
    }
    sortButton.disabled = false;
    randArr.disabled = false;
}

export {shellSort};