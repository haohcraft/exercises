var flatten = function(arr) {
    if (!arr) {
        return null;
    }
    if (arr instanceof Array) {
        return arr.reduce(function(result, item) {
            return result.concat(flatten(item));
        }, []);
    } else {
        return [arr];
    }
};

module.exports = flatten;

