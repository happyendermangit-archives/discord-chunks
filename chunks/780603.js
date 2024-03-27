function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("528734"),
        i = n("951516"),
        a = n("217224"),
        o = n("633605");

    function s(e, t) {
        (0, i.default)(1, arguments);
        var n, s, u, c, l, d, f, p, h = (0, o.getDefaultOptions)(),
            m = (0, a.default)(null !== (n = null !== (s = null !== (u = null !== (c = null == t ? void 0 : t.weekStartsOn) && void 0 !== c ? c : null == t ? void 0 : null === (l = t.locale) || void 0 === l ? void 0 : null === (d = l.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== u ? u : h.weekStartsOn) && void 0 !== s ? s : null === (f = h.locale) || void 0 === f ? void 0 : null === (p = f.options) || void 0 === p ? void 0 : p.weekStartsOn) && void 0 !== n ? n : 0);
        if (!(m >= 0 && m <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
        var g = (0, r.default)(e),
            _ = g.getUTCDay();
        return g.setUTCDate(g.getUTCDate() - ((_ < m ? 7 : 0) + _ - m)), g.setUTCHours(0, 0, 0, 0), g
    }
}