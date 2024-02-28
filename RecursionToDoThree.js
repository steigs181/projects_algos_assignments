function rBinary (arr, val) {
    var findNum = Math.floor(arr.length/2)
    if (arr[findNum] == val) {
        return true;
    }
    else if (val < arr[findNum] && arr.length > 1) {
        return rBinary(arr.slice(findNum.length), val)
    }
    else if (val > arr[findNum] && arr.length > 1) {
        return rBinary(arr.slice(findNum, arr.length), val)
    }
    else {
        return false
    }
}

function rGCF (param1, param2 {
    if (param1 == param2)
}