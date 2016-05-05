var flatten = function(arr) {
    if(arr && arr.length === 1 && !arr[0] instanceof Array) {
        return arr[0];
    }
    if(!arr.length) {
        return arr;
    }
    var head = arr[0];
    var rest = arr.slice(1);

    return [].concat(flatten(head)).concat(flatten(rest));
};

module.exports = flatten;

