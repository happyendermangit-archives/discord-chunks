function(e, t, n) {
    var r = Math.floor,
        a = Math.random;
    e.exports = function(e, t) {
        return e + r(a() * (t - e + 1))
    }
}