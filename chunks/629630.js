function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsVisible: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("62980"),
        i = n("513816"),
        a = {},
        u = new Map([
            [1, {
                threshold: 1
            }]
        ]);

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            s = (0, o.default)(function(t) {
                e(t.isIntersecting)
            }),
            l = (0, r.useMemo)(function() {
                var e, n;
                return e = t, null != (n = u.get(e)) ? n : (n = {
                    threshold: e
                }, u.set(e, n), n)
            }, [t]);
        return function(e, t) {
            var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                u = (0, r.useRef)(null),
                s = (0, o.default)(null != t ? t : a),
                l = (0, r.useRef)(null);
            return (0, r.useLayoutEffect)(function() {
                if (!!n) {
                    null == l.current && (l.current = (0, i.getIntersectionObserver)(s.current));
                    var t = u.current,
                        r = l.current;
                    null != t && null != r && (0, i.watch)(r, t, e)
                }
            }, [n, e]), (0, r.useEffect)(function() {
                if (!!n) {
                    var e = u.current,
                        t = l.current;
                    if (null != e && null != t) return function() {
                        (0, i.unwatch)(t, e)
                    }
                }
            }, [n, t]), u
        }(s.current, l, n)
    }
}