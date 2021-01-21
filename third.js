function uppercase(str) {
    const array = str.split(' ');
    const newArray = [];

    for(let x = 0; x < array.length; x++){
        newArray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
    }
    return newArray.join(' ');
}

console.log(uppercase("the quick brown fox"));