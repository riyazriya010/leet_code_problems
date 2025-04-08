var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let left = 0
    let maxLength = 0

    // this takes linear O(n) time complexity
    for (let right = 0; right < s.length; right++) {
        // this takes constant O(1) time complexity
        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)

        console.log(`Window: "${s.slice(left, right + 1)}", Set:`, [...set]);
    }
    return maxLength

};

const s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))

