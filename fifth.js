function findLongestCountry(country) {
    const str = country
    // console.log(str.length)
    let longest = 0;
    let longestCountry = null;
    for (let i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            longestCountry = str[i];
        }
    }
    return longestCountry;
}
console.log(findLongestCountry(["Australia", "Germany", "United States of America"]))