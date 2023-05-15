
function findMatching(array, personWeAreLookingFor) {
    return array.filter(name => name.toUpperCase() === personWeAreLookingFor.toUpperCase())
}

function fuzzyMatch(array, firstLetterOfPersonWeAreLookingFor) {
    return array.filter(name => name.slice(0,1) === firstLetterOfPersonWeAreLookingFor.slice(0,1))
}

function matchName(array, personWeAreLookingFor) {
    return array.filter(name => name.name === personWeAreLookingFor)
}