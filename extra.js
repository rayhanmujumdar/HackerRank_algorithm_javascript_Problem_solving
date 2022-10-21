function leap_year_range(str_year,end_year){
    const year_range = []
    for(let i = str_year; i < end_year; i++){
        year_range.push(i)
    }
    const new_range = []
    year_range.forEach((year) => {
        if(test_LeapYear(year)){
            new_range.push(year)
        }
    })
    return new_range
}

function test_LeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)){
        return year
    }else{
        return false
    }
}
console.log(leap_year_range(2000,2016))