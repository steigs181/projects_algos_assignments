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
    length () {
        let runner = this.head;
        let lengthOfList = 0;
        while (runner !== null) {
            lengthOfList++
            runner = runner.next;
        }
        return lengthOfList;
    }
}