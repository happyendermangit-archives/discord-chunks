function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var r = n("310644"),
        i = n("465735"),
        a = n("528734"),
        o = n("570289"),
        s = n("128961"),
        u = n("424421"),
        c = n("198050"),
        l = n("217224"),
        d = n("951516"),
        f = n("633605"),
        p = n("393655"),
        h = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        m = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        g = /^'([^]*?)'?$/,
        _ = /''/g,
        b = /[a-zA-Z]/;

    function v(e, t, n) {
        (0, d.default)(2, arguments);
        var v, y, E, S, x, w, T, C, D, O, M, A, k, R, N, I, L, P, F = String(t),
            B = (0, f.getDefaultOptions)(),
            U = null !== (v = null !== (y = null == n ? void 0 : n.locale) && void 0 !== y ? y : B.locale) && void 0 !== v ? v : p.default,
            Y = (0, l.default)(null !== (E = null !== (S = null !== (x = null !== (w = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== w ? w : null == n ? void 0 : null === (T = n.locale) || void 0 === T ? void 0 : null === (C = T.options) || void 0 === C ? void 0 : C.firstWeekContainsDate) && void 0 !== x ? x : B.firstWeekContainsDate) && void 0 !== S ? S : null === (D = B.locale) || void 0 === D ? void 0 : null === (O = D.options) || void 0 === O ? void 0 : O.firstWeekContainsDate) && void 0 !== E ? E : 1);
        if (!(Y >= 1 && Y <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var j = (0, l.default)(null !== (M = null !== (A = null !== (k = null !== (R = null == n ? void 0 : n.weekStartsOn) && void 0 !== R ? R : null == n ? void 0 : null === (N = n.locale) || void 0 === N ? void 0 : null === (I = N.options) || void 0 === I ? void 0 : I.weekStartsOn) && void 0 !== k ? k : B.weekStartsOn) && void 0 !== A ? A : null === (L = B.locale) || void 0 === L ? void 0 : null === (P = L.options) || void 0 === P ? void 0 : P.weekStartsOn) && void 0 !== M ? M : 0);
        if (!(j >= 0 && j <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
        if (!U.localize) throw RangeError("locale must contain localize property");
        if (!U.formatLong) throw RangeError("locale must contain formatLong property");
        var z = (0, a.default)(e);
        if (!(0, r.default)(z)) throw RangeError("Invalid time value");
        var H = (0, u.default)(z),
            G = (0, i.default)(z, H),
            V = {
                firstWeekContainsDate: Y,
                weekStartsOn: j,
                locale: U,
                _originalDate: z
            };
        return F.match(m).map(function(e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, s.default[t])(e, U.formatLong) : e
        }).join("").match(h).map(function(r) {
            if ("''" === r) return "'";
            var i = r[0];
            if ("'" === i) return function(e) {
                var t = e.match(g);
                return t ? t[1].replace(_, "'") : e
            }(r);
            var a = o.default[i];
            if (a) return !(null != n && n.useAdditionalWeekYearTokens) && (0, c.isProtectedWeekYearToken)(r) && (0, c.throwProtectedError)(r, t, String(e)), !(null != n && n.useAdditionalDayOfYearTokens) && (0, c.isProtectedDayOfYearToken)(r) && (0, c.throwProtectedError)(r, t, String(e)), a(G, r, U.localize, V);
            if (i.match(b)) throw RangeError("Format string contains an unescaped latin alphabet character `" + i + "`");
            return r
        }).join("")
    }
}