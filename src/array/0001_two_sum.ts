function twoSum1(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ( nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    throw new Error('No two sum solution');
};

function twoSum2(nums: number[], target: number): number[] {
    let map: { [key: number]: number } = { };
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(target-nums[i]) && i !== map[target-nums[i]]) {
            return [i, map[target-nums[i]]];
        }
    }
    throw new Error('No two sum solution');
};

function twoSum3(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target-nums[i]) && i !== map.get(target-nums[i])) {
            return [i, map.get(target-nums[i])!];
        }
    }
    throw new Error('No two sum solution');
};





