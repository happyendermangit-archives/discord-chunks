function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return o
        }
    });
    var n = r("884691");
    let u = 1e3 / 24;
    var o = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
            r = n.useRef(0),
            o = n.useRef(),
            l = n.useRef(!0),
            i = n.useCallback(() => {
                l.current = !1, cancelAnimationFrame(r.current)
            }, []),
            a = n.useCallback(n => {
                null == o.current && (o.current = n);
                let u = n - o.current;
                u >= t && (o.current = n, e(u)), l.current && (r.current = requestAnimationFrame(a))
            }, [e, t]),
            s = n.useCallback(() => {
                l.current = !0, o.current = void 0, r.current = requestAnimationFrame(a)
            }, [a]);
        return n.useEffect(() => (r.current = requestAnimationFrame(a), () => cancelAnimationFrame(r.current)), []), {
            stop: i,
            reset: s,
            ticking: l
        }
    }
}