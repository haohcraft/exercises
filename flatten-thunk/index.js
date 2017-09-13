var flattenT = function(thunk) {
   return function(callback) {
        function next() {
            thunk(function(err, result) {
                if (typeof result === 'function') {
                    thunk = result;
                    next();
                } else {
                    callback(err, result);
                }
            });
        }
        next();
   };
};

module.exports = flattenT;

