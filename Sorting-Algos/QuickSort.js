

import {sortButton, randArr} from '../Animation/Animation.js';
import {swap} from './Swap.js';



async function quickSort(childNodes) {

    await _qs(childNodes, 0, childNodes.length - 1);
}

async function _qs(arr, l, r) {
    if (l >= r) return;

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
            await swap(arr[i], arr[j]);
        }
    }
    // Swap pivot with position i + 1.
    await swap(arr[i+1], arr[r]); 

    // arr[i+1].style.backgroundColor = COLORS.SWAP_COLOR;
    // arr[r].style.backgroundColor = COLORS.COMPARE_COLOR;

    // let sliderInsertion = document.getElementById("customRange1");
    // await delay(sliderInsertion.value);

    // let tempHeight = arr[i+1].style.height
    // arr[i+1].style.height = arr[r].style.height;
    // arr[r].style.height = tempHeight;

    // let tempText = arr[i+1].textContent
    // arr[i+1].textContent = arr[r].textContent;
    // arr[r].textContent = tempText;

    // arr[i+1].style.backgroundColor = COLORS.PRE_SWAP_COLOR;
    // arr[r].style.backgroundColor = COLORS.PRE_SWAP_COLOR;

    return i + 1;
    

}

export {quickSort};