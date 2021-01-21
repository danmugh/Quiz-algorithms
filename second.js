function palindrome(word) {
    const removeUnwanted = /[\W_]/g;
    const lowRegWord = word.toLowerCase().replace(removeUnwanted, '');
    const reverseWord = lowRegWord.split('').reverse().join('');
    if (reverseWord === lowRegWord) {
        alert('Hey! It is a palindrome');
    } else {
        alert('Hey! It is not a palindrome');

    }
    return reverseWord === lowRegWord;
}

palindrome()