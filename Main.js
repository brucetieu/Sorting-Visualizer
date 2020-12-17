// const div = document.createElement("div");
// div.className = "flex-container";

class Canvas {
    constructor(array) {
        this.nums = [];
        this.MAX = 100;
        this.MIN = 5;
        this.MAX_ARR_ELEMENTS = 20;
    }

    // Methods
    createBlocksForSorting(){
        for (let i = 0; i < this.MAX_ARR_ELEMENTS; i++) {
            let randNum = this._getRandom(this.MIN, this.MAX);
            this.nums.push(randNum);
        }

        return this.nums;
    }

    _getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    displayNumsOnCanvas() {
        const div = document.querySelectorAll(".flex-container")[0];

        for (let i = 0; i < this.nums.length; i++) {
            let blockDivs = document.createElement("div");
            let text = document.createTextNode(this.nums[i]);
    
            blockDivs.className = "block" + i;
    
            blockDivs.style.width = "35px";
    
            blockDivs.style.height = (this.nums[i] * 6) + "px"; 
            
            blockDivs.style.backgroundColor = "lightblue";
            blockDivs.style.marginRight = "10px";
            blockDivs.style.textAlign = "center";
            blockDivs.style.fontSize = "small";
            blockDivs.style.order = i + 1;
    
            blockDivs.appendChild(text);
            div.appendChild(blockDivs);
        }
    }
}
// const div = document.querySelectorAll(".flex-container")[0];
const sortButton = document.getElementById("btn");
const randomizeArr = document.getElementById("rand_arr");

const canvas = new Canvas();
canvas.createBlocksForSorting();
// randomizeArr.addEventListener("click", canvas.displayNumsOnCanvas());
// console.log(sortButton);

// let array = [65,39,89,37,54,62,23,67,11,23,45,99,5,8,10,20,21,87,65,10];

// // function putArrayOnPage(inputArr) {
//     // Loop through the array and create bars for each number.
//     for (let i = 0; i < array.length; i++) {
//         let blockDivs = document.createElement("div");
//         let text = document.createTextNode(array[i]);

//         blockDivs.className = "block" + i;

//         blockDivs.style.width = "35px";

//         blockDivs.style.height = (array[i] * 6) + "px"; 
        

//         blockDivs.style.backgroundColor = "lightblue";
//         blockDivs.style.marginRight = "10px";
//         blockDivs.style.textAlign = "center";
//         blockDivs.style.fontSize = "small";
//         blockDivs.style.order = i + 1;

//         blockDivs.appendChild(text);
//         div.appendChild(blockDivs);
//     }
//     // document.body.appendChild(div);
// // }

// console.log(div);

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function bubbleSort() {
//     let size = array.length;

//     let swapped;
//     for (let i = 0; i < size - 1; i++)  
//     { 
//         // div.childNodes[i].style.backgroundColor = "aquamarine";
//         swapped = false; 
//         for (let j = 0; j < size - i - 1; j++)  
//         { 
//             if (parseInt(div.childNodes[j].style.height) > parseInt(div.childNodes[j+1].style.height))  
//             { 

//                 div.childNodes[j].style.backgroundColor = "lightcoral";
//                 div.childNodes[j+1].style.backgroundColor = "lightcoral";

//                 let temp = div.childNodes[j].style.height
//                 div.childNodes[j].style.height = div.childNodes[j+1].style.height; 
//                 div.childNodes[j+1].style.height = temp;
                
//                 let temp2 = div.childNodes[j].textContent;
//                 div.childNodes[j].textContent = div.childNodes[j+1].textContent;
//                 div.childNodes[j+1].textContent = temp2

//                 await delay(500);

//                 div.childNodes[j].style.backgroundColor = "lightblue";
//                 div.childNodes[j+1].style.backgroundColor = "lightblue";
            
//                 swapped = true; 
//             }

//         } 
//         div.childNodes[div.childNodes.length - 1 - i].style.backgroundColor = "orange";

//         // IF no two elements were  
//         // swapped by inner loop, then break 
//         if (swapped == false) {
//             break; 
//         }
//     }

//     for (let i = 0; i < size; i++) {
//         div.childNodes[i].style.backgroundColor = "lightblue";
//     }
// }
// console.log(div.childNodes);

// sortButton.addEventListener("click", bubbleSort);