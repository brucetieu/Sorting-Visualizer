
import {sortButton, randArr} from '../Animation/Animation.js';
import {swap} from './Swap.js';

// console.log(canvas.getDiv.childNodes);

async function mergeSort(childnodes, aux, lo, hi) {

    if (hi <= lo) return;

    let mid = Math.floor(lo + (hi - lo) / 2);

    await mergeSort(childnodes, aux, lo, mid);
    await mergeSort(childnodes, aux, mid+1, hi);
    await merge(childnodes, aux, lo, mid, hi);
    

}

async function merge(childnodes, aux, lo, mid, hi) {
    for (let k = lo; k <= hi; k++) {
        aux[k] = [childnodes[k].style.height, childnodes[k].textContent];
    }

    let slider = document.getElementById("customRange1");

    let i = lo;
    let j = mid + 1;
    let k = lo;

    // TODO: Try swapping instead of assigning.
    while (i <= mid && j <= hi) {
        if (parseInt(aux[i][0]) < parseInt(aux[j][0])) {
            await delay(slider.value);
            
            childnodes[k].style.height = aux[i][0];
            childnodes[k].textContent = aux[i][1];
            childnodes[k].style.backgroundColor = COLORS.SWAP_COLOR;
            // childnodes[k].style.backgroundColor = COLORS.PRE_SWAP_COLOR;
            // await swap(childnodes[k], aux[i]);
            // childnodes[k].style.height = aux[i].style.height;
            // childnodes[k].textContent = aux[i].textContent;
            i++;
        }
        else {
            // await swap(childnodes[k], aux[j]);
            await delay(slider.value);
            childnodes[k].style.height = aux[j][0];
            childnodes[k].textContent = aux[j][1];
            childnodes[k].style.backgroundColor = COLORS.SWAP_COLOR;
            // childnodes[k].textContent = aux[j].textContent;
            j++;
        }
        childnodes[k].style.backgroundColor = COLORS.SWAP_COLOR;
        k++;
    }

    while (i <= mid) {
        // await swap(childnodes[k], aux[i]);
        await delay(slider.value);
        childnodes[k].style.height = aux[i][0];
        childnodes[k].textContent = aux[i][1];
        childnodes[k].style.backgroundColor = COLORS.SWAP_COLOR;
        // childnodes[k].textContent = aux[i].textContent;
        i++;
        k++;
    }

    console.log(aux);
    console.log(childnodes);

    return childnodes;




    // for (let k = 0; k <= hi; k++) {
    //     if (i > mid) {
    //         childnodes[k].style.height = aux[j].style.height;
    //         childnodes[k].textContent = aux[j].textContent;
    //         j++;
    //     }
    //     else if (j > hi) {
    //         childnodes[k].style.height = aux[i].style.height;
    //         childnodes[k].textContent = aux[i].textContent;
    //         i++;
    //     }
    //     else if (parseInt(aux[j].style.height) < parseInt(aux[i].style.height)) {
    //         childnodes[k].style.height = aux[j].style.height;
    //         childnodes[k].style.textContent = aux[j].textContent;
    //         j++;
    //     }
    //     else {
    //         childnodes[k].style.height = aux[i].style.height;
    //         childnodes[k].textContent = aux[i].textContent;
    //         i++;
    //     }
    // }

    // return childnodes;
    // let aux = new Array(childnodes.length);

    // for (let i = 0; i < childnodes.length; i++) {
    //     aux[i] = childnodes[i];
    // }

    // console.log(aux)

    // let leftArray = new Array(mid - lo + 1);
    // let rightArray = new Array(hi - mid);

    // for (let i = 0; i < leftArray.length; i++) {
    //     leftArray[i] = childnodes[lo + i];
    // }
    // for (let i = 0; i < rightArray.length; i++) {
    //     rightArray[i] = childnodes[mid + i + 1];
    // }

    // let leftIndex = 0;
    // let rightIndex = 0;

    // for (let i = lo; i < hi + 1; i++) {
    //     // If there are still uncopied elements in R and L, copy minimum of the two
    //     if (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    //         if (parseInt(leftArray[leftIndex].style.height) < parseInt(rightArray[rightIndex].style.height)) {
    //            aux[i].style.height = leftArray[leftIndex].style.height;
    //            aux[i].textContent = leftArray[leftIndex].textContent;
    //            leftIndex++;
    //         } else {
    //             aux[i].style.height = rightArray[rightIndex].style.height;
    //             aux[i].textContent = rightArray[rightIndex].textContent;
    //             rightIndex++;
    //         }
    //     } else if (leftIndex < leftArray.length) {
    //         // If all elements have been copied from rightArray, copy rest of leftArray
    //         aux[i].style.height = leftArray[leftIndex].style.height;
    //         aux[i].textContent = leftArray[leftIndex].textContent;
    //         leftIndex++;
    //     } else if (rightIndex < rightArray.length) {
    //         // If all elements have been copied from leftArray, copy rest of rightArray
    //         aux[i].style.height = rightArray[rightIndex].height;
    //         aux[i].textContent = rightArray[rightIndex].textContent;
    //         rightIndex++;
    //     }
    // }

    // return aux;
    // let aux = [];

    // for (let x = 0; x < hi; x++) {
    //     aux.push(x);
    // }

    // let i = lo;
    // let j = mid + 1;
    // let k = lo;

    // let slider = document.getElementById("customRange1");
    // // await delay(slider.value);

    // while (i < mid && j < hi) {
    //     if (parseInt(childnodes[i].style.height) <= parseInt(childnodes[j].style.height)) {
    //         aux[k] = childnodes[i];
    //         i++;
    //     }
    //     else {
    //         aux[k] = childnodes[j];
    //         j++;
    //     }
    //     k++;
    // }

    // while (i <= mid) {
    //     aux[k] = childnodes[i];
    //     i++;
    //     k++;
    // }

    // while (j < hi) {
    //     aux[k] = childnodes[j];
    //     j++;
    //     k++;
    // }

    // // console.log(aux);
    // return aux;
    // childnodes = [...aux];
    // childnodes = aux;

    // console.log(childnodes);
}

export {mergeSort};