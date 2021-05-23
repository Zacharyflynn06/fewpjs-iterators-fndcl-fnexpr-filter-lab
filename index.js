// Code your solution here
function findMatching(collection, id) {
    return collection.filter( result => 
        result.toLowerCase() === id.toLowerCase()
    )
}

function fuzzyMatch(collection, id) {
    return collection.filter( result => 
        result.toLowerCase().indexOf(id.toLowerCase()) === 0
    )
}

function matchName(collection, id) {
    return collection.filter( data => data.name === id)
}