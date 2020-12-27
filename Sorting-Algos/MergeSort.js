
import {sortButton, randArr} from '../Animation/Animation.js';
import {swap} from './Swap.js';

async function mergeSort(childnodes, lo, hi) {
    if (lo < hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);
        // let slider = document.getElementById("customRange1");
        // await delay(slider.value);

        await mergeSort(childnodes, lo, mid);
        await mergeSort(childnodes, mid + 1, hi);
        await merge(childnodes, lo, mid, hi);
    }
}

async function merge(childnodes, lo, mid, hi) {
    let aux = [];

    for (let x = 0; x < hi; x++) {
        aux.push(x);
    }

    let i = lo;
    let j = mid + 1;
    let k = lo;

    let slider = document.getElementById("customRange1");
    // await delay(slider.value);

    while (i < mid && j < hi) {
        if (parseInt(childnodes[i].style.height) <= parseInt(childnodes[j].style.height)) {
            await delay(slider.value);
            aux[k] = childnodes[i];
            i++;
        }
        else {
            await delay(slider.value);
            aux[k] = childnodes[j];
            j++;
        }
        k++;
    }

    while (i <= mid) {
        await delay(slider.value);
        aux[k] = childnodes[i];
        i++;
        k++;
    }

    while (j < hi) {
        await delay(slider.value);
        aux[k] = childnodes[j];
        j++;
        k++;
    }

    await delay(slider.value);
    childnodes = aux;

    console.log(childnodes);
}

export {mergeSort};