/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    
    citations.sort((a, b) => a - b);

    let h = 0;
    const length = citations.length;

    for (let i = 0; i < length; i++) {
        const item = citations[i];
        if (item >= length - i) {
            h++;
        }
    }

    return h;

};