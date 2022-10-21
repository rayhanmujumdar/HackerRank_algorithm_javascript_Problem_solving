// Easy problem solve; problem no: #17
console.time("use traverse","not Optimize")
function migratoryBirds(arr){
    const uniqArr = [...new Set(arr)]
    const newArr = {}
    uniqArr.forEach(elem => {
        const filterVal = arr.filter(v => v === elem)
        const totalVal = filterVal.length
        newArr[elem] = totalVal
    });
    const result = Object.entries(newArr).sort(([,a],[,b]) => b - a)
    const final = result[0][0]
    return final
}
console.log(migratoryBirds([1,4,4,4,5,6]));
console.timeEnd("use traverse");

