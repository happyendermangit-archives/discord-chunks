function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("70102");
    var r = n("386242"),
        a = n("559610"),
        o = n("567703"),
        i = n("475319");

    function s(e, t) {
        (0, a.default)(1, arguments);
        var n, s, u, l, c, d, f, p, m = (0, i.getDefaultOptions)(),
            h = (0, o.default)(null !== (n = null !== (s = null !== (u = null !== (l = null == t ? void 0 : t.weekStartsOn) && void 0 !== l ? l : null == t ? void 0 : null === (c = t.locale) || void 0 === c ? void 0 : null === (d = c.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== u ? u : m.weekStartsOn) && void 0 !== s ? s : null === (f = m.locale) || void 0 === f ? void 0 : null === (p = f.options) || void 0 === p ? void 0 : p.weekStartsOn) && void 0 !== n ? n : 0);
        if (!(h >= 0 && h <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
        var y = (0, r.default)(e),
            _ = y.getUTCDay();
        return y.setUTCDate(y.getUTCDate() - ((_ < h ? 7 : 0) + _ - h)), y.setUTCHours(0, 0, 0, 0), y
    }
}