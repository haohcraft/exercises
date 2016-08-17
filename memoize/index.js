//}47}$.(}:</}*88})54*q}$.(}/889}).}+(/})54*}7418})5+.(65}714-o3*

module.exports = memoize;

function memoize(fn) {
  var cache = {};
  return function(n) {
    var key = JSON.stringify([].slice.call(arguments));
    if (!(key in cache)) {
      cache[key] = fn.apply(null, arguments);
    }

    return cache[key];
  };
}
