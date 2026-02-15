/*
https://leetcode.com/problems/3sum/?envType=problem-list-v2&envId=array
*/

function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        if (nums[i] > 0) break;

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;

                continue;
            }

            if (sum < 0) {
                left++;

                continue;
            }

            right--;
        }
    }

    return result;
}

export default function executeThreeSum() {
    const testCases = [
        { label: "Exemplo 1 (Padrão)", input: [-1, 0, 1, 2, -1, -4] },
        { label: "Exemplo 2 (Sem solução)", input: [0, 1, 1] },
        { label: "Exemplo 3 (Zeros)", input: [0, 0, 0] },
        { label: "Borda (Vazio)", input: [] },
        { label: "Borda (Poucos itens)", input: [1, 2] },
        { label: "Duplicatas complexas", input: [-2, 0, 1, 1, 2] }
    ];

    testCases.forEach((test, index) => {
        console.group(`Teste ${index + 1}: ${test.label}`);

        console.log("Entrada:", test.input);

        const result = threeSum([...test.input]);

        console.log("Saída:", JSON.stringify(result));

        console.groupEnd();
    });
}