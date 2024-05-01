function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useResizeObserver: function() {
            return s
        }
    });
    var i = n("470079"),
        r = n("863840"),
        a = n("889711");

    function s(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = (0, i.useRef)(null),
            s = (0, i.useRef)(null),
            o = (0, r.default)(() => e(n.current));
        return (0, i.useLayoutEffect)(() => {
            if (!t) return;
            null == s.current && (s.current = (0, a.getResizeObserver)(o.current));
            let e = n.current,
                i = s.current;
            null != e && null != i && (0, a.watch)(i, e)
        }, [t, e]), (0, i.useEffect)(() => {
            if (!t) return;
            let e = n.current,
                i = s.current;
            if (null != e && null != i) return () => {
                (0, a.unwatch)(i, e)
            }
        }, [t]), n
    }
}