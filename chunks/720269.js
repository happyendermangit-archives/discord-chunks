function(t, r, e) {
    var n = e("170859"),
        o = e("881251"),
        i = e("76850"),
        a = e("63081"),
        u = e("856421"),
        s = e("747185"),
        f = e("148807");
    t.exports = function(t, r) {
        return a(t) && u(r) ? s(f(t), r) : function(e) {
            var a = o(e, t);
            return void 0 === a && a === r ? i(e, t) : n(r, a, 3)
        }
    }
}