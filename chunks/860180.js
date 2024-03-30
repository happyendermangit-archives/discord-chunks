function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = 1e3 / 24;
    t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
            n = r.useRef(0),
            i = r.useRef(),
            a = r.useRef(!0),
            u = r.useCallback(function() {
                a.current = !1, cancelAnimationFrame(n.current)
            }, []),
            s = r.useCallback(function(r) {
                null == i.current && (i.current = r);
                var o = r - i.current;
                o >= t && (i.current = r, e(o)), a.current && (n.current = requestAnimationFrame(s))
            }, [e, t]),
            l = r.useCallback(function() {
                a.current = !0, i.current = void 0, n.current = requestAnimationFrame(s)
            }, [s]);
        return r.useEffect(function() {
            return n.current = requestAnimationFrame(s),
                function() {
                    return cancelAnimationFrame(n.current)
                }
        }, []), {
            stop: u,
            reset: l,
            ticking: a
        }
    }
}