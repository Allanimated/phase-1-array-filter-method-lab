function findMatching(array, driverName) {
    const firstLetterCapitalized = driverName.charAt(0).toUpperCase() + driverName.slice(1).toLowerCase();
    const lowerCase = driverName.toLowerCase();
    const filter = array.filter(value => value === firstLetterCapitalized || value === lowerCase );
    return filter;
}

function fuzzyMatch(array, driverName) {
    const filterArray = array.filter(value => value.slice(0,2) === driverName);
    return filterArray;
}

function matchName(array, driverName) {
    const filterArray = array.filter(value => value.name === driverName);
    return filterArray;
}