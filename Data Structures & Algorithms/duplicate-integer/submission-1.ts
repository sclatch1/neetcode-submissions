class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let duplicate = new Set<number>();

        for (const num of nums) {
            if (!duplicate.has(num)) {
                duplicate.add(num)
            } else {
                return true
            }
        }
        return false
    }
}
