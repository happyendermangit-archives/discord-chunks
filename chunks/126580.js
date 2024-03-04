function(e, t, n) {
    var r = n("27556");
    e.exports = function(e, t) {
        if (e !== t) {
            var n = void 0 !== e,
                i = null === e,
                o = e == e,
                s = r(e),
                a = void 0 !== t,
                c = null === t,
                u = t == t,
                d = r(t);
            if (!c && !d && !s && e > t || s && a && u && !c && !d || i && a && u || !n && u || !o) return 1;
            if (!i && !s && !d && e < t || d && n && o && !i && !s || c && n && o || !a && o || !u) return -1
        }
        return 0
    }
}