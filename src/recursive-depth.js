module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 1, max = []) {
    max.push(counter);
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], counter + 1, max);
      }
    }
    return Math.max(...max);
  }
};
