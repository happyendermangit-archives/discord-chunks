function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("528734"),
        i = n("951516"),
        a = n("780603"),
        o = n("217224"),
        s = n("633605");

    function u(e, t) {
        (0, i.default)(1, arguments);
        var n, u, c, l, d, f, p, h, m = (0, r.default)(e),
            g = m.getUTCFullYear(),
            _ = (0, s.getDefaultOptions)(),
            b = (0, o.default)(null !== (n = null !== (u = null !== (c = null !== (l = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== l ? l : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.firstWeekContainsDate) && void 0 !== c ? c : _.firstWeekContainsDate) && void 0 !== u ? u : null === (p = _.locale) || void 0 === p ? void 0 : null === (h = p.options) || void 0 === h ? void 0 : h.firstWeekContainsDate) && void 0 !== n ? n : 1);
        if (!(b >= 1 && b <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var v = new Date(0);
        v.setUTCFullYear(g + 1, 0, b), v.setUTCHours(0, 0, 0, 0);
        var y = (0, a.default)(v, t),
            E = new Date(0);
        E.setUTCFullYear(g, 0, b), E.setUTCHours(0, 0, 0, 0);
        var S = (0, a.default)(E, t);
        return m.getTime() >= y.getTime() ? g + 1 : m.getTime() >= S.getTime() ? g : g - 1
    }
}