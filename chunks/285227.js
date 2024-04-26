function(e, t, n) {
    var r = n("369529"),
        i = n("886985"),
        a = n("901806"),
        o = n("484155"),
        s = n("246209"),
        u = Math.max;
    e.exports = function(e) {
        if (!(e && e.length)) return [];
        var t = 0;
        return e = r(e, function(e) {
            if (s(e)) return t = u(e.length, t), !0
        }), o(t, function(t) {
            return i(e, a(t))
        })
    }
}