// 424. Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.



// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.


// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const str = s.split("");
    const n = str.length;
    let low = 0;
    const alphanum = new Array(255).fill(0);
    let res = -Infinity;
    for (let high = 0; high < n; high++) {
        alphanum[s[high].charCodeAt(0)]++;
        let len = high - low + 1;
        let maxCount = Math.max(...alphanum);
        let diff = len - maxCount;
        while (diff > k) {
            alphanum[s[low].charCodeAt(0)]--;
            low++;
            len = high - low + 1;
            maxCount = Math.max(...alphanum);
            diff = len - maxCount;
        }
        len = high - low + 1;
        res = Math.max(res, len);
    }

    return res;
};

console.log(characterReplacement("AABABBA", 1));