function(t, r, e) {
    var n = e("921563");
    t.exports = function(t, r) {
        for (var e = t.length; e--;)
            if (n(t[e][0], r)) return e;
        return -1
    }
}