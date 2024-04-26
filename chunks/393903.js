function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useResizeObserver: function() {
            return a
        }
    });
    var i = n("470079"),
        r = n("863840"),
        s = n("889711");

    function a(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = (0, i.useRef)(null),
            a = (0, i.useRef)(null),
            o = (0, r.default)(() => e(n.current));
        return (0, i.useLayoutEffect)(() => {
            if (!t) return;
            null == a.current && (a.current = (0, s.getResizeObserver)(o.current));
            let e = n.current,
                i = a.current;
            null != e && null != i && (0, s.watch)(i, e)
        }, [t, e]), (0, i.useEffect)(() => {
            if (!t) return;
            let e = n.current,
                i = a.current;
            if (null != e && null != i) return () => {
                (0, s.unwatch)(i, e)
            }
        }, [t]), n
    }
}