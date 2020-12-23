const randArrSelection = document.getElementById("rand_arr");

async function _swap(block1, block2, minHeight, minText, tempHeight, tempText) {
            
    block1.style.backgroundColor = SWAP_COLOR;
    block2.style.backgroundColor = "lightgreen";

    let sliderSelection = document.getElementById("customRange1");
    await delay(sliderSelection.value);

    block1.style.height = minHeight;
    block1.textContent = minText;

    block2.style.height = tempHeight;
    block2.textContent = tempText;

    block2.style.backgroundColor = PRE_SWAP_COLOR;
    block1.style.backgroundColor = "orange";

}
async function selectionSort(childnodes) {
    randArrSelection.disabled = true;

    for (let i = 0; i < childnodes.length; i++) {

        let minHeight = "10000px";
        let minText = "10000px";
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

        await _swap(childnodes[i], childnodes[minIdx], minHeight, minText, tempHeight, tempText);
        
        // childnodes[i].style.backgroundColor = SWAP_COLOR;
        // childnodes[minIdx].style.backgroundColor = "lightgreen";

        // let sliderSelection = document.getElementById("customRange1");
        // await delay(sliderSelection.value);

        // childnodes[i].style.height = minHeight;
        // childnodes[i].textContent = minText;

        // childnodes[minIdx].style.height = tempHeight;
        // childnodes[minIdx].textContent = tempText;

        // childnodes[minIdx].style.backgroundColor = PRE_SWAP_COLOR;
        // childnodes[i].style.backgroundColor = "orange";
        
    }
    for (let i = 0; i < childnodes.length; i++) {
        childnodes[i].style.backgroundColor = PRE_SWAP_COLOR;
    }

    sortButtonSelection.disabled = false;
    randArrSelection.disabled = false;

}

let sortButtonSelection = document.getElementById("btn");
let optionSelection = document.getElementById("sorting-ctrl");

// Perform animation when sort button is clicked.
sortButtonSelection.addEventListener("click", function() {

    if (canvas.getDiv == null) return; 

    if (optionSelection.value == "selection") {
        sortButtonSelection.disabled = true;
        selectionSort(canvas.getDiv.childNodes);
    }

});