var flatten = function(arr) {
    if(!arr) return [];
    if(arr && arr.length === 1) return arr;
    var result = [];
    for(var i = 0; i<arr.length; i++) {
        var c = arr[i];
        if(c instanceof Array) {
            result = result.concat(flatten(c));
        } else {
            result.push(c);
        }
    }
    return result;
};

module.exports = flatten;