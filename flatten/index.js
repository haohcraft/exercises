var flatten1 = function(arr) {
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

var flatten2 = function(arr) {
    if(!arr || arr.length < 2) return arr || [];
    return arr.reduce(function(r, v) {
        if(v instanceof Array) {
            r = r.concat(flatten(v));
        } else {
            r.push(v);
        }
        return r;
    }, []);
}

var flatten = function(arr) {
    if(!arr || !arr.length) return arr || [];
    if(arr && arr.length === 1 && !arr[0] instanceof Array) {
        return arr;
    }
    var head = arr[0];
    var rest = arr.slice(1);

    return [].concat(flatten(head)).concat(flatten(rest));
}

module.exports = flatten;