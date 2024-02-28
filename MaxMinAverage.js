class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    maxMinAvg() {
        let max = this.head.value;
        let min = this.head.value;
        let sum = 0;
        let runner = this.head;
        while (runner !== null) {
            sum += runner.value;
            if (runner.value > max) {
                max = runner.value
            }
            else if (runner.value < min) {
                min = runner.value;
            }
            runner = runner.next
        }
        return `min: ${min}, max: ${max}, avg: ${sum/this.length()}`
    }
}