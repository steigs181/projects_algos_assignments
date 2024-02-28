function pushFront (arr, num) {
    for (i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = num
    console.log(arr)
    return arr
}
pushFront([1,2,3,4], 5)

function popFront (arr) {
    value = arr[0]
    for (i = 0; i < arr.length-1 ; i++) {
        arr[i] = arr[i + 1]
    }
    arr.pop()
    console.log(arr)
    console.log(value)
    return value
}
popFront([1,2,3,4,5])

function insertAt (arr, idx, value) {
    for (i = arr.length - 1; i > idx; i--) {
        arr[i] = arr[i-1]
    }
    arr[idx] = value
    console.log(arr)
}

insertAt([1,2,3,4,5], 2, 20)

