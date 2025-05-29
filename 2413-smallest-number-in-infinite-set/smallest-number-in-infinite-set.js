var SmallestInfiniteSet = function() {
    this.current = 1; 
    this.addedBack = new Set(); 
    this.minHeap = []; 
};

SmallestInfiniteSet.prototype.popSmallest = function() {
    if (this.minHeap.length > 0) {

        this.minHeap.sort((a, b) => a - b);
        const smallest = this.minHeap.shift();
        this.addedBack.delete(smallest); 
        return smallest;
    }
    return this.current++;
};

SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.current && !this.addedBack.has(num)) {
        this.minHeap.push(num);
        this.addedBack.add(num);
    }
};
