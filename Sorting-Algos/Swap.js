async function swap(block1, block2) {

    block1.style.backgroundColor = COLORS.SWAP_COLOR;
    block2.style.backgroundColor = COLORS.COMPARE_COLOR;

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

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(arr);
        if (!(parseInt(arr[i].style.height) <= parseInt(arr[i+1].style.height))) {
            return false;
        }
    }

    for (let j = 0; j < arr.length; j++) {
        arr[j].style.backgroundColor = COLORS.PRE_SWAP_COLOR;
    }

    return true;
}
export {swap, isSorted};