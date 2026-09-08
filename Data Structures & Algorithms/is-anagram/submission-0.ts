class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let anagram = new Map<string, number>();
        for (const c of s) {
            anagram.set(c, (anagram.get(c) || 0) + 1);
        }
        for (const k of t) {
            if (anagram.get(k) === 0) {
                return false;
            }
            anagram.set(k, anagram.get(k) - 1 );
        }
        for (const a of anagram.values()) {
            if (a !== 0) {
                return false
            }
        }
        return true
    }
}
