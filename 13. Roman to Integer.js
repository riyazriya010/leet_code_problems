var romanToInt = function(s) {
    let romans = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let total = 0
    for(let i = 0; i < s.length; i++){
        let curr = s[i]
        let next = s[i+1]
        if(romans[curr] < romans[next]){
            total -= romans[curr]
        }else {
            total += romans[curr]
        }
    }
    return total
    
};
const s = "IX"
console.log(romanToInt(s))
