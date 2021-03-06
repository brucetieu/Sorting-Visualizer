import {sortButton, randArr} from '../Animation/Animation.js';
import {swap} from './Swap.js'

/**
 * Perform insertion sort.
 * @param {Array} childnodes The array of divs.
 */
async function insertionSort(childnodes) {
    randArr.disabled = true;
    for (let i = 1; i < childnodes.length; i++) {

        let j = i;

        while (j > 0 && parseInt(childnodes[j-1].style.height) > parseInt(childnodes[j].style.height)) {

            await swap(childnodes[j], childnodes[j-1]);
            j--;
        }

    }
    sortButton.disabled = false;
    randArr.disabled = false;
}

export {insertionSort};

