const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position > this.getLength() - 1 ||
      position < 1
    ) {
      this.array = [];
      throw new Error();
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = '';

    for (let i = 0; i < this.array.length - 1; i++) {
      result += `( ${this.array[i]} )~~`;
    }

    result += `( ${this.array[this.array.length - 1]} )`;

    this.array = [];

    return result;
  }
};

module.exports = chainMaker;
