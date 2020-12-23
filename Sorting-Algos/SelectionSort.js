

async function selectionSort(childnodes) {
    for (let i = 0; i < childnodes.length; i++) {
        console.log(childnodes[i])
        let minHeight = "10000px";
        let minText = childnodes[i].textContent;
        let minIdx = 0;
        let tempHeight = childnodes[i].style.height;
        // let tempHeight = childnodes[i];
        let tempText = childnodes[i].textContent;

        for (let j = i; j < childnodes.length; j++) {
            if (parseInt(childnodes[j].style.height) < parseInt(minHeight)) {
                minHeight = childnodes[j].style.height; 
                minText = childnodes[j].textContent;
                // minHeight = childnodes[j];
                // minText = childnodes[j].style.textContent;
                minIdx = j;
            }
        }
    

        childnodes[i].style.backgroundColor = SWAP_COLOR;
        childnodes[minIdx].style.backgroundColor = "lightgreen";

        let sliderSelection = document.getElementById("customRange1");
        await delay(sliderSelection.value);

        // childnodes[i] = childnodes[minIdx];
        // childnodes[minIdx] = tempHeight;
        childnodes[i].style.height = minHeight;
        childnodes[i].textContent = minText;

        childnodes[minIdx].style.height = tempHeight;

        // childnodes[i].style.textContent = minText;
        childnodes[minIdx].textContent = tempText;

        // let sliderSelection = document.getElementById("customRange1");
        // await delay(sliderSelection.value);

        // childnodes[i].style.backgroundColor = PRE_SWAP_COLOR;
        childnodes[minIdx].style.backgroundColor = PRE_SWAP_COLOR;
        childnodes[i].style.backgroundColor = "orange";
        
    }
    for (let i = 0; i < childnodes.length; i++) {
        childnodes[i].style.backgroundColor = PRE_SWAP_COLOR;
    }

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