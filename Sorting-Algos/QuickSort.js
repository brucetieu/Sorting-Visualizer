

import {sortButton, randArr} from '../Animation/Animation.js';
import {swap} from './Swap.js';



async function quickSort(childNodes) {
    await _qs(childNodes, 0, childNodes.length - 1);
}

async function _qs(arr, l, r) {
    if (l >= r) {
        randArr.disabled = false;
        sortButton.disabled = false;
        return;
    }

    sortButton.disabled = true;
    randArr.disabled = true;
    
    let p = await partition(arr, l, r);
    await _qs(arr, l, p-1);
    await _qs(arr, p+1, r);

}

async function partition(arr, l, r) {

    let i = l - 1
    let pivot = arr[r].style.height;

    arr[r].style.backgroundColor = "#9370DB";

    for (let j = l; j < r; j++) {
        // arr[r].style.backgroundColor = "#9370DB";
        if (parseInt(arr[j].style.height) < parseInt(pivot)) {
            i++;
            if (j == r) {
                arr[j].style.backgroundColor = "#9370DB";
            }
            await swap(arr[i], arr[j]);

        }
    }
    // Swap pivot with position i + 1.
    await swap(arr[i+1], arr[r]); 
    return i + 1;

}

export {quickSort};