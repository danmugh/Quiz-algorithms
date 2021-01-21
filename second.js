function palindrome(word) {
    const removeUnwanted = /[^A-Za-z0-9]/g;
    word = word.toLowerCase().replace(removeUnwanted, '');
    const len = word.length;
    for (let i = 0; i < len; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome("A man, a plan, a canal. Panama"))

