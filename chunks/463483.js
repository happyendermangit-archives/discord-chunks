function(e, t, n) {
    function r(e, t) {
        if (!e) throw Error(t || "Assertion failed")
    }
    n("70102"), e.exports = r, r.equal = function(e, t, n) {
        if (e != t) throw Error(n || "Assertion failed: " + e + " != " + t)
    }
}