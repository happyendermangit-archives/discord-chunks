function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("193603"),
        i = n("951516"),
        a = n("780603"),
        o = n("217224"),
        s = n("633605");

    function u(e, t) {
        (0, i.default)(1, arguments);
        var n, u, c, l, d, f, p, h, m = (0, s.getDefaultOptions)(),
            g = (0, o.default)(null !== (n = null !== (u = null !== (c = null !== (l = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== l ? l : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.firstWeekContainsDate) && void 0 !== c ? c : m.firstWeekContainsDate) && void 0 !== u ? u : null === (p = m.locale) || void 0 === p ? void 0 : null === (h = p.options) || void 0 === h ? void 0 : h.firstWeekContainsDate) && void 0 !== n ? n : 1),
            _ = (0, r.default)(e, t),
            b = new Date(0);
        return b.setUTCFullYear(_, 0, g), b.setUTCHours(0, 0, 0, 0), (0, a.default)(b, t)
    }
}