function(e, t, n) {
    var r = Math.floor,
        i = Math.random;
    e.exports = function(e, t) {
        return e + r(i() * (t - e + 1))
    }
}