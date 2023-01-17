// Code your solution here

function findMatching (driverNames, name) {
    return driverNames.filter((el) => el.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(driverNames, string) {
        return driverNames.filter((el) => {
        if (el.slice(0,2) === string) {
            return el
        }

    })
}

function matchName (driverNames, string) {
    return driverNames.filter((el) => {
        if (el['name'] === string) {
            return el
        }
    })
}


