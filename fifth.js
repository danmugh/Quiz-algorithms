function LongestCountryName(countryName) {
    return countryName.reduce(function(lName, country) {
            return lName.length > country.length ? lName : country;
        }, " ");
}

LongestCountryName()