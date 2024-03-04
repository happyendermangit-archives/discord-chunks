function(e, t, n) {
    var r = n("978603"),
        i = n("603108");
    e.exports = function(e, t) {
        var n = -1,
            o = i(e) ? Array(e.length) : [];
        return r(e, function(e, r, i) {
            o[++n] = t(e, r, i)
        }), o
    }
}