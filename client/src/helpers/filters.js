// Returns the first value from part value
const findFirstIndexFromPartVal = (arr, key, query,) => { return arr.findIndex(el => el[(key)].indexOf(query) !== -1 )}

// example useage
// console.log('index of part val', findIndexFromPartVal(idsObj, 'identifier','623'))

// console.log('url is',idsObj[findIndexFromPartVal(idsObj, 'identifier','623')].www)