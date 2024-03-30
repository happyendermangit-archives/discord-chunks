function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUsernameLiveCheck: function() {
            return c
        }
    });
    var r = n("470079"),
        i = n("392711"),
        o = n("37295"),
        u = n("654189"),
        a = n("68548"),
        s = n("104782"),
        l = n("540225"),
        c = function(e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                f = (0, o.useStateFromStores)([s.default], function() {
                    return s.default.validate(e)
                }, [e]),
                d = (0, o.useStateFromStores)([s.default], function() {
                    return s.default.isRateLimited()
                }),
                g = (0, a.usePomeloDebounceDelay)(),
                m = r.useMemo(function() {
                    return (0, i.debounce)(function(e) {
                        return u.default.attemptPomelo(e, n ? "registration" : "modal", n, c)
                    }, g)
                }, [g, n, c]);
            return r.useEffect(function() {
                t && !d && null == f && "" !== e && m(e)
            }, [t, d, f, e, m]), r.useMemo(function() {
                return null != f ? (0, l.formatUsernameLiveCheckValidation)(f) : void 0
            }, [f])
        }
}