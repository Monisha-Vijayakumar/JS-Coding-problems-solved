//ProductExceptSelf
//Program to return array[i] is equal to the product of all the elements in the array except array[i].

function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);

    // Fill the left array
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    // Fill the right array
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    // the result array
    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
}

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));  // Output: [24, 12, 8, 6]
