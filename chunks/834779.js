function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("70102");
    var r = n("386242"),
        a = n("559610"),
        o = n("63173"),
        i = n("567703"),
        s = n("475319");

    function u(e, t) {
        (0, a.default)(1, arguments);
        var n, u, l, c, d, f, p, m, h = (0, r.default)(e),
            y = h.getUTCFullYear(),
            _ = (0, s.getDefaultOptions)(),
            g = (0, i.default)(null !== (n = null !== (u = null !== (l = null !== (c = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== c ? c : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.firstWeekContainsDate) && void 0 !== l ? l : _.firstWeekContainsDate) && void 0 !== u ? u : null === (p = _.locale) || void 0 === p ? void 0 : null === (m = p.options) || void 0 === m ? void 0 : m.firstWeekContainsDate) && void 0 !== n ? n : 1);
        if (!(g >= 1 && g <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var v = new Date(0);
        v.setUTCFullYear(y + 1, 0, g), v.setUTCHours(0, 0, 0, 0);
        var b = (0, o.default)(v, t),
            M = new Date(0);
        M.setUTCFullYear(y, 0, g), M.setUTCHours(0, 0, 0, 0);
        var w = (0, o.default)(M, t);
        return h.getTime() >= b.getTime() ? y + 1 : h.getTime() >= w.getTime() ? y : y - 1
    }
}