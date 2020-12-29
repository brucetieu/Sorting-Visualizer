import { sortButton, randArr } from "../Animation/Animation.js";

async function mergeSort(childnodes, aux, lo, hi) {
  if (hi <= lo) {
    return;
  }

  sortButton.disabled = true;
  randArr.disabled = true;

  let mid = Math.floor(lo + (hi - lo) / 2);
  await mergeSort(childnodes, aux, lo, mid);
  await mergeSort(childnodes, aux, mid + 1, hi);
  return merge(childnodes, aux, lo, mid, hi);
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
      i++;
    } else {
      await delay(slider.value);
      childnodes[k].style.height = aux[j][0];
      childnodes[k].textContent = aux[j][1];
      childnodes[k].style.backgroundColor = COLORS.SWAP_COLOR;
      j++;
    }
    childnodes[k].style.backgroundColor = COLORS.SWAP_COLOR;
    k++;
  }

  while (i <= mid) {
    await delay(slider.value);
    childnodes[k].style.height = aux[i][0];
    childnodes[k].textContent = aux[i][1];
    childnodes[k].style.backgroundColor = COLORS.SWAP_COLOR;
    i++;
    k++;
  }

  return childnodes;
}

export { mergeSort };
