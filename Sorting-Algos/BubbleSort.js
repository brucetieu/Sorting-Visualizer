const BUBBLE = "bubble";

async function bubbleSort(childnodes) {
    let size = childnodes.length;

    let swapped;
    for (let i = 0; i < size - 1; i++)  
    { 
        // div.childNodes[i].style.backgroundColor = "aquamarine";
        swapped = false; 
        for (let j = 0; j < size - i - 1; j++)  
        { 
            if (parseInt(childnodes[j].style.height) > parseInt(childnodes[j+1].style.height))  
            { 

                childnodes[j].style.backgroundColor = "lightcoral";
                childnodes[j+1].style.backgroundColor = "lightcoral";

                let temp = childnodes[j].style.height
                childnodes[j].style.height = childnodes[j+1].style.height; 
                childnodes[j+1].style.height = temp;
                
                let temp2 = childnodes[j].textContent;
                childnodes[j].textContent = childnodes[j+1].textContent;
                childnodes[j+1].textContent = temp2
                
                let slider = document.getElementById("customRange1");
                
                // let rangeValue = async function () {
                //     let lag = slider.value;
                //     await delay(lag);
                // }

                // slider.addEventListener("input", rangeValue);
                await delay(slider.value);

                childnodes[j].style.backgroundColor = "lightblue";
                childnodes[j+1].style.backgroundColor = "lightblue";
            
                swapped = true; 
                // await delay(1000);
            }

        } 
        childnodes[childnodes.length - 1 - i].style.backgroundColor = "orange";

        // IF no two elements were  
        // swapped by inner loop, then break 
        if (swapped == false) {
            break; 
        }
    }
    for (let i = 0; i < size; i++) {
        childnodes[i].style.backgroundColor = "lightblue";
    }

    sortButton.disabled = false;
}

const sortButton = document.getElementById("btn");
const option = document.getElementById("sorting-ctrl");


sortButton.addEventListener("click", function() {

    if (canvas.getDiv == null) return; 

    if (option.value == BUBBLE) {
        sortButton.disabled = true;
        bubbleSort(canvas.getDiv.childNodes);
    }

});