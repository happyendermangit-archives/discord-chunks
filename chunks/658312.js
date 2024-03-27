function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("470079");
    let r = 1e3 / 24;
    t.default = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
            n = i.useRef(0),
            s = i.useRef(),
            a = i.useRef(!0),
            o = i.useCallback(() => {
                a.current = !1, cancelAnimationFrame(n.current)
            }, []),
            l = i.useCallback(i => {
                null == s.current && (s.current = i);
                let r = i - s.current;
                r >= t && (s.current = i, e(r)), a.current && (n.current = requestAnimationFrame(l))
            }, [e, t]),
            u = i.useCallback(() => {
                a.current = !0, s.current = void 0, n.current = requestAnimationFrame(l)
            }, [l]);
        return i.useEffect(() => (n.current = requestAnimationFrame(l), () => cancelAnimationFrame(n.current)), []), {
            stop: o,
            reset: u,
            ticking: a
        }
    }
}