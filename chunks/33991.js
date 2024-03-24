function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    }), n("70102"), n("781738");
    var r = n("893519"),
        a = n("273751"),
        o = n("386242"),
        i = n("717164"),
        s = n("193493"),
        u = n("584138"),
        l = n("640517"),
        c = n("567703"),
        d = n("559610"),
        f = n("475319"),
        p = n("159096"),
        m = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        y = /^'([^]*?)'?$/,
        _ = /''/g,
        g = /[a-zA-Z]/;

    function v(e, t, n) {
        (0, d.default)(2, arguments);
        var v, b, M, w, k, L, D, T, S, Y, x, O, E, P, j, C, A, F, H = String(t),
            I = (0, f.getDefaultOptions)(),
            N = null !== (v = null !== (b = null == n ? void 0 : n.locale) && void 0 !== b ? b : I.locale) && void 0 !== v ? v : p.default,
            R = (0, c.default)(null !== (M = null !== (w = null !== (k = null !== (L = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== L ? L : null == n ? void 0 : null === (D = n.locale) || void 0 === D ? void 0 : null === (T = D.options) || void 0 === T ? void 0 : T.firstWeekContainsDate) && void 0 !== k ? k : I.firstWeekContainsDate) && void 0 !== w ? w : null === (S = I.locale) || void 0 === S ? void 0 : null === (Y = S.options) || void 0 === Y ? void 0 : Y.firstWeekContainsDate) && void 0 !== M ? M : 1);
        if (!(R >= 1 && R <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var z = (0, c.default)(null !== (x = null !== (O = null !== (E = null !== (P = null == n ? void 0 : n.weekStartsOn) && void 0 !== P ? P : null == n ? void 0 : null === (j = n.locale) || void 0 === j ? void 0 : null === (C = j.options) || void 0 === C ? void 0 : C.weekStartsOn) && void 0 !== E ? E : I.weekStartsOn) && void 0 !== O ? O : null === (A = I.locale) || void 0 === A ? void 0 : null === (F = A.options) || void 0 === F ? void 0 : F.weekStartsOn) && void 0 !== x ? x : 0);
        if (!(z >= 0 && z <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
        if (!N.localize) throw RangeError("locale must contain localize property");
        if (!N.formatLong) throw RangeError("locale must contain formatLong property");
        var W = (0, o.default)(e);
        if (!(0, r.default)(W)) throw RangeError("Invalid time value");
        var B = (0, u.default)(W),
            U = (0, a.default)(W, B),
            K = {
                firstWeekContainsDate: R,
                weekStartsOn: z,
                locale: N,
                _originalDate: W
            };
        return H.match(h).map(function(e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, s.default[t])(e, N.formatLong) : e
        }).join("").match(m).map(function(r) {
            if ("''" === r) return "'";
            var a = r[0];
            if ("'" === a) return function(e) {
                var t = e.match(y);
                return t ? t[1].replace(_, "'") : e
            }(r);
            var o = i.default[a];
            if (o) return !(null != n && n.useAdditionalWeekYearTokens) && (0, l.isProtectedWeekYearToken)(r) && (0, l.throwProtectedError)(r, t, String(e)), !(null != n && n.useAdditionalDayOfYearTokens) && (0, l.isProtectedDayOfYearToken)(r) && (0, l.throwProtectedError)(r, t, String(e)), o(U, r, N.localize, K);
            if (a.match(g)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
            return r
        }).join("")
    }
}