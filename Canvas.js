
/**
 * Create Canvas class for creating and randomizing div blocks to be swapped.
 */
class Canvas {
    constructor() {
        this.nums = [];
        this.MAX = 100;
        this.MIN = 5;
        this.MAX_ARR_ELEMENTS = 20;
        this.div = null;
    }

    /**
     * Get the final div which holds all the randomized child nodes.
     */
    get getDiv() {
        return this.div;
    }

    /**
     * Initialize blocks for sorting.
     */
    createBlocksForSorting() {

        this.nums = [];
        
        for (let i = 0; i < this.MAX_ARR_ELEMENTS; i++) {
            let randNum = this._getRandom(this.MIN, this.MAX);
            this.nums.push(randNum);
        }

        return this.nums;
    }

    /**
     * Private method to get a random number between min and max.
     * @param {number} min Lower bound for a random number.
     * @param {number} max Upper bound for a random number.
     */
    _getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    /**
     * Display the randomized blocks of varying heights in the webpage.
     */
    displayNumsOnCanvas() {

        this.div = document.querySelectorAll(".flex-container")[0];
        canvas.createBlocksForSorting();

        this.div.innerHTML = "";

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
            this.div.appendChild(blockDivs);
        }
        console.log(this.div.childNodes);
        // return div;
    }
}

// Create a Canas Object.
const canvas = new Canvas();

