// From https://gist.github.com/blixt/f17b47c62508be59987b
class Random {

    constructor(seed) {
        this.seed = seed % 2147483647;
        if (this.seed <= 0) this.seed += 2147483646;
    }

    /**
     * Returns a pseudo-random value between 1 and 2^32 - 2.
     */
    next() {
        return this.seed = this.seed * 16807 % 2147483647;
    }
    nextFloat() {
        // We know that result of next() will be 1 to 2147483646 (inclusive).
        return (this.next() - 1) / 2147483646;
    }
    nextInt(min, max) {
        return Math.floor(min + this.nextFloat() * (max - min));
    }

}

export default Random;