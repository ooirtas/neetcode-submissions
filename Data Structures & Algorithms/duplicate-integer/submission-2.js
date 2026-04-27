class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for(const c of nums)
        {
            if(seen.has(c)){
                return true;
            }
            seen.add(c);
        }

        return false;

    }

}
