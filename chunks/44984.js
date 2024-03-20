function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUsernameLiveCheck: function() {
            return d
        }
    });
    var s = n("884691"),
        a = n("917351"),
        l = n("65597"),
        r = n("255403"),
        i = n("947962"),
        o = n("2581"),
        u = n("415133");
    let d = function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            c = (0, l.default)([o.default], () => o.default.validate(e), [e]),
            E = (0, l.default)([o.default], () => o.default.isRateLimited()),
            f = (0, i.usePomeloDebounceDelay)(),
            _ = s.useMemo(() => (0, a.debounce)(e => r.default.attemptPomelo(e, n ? "registration" : "modal", n, d), f), [f, n, d]);
        return s.useEffect(() => {
            t && !E && null == c && "" !== e && _(e)
        }, [t, E, c, e, _]), s.useMemo(() => null != c ? (0, u.formatUsernameLiveCheckValidation)(c) : void 0, [c])
    }
}