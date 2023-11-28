const arry = [29, "India", 1234, "PW"];

for (let i = 0 ; i <= arry.length ; i++) {
    if (typeof arry[i] == "string") {
        console.log(`The First String Is : ${arry[i]}`) ;
        break ;
    }
}

