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

    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this
    }

    removeFront() {
        if (this.head == null) {
            return this.head
        }
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this.head;
    }
    front() {
        if (this.head == null) {
            return null
        }
        else {
            return this.head.value;
        }
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
var newSLL = new SSL();
newSLL.addFront(20);
newSLL.removeFront()
console.log(newSLL)