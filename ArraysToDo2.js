function reverseArr(arr) {
    for (i = 0; i < arr.length/2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    console.log(arr)
    return arr
}
reverseArr([1,2,3,4,5])

function rotateArr (arr, rotateBy) {
    let rotationsNeeded;
    if (rotateBy > 0) {
        rotationsNeeded = rotateBy % arr.length;
    }
    else {
        rotationsNeeded = Math.abs(rotateBy) % arr.length;
    }
    if (rotateBy > 0) {
        for (i = 0; i <rotationsNeeded; i++) {
            let temp = arr[arr.length-1];
            for (j = arr.length-2; j >= 0; j--) {
                arr[j+1] = arr[j]
            }
            arr[0] = temp;
        }
    } else {
        for (i = 0; i< rotationsNeeded; i++) {
            let temp = arr[0];
            for (j = 1; k < arr.length; j++) {
                arr[j-1] = arr[j]
            }
            arr[arr.length-1] = temp;
        }
    }
    console.log(arr)
}
rotateArr([1,2,3,4,5], 2)

function filterRange(arr, min, max) {
    newArr = [];
    for (i = 0; i < arr.length-1; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            newArr.push(arr[i])
        }
    }
    console.log( newArr)
    return newArr
}
filterRange([1,2,3,4,5], 2, 4)

function concat (arrOne, arrTwo) {
    newArr = [];
    bothArrIdx = 0;
    lengthSum = arrOne.length + arrTwo.length
    for (i = 0; i < arrOne.length; i++) {
        newArr[bothArrIdx] = arrOne[i];
        bothArrIdx++;
    }
    for (i = 0; i < arrTwo.length; i++) {
        newArr[bothArrIdx] = arrTwo[i];
        bothArrIdx++;
    }
    console.log(newArr)
    return newArr
}
concat([1,2,3,4,5], [6,7,8])