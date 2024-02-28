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
    contains(value) {
        let runner = this.head;
        while (runner !== null) {
            if (runner.value === value) {
                return true
            }
            else {
                return false
            }
        }
    }
}