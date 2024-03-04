function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("834779"),
        a = n("559610"),
        o = n("63173"),
        i = n("567703"),
        s = n("475319");

    function u(e, t) {
        (0, a.default)(1, arguments);
        var n, u, l, c, d, f, p, m, h = (0, s.getDefaultOptions)(),
            y = (0, i.default)(null !== (n = null !== (u = null !== (l = null !== (c = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== c ? c : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.firstWeekContainsDate) && void 0 !== l ? l : h.firstWeekContainsDate) && void 0 !== u ? u : null === (p = h.locale) || void 0 === p ? void 0 : null === (m = p.options) || void 0 === m ? void 0 : m.firstWeekContainsDate) && void 0 !== n ? n : 1),
            _ = (0, r.default)(e, t),
            g = new Date(0);
        return g.setUTCFullYear(_, 0, y), g.setUTCHours(0, 0, 0, 0), (0, o.default)(g, t)
    }
}