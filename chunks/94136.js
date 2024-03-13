function(t, e, n) {
    var r = Math.floor,
        i = Math.random;
    t.exports = function(t, e) {
        return t + r(i() * (e - t + 1))
    }
}