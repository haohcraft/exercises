// 1. "+" or "-" sign
// 2. MAX number/MIN number
// 3. leading/trailing space

var strToNum = function(str) {

    var trimed = str.trim();
    var sign = 1;
    var result = 0;
    for(var i =0; i<trimed.length; i++) {
        if(trimed[i] === "-") {
            sign = -1;
            continue;
        }

        if(trimed[i] === "+") continue;
        //max number/min number
        if(result > 2147483647) {
            return result * sign;
        }

        result = result * 10 + parseInt(trimed[i])
    }

    return result * sign;

}