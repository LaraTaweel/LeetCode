var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    const backtrack = (index, path) => {
        if (index === digits.length) {
            result.push(path);
            return;
        }

        let letters = map[digits[index]];
        for (let char of letters) {
            backtrack(index + 1, path + char);
        }
    };

    backtrack(0, '');
    return result;
};
