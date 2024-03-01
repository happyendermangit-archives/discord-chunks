function(t, e, s) {
    function r(t, e) {
        if (!t) throw Error(e || "Assertion failed")
    }
    s("70102"), t.exports = r, r.equal = function(t, e, s) {
        if (t != e) throw Error(s || "Assertion failed: " + t + " != " + e)
    }
}