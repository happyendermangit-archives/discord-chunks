function(e, t, n) {
    var r = n("345238"),
        i = n("224075"),
        o = n("616601"),
        s = n("566040"),
        a = o(function(e, t) {
            if (null == e) return [];
            var n = t.length;
            return n > 1 && s(e, t[0], t[1]) ? t = [] : n > 2 && s(t[0], t[1], t[2]) && (t = [t[0]]), i(e, r(t, 1), [])
        });
    e.exports = a
}