function findTwoSum(nums, target) {
    const map = {}; // stores number and its index

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        // If complement already exists, return indices
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        // Store current number and index
        map[nums[i]] = i;
    }
}

// Test cases
console.log(findTwoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(findTwoSum([3, 2, 4], 6));      // [1, 2]
console.log(findTwoSum([1, 5, 3, 8], 9));   // [0, 3]
