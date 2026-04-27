class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let res = 0;
        let cnt = 0;
        for(let num of nums){
            if(num === 0){
                res = Math.max(res, cnt);
                cnt = 0;
            }else{
                cnt++;
            }
        }
        return Math.max(res, cnt);
    }
}
