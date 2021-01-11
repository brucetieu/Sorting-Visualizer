/**
 * Utility method for swaping array elements.
 * @param {object} block1 The first div object which contains the height and text contents of the div.
 * @param {object} block2 The second div object which contains the height and text contents of the div.
 */
async function swap(block1, block2) {
  // Highlight the blocks to be swapped.
  block1.style.backgroundColor = COLORS.SWAP_COLOR;
  block2.style.backgroundColor = COLORS.COMPARE_COLOR;

  // Change the speed of the animation according to slider's value.
  let sliderInsertion = document.getElementById("customRange1");
  await delay(sliderInsertion.value);

  // Need to swap both the height of the divs and their text contents.
  let tempHeight = block1.style.height;
  block1.style.height = block2.style.height;
  block2.style.height = tempHeight;

  let tempText = block1.textContent;
  block1.textContent = block2.textContent;
  block2.textContent = tempText;

  // Change color back to default.
  block1.style.backgroundColor = COLORS.PRE_SWAP_COLOR;
  block2.style.backgroundColor = COLORS.PRE_SWAP_COLOR;
}

/**
 * Check if an array is sorted in ascending order.
 * @param {Array} arr The resultant array.
 */
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (!(parseInt(arr[i].style.height) <= parseInt(arr[i + 1].style.height))) {
      return false;
    }
  }

  // Reset all colors to their original states.
  for (let j = 0; j < arr.length; j++) {
    arr[j].style.backgroundColor = COLORS.PRE_SWAP_COLOR;
  }

  return true;
}
export { swap, isSorted };
