/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
    let count = 0
    for(let w of words){
        let len = w.length
        if(w === s.split('').slice(0, len).join('')){
            count++
        }
    }
    return count
};
const words = ["a","a"], s = "aa"
console.log(countPrefixes(words, s))
