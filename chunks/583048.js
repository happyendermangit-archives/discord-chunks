function(t, e, s) {
    var r = s("978603"),
        i = s("603108");
    t.exports = function(t, e) {
        var s = -1,
            n = i(t) ? Array(t.length) : [];
        return r(t, function(t, r, i) {
            n[++s] = e(t, r, i)
        }), n
    }
}