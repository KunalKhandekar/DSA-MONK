// 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const str1 = s.split("");
    const str2 = t.split("");
    const m = str1.length;
    const n = str2.length;
    let res = Infinity;

    const tArray = new Array(256).fill(0);
    const sArray = new Array(256).fill(0);

    str2.map((letter) => {
        tArray[letter.charCodeAt(0)]++;
    })

    let low = 0;
    let matched = 0;
    let start = low;

    for (let high = 0; high < m; high++) {
        sArray[str1[high].charCodeAt(0)]++;
        if (sArray[str1[high].charCodeAt(0)] <= tArray[str1[high].charCodeAt(0)]) {
            matched++
        }
        while (matched == n) {
            let len = high - low + 1;
            if (res > len) {
                res = len;
                start = low;
            }
            
            if (sArray[str1[low].charCodeAt(0)] <= tArray[str1[low].charCodeAt(0)]) {
                matched--;
            }
            sArray[str1[low].charCodeAt(0)]--;
            low++;
        }
    }

    return res == Infinity ? '' : s.substring(start, start + res);
};