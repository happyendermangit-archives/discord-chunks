function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IdleHandlerContext: function() {
            return s
        },
        IdleStateContext: function() {
            return r
        },
        default: function() {
            return o
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("862337");
    let s = l.createContext({
            onPreventIdle: () => null,
            onAllowIdle: () => null,
            onForceIdle: () => null,
            onActive: () => null
        }),
        r = l.createContext(!1);

    function o(e) {
        let {
            children: t,
            timeout: n
        } = e, [o, u] = l.useState(!1), d = l.useRef(new Set), c = l.useRef(null);
        l.useEffect(() => (c.current = new a.DelayedCall(n, () => u(!0)), c.current.delay(), () => {
            var e;
            null === (e = c.current) || void 0 === e || e.cancel(), c.current = null
        }), [n]);
        let f = l.useCallback(e => {
                var t;
                u(!1), d.current.add(e), null === (t = c.current) || void 0 === t || t.cancel()
            }, [d, c, u]),
            p = l.useCallback(e => {
                if (d.current.delete(e), 0 === d.current.size) {
                    var t;
                    null === (t = c.current) || void 0 === t || t.delay()
                }
            }, [d, c]),
            m = l.useCallback(() => {
                if (u(!1), 0 === d.current.size) {
                    var e;
                    null === (e = c.current) || void 0 === e || e.delay()
                }
            }, [d, c, u]),
            h = l.useCallback(() => {
                var e;
                !(d.current.size > 0) && (null === (e = c.current) || void 0 === e || e.cancel(), u(!0))
            }, [c, u]),
            x = l.useMemo(() => ({
                onAllowIdle: p,
                onPreventIdle: f,
                onActive: m,
                onForceIdle: h
            }), [p, f, m, h]);
        return (0, i.jsx)(r.Provider, {
            value: o,
            children: (0, i.jsx)(s.Provider, {
                value: x,
                children: t({
                    idle: o,
                    ...x
                })
            })
        })
    }
}