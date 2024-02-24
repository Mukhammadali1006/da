var num = +prompt("Son kiriting")

var pattern = ''

for (let r = 1; r <= num; r++) {

    for (let c = 1; c <= num; c++) {

        if ( r == 1  || c == 1  || c == r || c == num || r == num) {
           
            pattern = pattern + "[*]"
        } else {
            pattern = pattern + "   "
        }
     
    }
    
    console.log(pattern);
    pattern = ""
}

