function(t, r, e) {
    var n = e("293300"),
        o = e("694496"),
        i = e("747185");
    t.exports = function(t) {
        var r = o(t);
        return 1 == r.length && r[0][2] ? i(r[0][0], r[0][1]) : function(e) {
            return e === t || n(e, t, r)
        }
    }
}