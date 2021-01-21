function findLongestWord(word) {
    const array = word.match(/\w[a-z]{0,}/gi);
    let result = array[0];

    for(const x = 1 ; x < array.length ; x++) {
        if(result.length < array[x].length) {
            result = array[x];
        }
    }
    return result;
}

findLongestWord()