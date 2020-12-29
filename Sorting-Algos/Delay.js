
/**
 * Delay in animation which returns a promise, used in async function.
 * @param {number} ms The specific interval. 
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}