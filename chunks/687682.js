function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return u
        }
    });
    var n = r("884691");
    let o = 1e3 / 24;
    var u = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
            r = n.useRef(0),
            u = n.useRef(),
            l = n.useRef(!0),
            i = n.useCallback(() => {
                l.current = !1, cancelAnimationFrame(r.current)
            }, []),
            a = n.useCallback(n => {
                null == u.current && (u.current = n);
                let o = n - u.current;
                o >= t && (u.current = n, e(o)), l.current && (r.current = requestAnimationFrame(a))
            }, [e, t]),
            s = n.useCallback(() => {
                l.current = !0, u.current = void 0, r.current = requestAnimationFrame(a)
            }, [a]);
        return n.useEffect(() => (r.current = requestAnimationFrame(a), () => cancelAnimationFrame(r.current)), []), {
            stop: i,
            reset: s,
            ticking: l
        }
    }
}