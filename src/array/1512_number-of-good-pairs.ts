function numIdenticalPairs(nums: number[]): number {
    let count: number = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
    return count;
};

function numIdenticalPairs2(nums: number[]): number {
    let count = 0;
    const map = new Map<number, number>();
    nums.forEach((num) => map.set(num, map.get(num) ? map.get(num)! + 1 : 1));
    map.forEach(value => count += value * (value - 1) / 2)
    return count;
};