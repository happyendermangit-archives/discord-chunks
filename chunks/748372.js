function(e, t, n) {
    var r = n("158698");
    e.exports = function(e, t) {
        if (e !== t) {
            var n = void 0 !== e,
                i = null === e,
                a = e == e,
                o = r(e),
                s = void 0 !== t,
                u = null === t,
                c = t == t,
                l = r(t);
            if (!u && !l && !o && e > t || o && s && c && !u && !l || i && s && c || !n && c || !a) return 1;
            if (!i && !o && !l && e < t || l && n && a && !i && !o || u && n && a || !s && a || !c) return -1
        }
        return 0
    }
}