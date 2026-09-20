// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without duplicate characters.

 
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 105
// s consists of English letters, digits, symbols and spaces.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const str = s.split("");
    const n = str.length;
    let low = 0;
    const freq = new Map();
    let longestStrLen = 0;

    for(let high = 0; high < n; high++){
        freq.set(str[high], (freq.get(str[high]) || 0) + 1);
        let k = high - low + 1;
        while(freq.size < k) {
            freq.set(str[low], (freq.get(str[low]) || 0) - 1);
            if(freq.get(str[low]) <= 0) {
                freq.delete(str[low]);
            }
            low++;
            k = high - low + 1;
        }

        if(freq.size == k) {
            longestStrLen = Math.max(longestStrLen, high - low + 1);
        }
    }

    return longestStrLen;
};

console.log(lengthOfLongestSubstring("abcdabcbb"))