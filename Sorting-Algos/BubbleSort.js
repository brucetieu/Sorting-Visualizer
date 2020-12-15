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

                await delay(1000);

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
            div.childNodes[0].style.backgroundColor = "orange";
            break; 
        }
    }
    for (let i = 0; i < size; i++) {
        childnodes[i].style.backgroundColor = "lightblue";
    }
}