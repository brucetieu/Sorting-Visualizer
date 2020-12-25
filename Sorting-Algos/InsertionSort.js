


import {sortButton, randArr} from '../Animation.js';

async function _swap(block1, block2) {
    block2.style.backgroundColor = COLORS.SWAP_COLOR;
    block1.style.backgroundColor = COLORS.MIN_ELEMENT_COLOR;
    // block2.style.backgroundColor = SWAP_COLOR;

    let sliderInsertion = document.getElementById("customRange1");
    await delay(sliderInsertion.value);

    let tempHeight = block1.style.height
    block1.style.height = block2.style.height;
    block2.style.height = tempHeight;

    let tempText = block1.textContent
    block1.textContent = block2.textContent;
    block2.textContent = tempText;

    block1.style.backgroundColor = COLORS.PRE_SWAP_COLOR;
    block2.style.backgroundColor = COLORS.PRE_SWAP_COLOR;
}

async function insertionSort(childnodes) {
    randArr.disabled = true;
    for (let i = 1; i < childnodes.length; i++) {

        let j = i;

        while (j > 0 && parseInt(childnodes[j-1].style.height) > parseInt(childnodes[j].style.height)) {

            await _swap(childnodes[j], childnodes[j-1]);
            j--;
        }

    }
    sortButton.disabled = false;
    randArr.disabled = false;
}

export {insertionSort};

