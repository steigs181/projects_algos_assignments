function removeBlanks (words) {
    wordArr = words.split(" ")
    console.log(wordArr.join(""));
}
removeBlanks("Sour patch kids are good!")

function getDigits (sentence) {
    wordArr = sentence;
    numArr = [];
    for ( i = 0; i < wordArr.length; i++) {
        if (Number(wordArr[i])) {
            numArr.push(wordArr[i])
        }
        else {
            continue
        }
    }
    console.log(numArr)
    return numArr
}
getDigits("Chocolate12 5")

function acronyms (sentence) {
    wordArr = sentence.split(" ");
    acronymStr = "";
    for (word in wordArr) {
        if (wordArr[word].length > 0) {
            acronymStr += wordArr[word][0].toUpperCase()
        }
    }
    console.log(acronymStr)
    return acronymStr
}
acronyms("Lets Go Buffalo")

function countNonSpaces (sentence) {
    wordArr = sentence.split(" ")
    countWords = wordArr.join("")
    numOfNonSpaces = countWords.length
    console.log(numOfNonSpaces)
    return numOfNonSpaces
}
countNonSpaces("What, do you think about this skit")

function removeShorterStrings (str, strMax) {
    wordArr = str.split(" ");
    newWordArr = [];
    //loop through the array
    for (word in wordArr) {
        if (wordArr[word].length >= strMax) {
            console.log(wordArr[word])
            newWordArr.push(wordArr[word])
        }
        else {
            continue
        }
    }
    console.log(newWordArr)
    return newWordArr
    //loop through each word in the array and figure its length out
    //if length is greater than strMax push said word into array
}
removeShorterStrings("Coffee helps me through this", 5)