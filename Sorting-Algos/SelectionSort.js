import {sortButton, randArr} from '../Animation/Animation.js';

/**
 * Exchange node with the smallest element.
 * @param {object} block1 The first div object with height and text properties.
 * @param {object} block2 The second div object with height and text properties.
 * @param {number} minHeight The smallest height.
 * @param {string} minText The smallest height in text.
 * @param {number} tempHeight Temporary height for swapping.
 * @param {string} tempText Temporary text for swapping.
 */
async function _exchangeWithMin(block1, block2, minHeight, minText, tempHeight, tempText) {
            
    block1.style.backgroundColor = COLORS.SWAP_COLOR;
    block2.style.backgroundColor = COLORS.COMPARE_COLOR;

    let sliderSelection = document.getElementById("customRange1");
    await delay(sliderSelection.value);

    block1.style.height = minHeight;
    block1.textContent = minText;

    block2.style.height = tempHeight;
    block2.textContent = tempText;

    block2.style.backgroundColor = COLORS.PRE_SWAP_COLOR;
    block1.style.backgroundColor = COLORS.FINAL_SWAP_COLOR;

}

/**
 * Perform selection sort.
 * @param {object} childnodes The array of objects. 
 */
async function selectionSort(childnodes) {
    randArr.disabled = true;

    for (let i = 0; i < childnodes.length; i++) {

        let minHeight = HEIGHTS.MIN_HEIGHT;
        let minText = HEIGHTS.MIN_TEXT;
        let minIdx = 0;
        let tempHeight = childnodes[i].style.height;
        let tempText = childnodes[i].textContent;

        for (let j = i; j < childnodes.length; j++) {
            if (parseInt(childnodes[j].style.height) < parseInt(minHeight)) {
                minHeight = childnodes[j].style.height; 
                minText = childnodes[j].textContent;
                minIdx = j;
            }
        }

        await _exchangeWithMin(childnodes[i], childnodes[minIdx], minHeight, minText, tempHeight, tempText);
        
    }
    for (let i = 0; i < childnodes.length; i++) {
        childnodes[i].style.backgroundColor = COLORS.PRE_SWAP_COLOR;
    }

    sortButton.disabled = false;
    randArr.disabled = false;

}

export {selectionSort};

