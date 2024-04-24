function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useResizeObserver: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("863840"),
        s = n("889711");
    let a = {};

    function o(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            o = (0, i.useRef)(null),
            l = (0, r.default)(null != t ? t : a),
            u = (0, i.useRef)(null);
        return (0, i.useLayoutEffect)(() => {
            if (!n) return;
            null == u.current && (u.current = (0, s.getResizeObserver)(l.current));
            let t = o.current,
                i = u.current;
            null != t && null != i && (0, s.watch)(l.current, t, e)
        }, [n, e]), (0, i.useEffect)(() => {
            if (!n) return;
            let e = o.current,
                t = u.current,
                i = l.current;
            if (null != e && null != t) return () => {
                (0, s.unwatch)(i, e)
            }
        }, [n, t]), o
    }
}