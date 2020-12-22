
const randArrInsertion = document.getElementById("rand_arr");

async function _swap(block1, block2, j) {
    block1.style.backgroundColor = SWAP_COLOR;
    block2.style.backgroundColor = SWAP_COLOR;

    let tempHeight = block1.style.height
    block1.style.height = block2.style.height;
    block2.style.height = tempHeight;

    let tempText = block1.textContent
    block1.textContent = block2.textContent;
    block2.textContent = tempText;

    let sliderInsertion = document.getElementById("customRange1");
    await delay(sliderInsertion.value);

    block1.style.backgroundColor = PRE_SWAP_COLOR;
    block2.style.backgroundColor = PRE_SWAP_COLOR;
}

async function insertionSort(childnodes) {
    randArrInsertion.disabled = true;
    for (let i = 1; i < childnodes.length; i++) {

        let j = i;

        // let slider2 = document.getElementById("customRange1");
        // await delay(slider2.value);

        while (j > 0 && parseInt(childnodes[j-1].style.height) > parseInt(childnodes[j].style.height)) {

            await _swap(childnodes[j], childnodes[j-1], j)
            // childnodes[j].style.backgroundColor = SWAP_COLOR;
            // childnodes[j-1].style.backgroundColor = SWAP_COLOR;

            // let tempHeight = childnodes[j].style.height
            // childnodes[j].style.height = childnodes[j-1].style.height;
            // childnodes[j-1].style.height = tempHeight;

            // let tempText = childnodes[j].textContent
            // childnodes[j].textContent = childnodes[j-1].textContent;
            // childnodes[j-1].textContent = tempText;

            // let sliderInsertion = document.getElementById("customRange1");
            // await delay(sliderInsertion.value);

            // childnodes[j].style.backgroundColor = PRE_SWAP_COLOR;
            // childnodes[j-1].style.backgroundColor = PRE_SWAP_COLOR;
        
            j--;
        }

    }
    sortButtonInsertion.disabled = false;
    randArrInsertion.disabled = false;
}

let sortButtonInsertion = document.getElementById("btn");
let optionInsertion= document.getElementById("sorting-ctrl");

// Perform animation when sort button is clicked.
sortButtonInsertion.addEventListener("click", function() {

    if (canvas.getDiv == null) return; 

    if (optionInsertion.value == "insertion") {
        sortButtonInsertion.disabled = true;
        insertionSort(canvas.getDiv.childNodes);
    }

});