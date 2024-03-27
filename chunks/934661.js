function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("633605"),
        i = n("528734"),
        a = n("217224"),
        o = n("951516");

    function s(e, t) {
        (0, o.default)(1, arguments);
        var n, s, u, c, l, d, f, p, h = (0, r.getDefaultOptions)(),
            m = (0, a.default)(null !== (n = null !== (s = null !== (u = null !== (c = null == t ? void 0 : t.weekStartsOn) && void 0 !== c ? c : null == t ? void 0 : null === (l = t.locale) || void 0 === l ? void 0 : null === (d = l.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== u ? u : h.weekStartsOn) && void 0 !== s ? s : null === (f = h.locale) || void 0 === f ? void 0 : null === (p = f.options) || void 0 === p ? void 0 : p.weekStartsOn) && void 0 !== n ? n : 0);
        if (!(m >= 0 && m <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
        var g = (0, i.default)(e),
            _ = g.getDay();
        return g.setDate(g.getDate() + ((_ < m ? -7 : 0) + 6 - (_ - m))), g.setHours(23, 59, 59, 999), g
    }
}