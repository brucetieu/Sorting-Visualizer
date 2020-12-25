
import {sortButton, randArr} from '../Animation.js';
/**
 * Bubble sort function. Returns a promise since we have 'async'.
 * @param {*} childnodes The div child nodes to be swapped. 
 */
async function bubbleSort(childnodes) {
    randArr.disabled = true;
    let size = childnodes.length;

    let swapped;
    for (let i = 0; i < size - 1; i++)  
    { 
        swapped = false; 
        for (let j = 0; j < size - i - 1; j++)  
        { 
            if (parseInt(childnodes[j].style.height) > parseInt(childnodes[j+1].style.height))  
            { 

                childnodes[j].style.backgroundColor = COLORS.SWAP_COLOR;
                childnodes[j+1].style.backgroundColor = COLORS.SWAP_COLOR;

                let temp = childnodes[j].style.height
                childnodes[j].style.height = childnodes[j+1].style.height; 
                childnodes[j+1].style.height = temp;
                
                let temp2 = childnodes[j].textContent;
                childnodes[j].textContent = childnodes[j+1].textContent;
                childnodes[j+1].textContent = temp2
                
                let slider = document.getElementById("customRange1");
                
                await delay(slider.value);

                childnodes[j].style.backgroundColor = COLORS.PRE_SWAP_COLOR;
                childnodes[j+1].style.backgroundColor = COLORS.PRE_SWAP_COLOR;
            
                swapped = true; 
            }

        } 
        childnodes[childnodes.length - 1 - i].style.backgroundColor = COLORS.FINAL_SWAP_COLOR;

        // IF no two elements were  
        // swapped by inner loop, then break 
        if (swapped == false) {
            break; 
        }
    }
    for (let i = 0; i < size; i++) {
        childnodes[i].style.backgroundColor = COLORS.PRE_SWAP_COLOR;
    }

    sortButton.disabled = false;
    randArr.disabled = false;
}

export {bubbleSort};
