function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsVisible: function() {
            return l
        }
    }), n("222007");
    var i = n("884691"),
        s = n("561744"),
        r = n("595698");
    let a = {},
        o = new Map([
            [1, {
                threshold: 1
            }]
        ]);

    function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = (0, s.default)(t => {
                e(t.isIntersecting)
            }),
            u = (0, i.useMemo)(() => {
                var e;
                let n;
                return e = t, null != (n = o.get(e)) ? n : (n = {
                    threshold: e
                }, o.set(e, n), n)
            }, [t]);
        return function(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                o = (0, i.useRef)(null),
                l = (0, s.default)(null != t ? t : a),
                u = (0, i.useRef)(null);
            return (0, i.useLayoutEffect)(() => {
                if (!n) return;
                null == u.current && (u.current = (0, r.getIntersectionObserver)(l.current));
                let t = o.current,
                    i = u.current;
                null != t && null != i && (0, r.watch)(i, t, e)
            }, [n, e]), (0, i.useEffect)(() => {
                if (!n) return;
                let e = o.current,
                    t = u.current;
                if (null != e && null != t) return () => {
                    (0, r.unwatch)(t, e)
                }
            }, [n, t]), o
        }(l.current, u, n)
    }
}