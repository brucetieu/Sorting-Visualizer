/**
 * Create Canvas class for creating and randomizing div blocks to be swapped.
 */
class Canvas {
  constructor() {
    this._nums = [];
    this._MAX = 100;  // Biggest number an element in the array can have.
    this._MIN = 5;  // Smallest number an element in the array can have.
    this._MAX_ARR_ELEMENTS = 35;  // Max number of elements that can be in the array.
    this._div = null;  // The div is initially empty.
    this._WIDTH = "23px";  // Width of each individual div.
    this._FACTOR = 6;  // Scaling factor for the height of div.
    this._MARGIN = "5px";  // Space between each div.
    this._TEXTALIGN = "center";  // Alignment of text on div.
    this._FONTSIZE = "small";   // The size of text on div.

  }

  /**
   * Get the final div which holds all the randomized child nodes.
   */
  get getDiv() {
    return this._div;
  }

  /**
   * Initialize blocks for sorting.
   */
  createBlocksForSorting() {
    this._nums = [];

    for (let i = 0; i < this._MAX_ARR_ELEMENTS; i++) {
      let randNum = this._getRandom(this._MIN, this._MAX);
      this._nums.push(randNum);
    }

    return this._nums;
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
    this._div = document.querySelectorAll(".flex-container")[0];
    canvas.createBlocksForSorting();

    this._div.innerHTML = "";

    // Loop through the array and create a div for each.
    for (let i = 0; i < this._nums.length; i++) {
      let blockDivs = document.createElement("div");
      let text = document.createTextNode(this._nums[i]);

      blockDivs.className = "block" + i;
      blockDivs.style.width = this._WIDTH;
      blockDivs.style.height = this._nums[i] * this._FACTOR + "px";
      blockDivs.style.backgroundColor = COLORS.PRE_SWAP_COLOR;
      blockDivs.style.marginRight = this._MARGIN;
      blockDivs.style.textAlign = this._TEXTALIGN;
      blockDivs.style.fontSize = this._FONTSIZE;
      blockDivs.style.order = i + 1;

      blockDivs.appendChild(text);
      this._div.appendChild(blockDivs);
    }
  }
}

// Create a Canas Object.
const canvas = new Canvas();
