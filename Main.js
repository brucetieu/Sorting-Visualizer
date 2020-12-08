// const div = document.createElement("div");
// div.className = "flex-container";
const div = document.querySelectorAll(".flex-container")[0];
const sortButton = document.getElementById("btn");

console.log(sortButton);

let array = [7,3,2,9,67,11,23,45,99,5];

// function putArrayOnPage(inputArr) {
    // Loop through the array and create bars for each number.
    for (let i = 0; i < array.length; i++) {
        let blockDivs = document.createElement("div");
        let text = document.createTextNode(array[i]);

        blockDivs.className = "block" + i;

        blockDivs.style.width = "50px";
        blockDivs.style.height = (array[i] * 6) + "px";
        blockDivs.style.backgroundColor = "lightblue";
        blockDivs.style.marginRight = "10px";
        blockDivs.style.textAlign = "center";
        blockDivs.style.order = i + 1;

        blockDivs.appendChild(text);
        div.appendChild(blockDivs);
    }
    document.body.appendChild(div);
// }

console.log(div);

function bubbleSort() {
    let size = array.length;

    let swapped;
    for (let i = 0; i < size - 1; i++)  
    { 
        swapped = false; 
        for (let j = 0; j < size - i - 1; j++)  
        { 
            if (parseInt(div.childNodes[j].style.height) > parseInt(div.childNodes[j+1].style.height))  
            { 

                let temp = div.childNodes[j].style.height
                div.childNodes[j].style.height = div.childNodes[j+1].style.height; 
                div.childNodes[j+1].style.height = temp; 

                let temp2 = div.childNodes[j].textContent;
                div.childNodes[j].textContent = div.childNodes[j+1].textContent;
                div.childNodes[j+1].textContent = temp2
                
                swapped = true; 
            } 
        } 

        // IF no two elements were  
        // swapped by inner loop, then break 
        if (swapped == false) 
            break; 
    }
    console.log(array);
    // putArrayOnPage(array); 
}
console.log(div.childNodes);

sortButton.addEventListener("click", bubbleSort);