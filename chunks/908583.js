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
    var l = n("37983"),
        i = n("884691"),
        a = n("862337");
    let s = i.createContext({
            onPreventIdle: () => null,
            onAllowIdle: () => null,
            onForceIdle: () => null,
            onActive: () => null
        }),
        r = i.createContext(!1);

    function o(e) {
        let {
            children: t,
            timeout: n
        } = e, [o, u] = i.useState(!1), d = i.useRef(new Set), c = i.useRef(null);
        i.useEffect(() => (c.current = new a.DelayedCall(n, () => u(!0)), c.current.delay(), () => {
            var e;
            null === (e = c.current) || void 0 === e || e.cancel(), c.current = null
        }), [n]);
        let f = i.useCallback(e => {
                var t;
                u(!1), d.current.add(e), null === (t = c.current) || void 0 === t || t.cancel()
            }, [d, c, u]),
            m = i.useCallback(e => {
                if (d.current.delete(e), 0 === d.current.size) {
                    var t;
                    null === (t = c.current) || void 0 === t || t.delay()
                }
            }, [d, c]),
            p = i.useCallback(() => {
                if (u(!1), 0 === d.current.size) {
                    var e;
                    null === (e = c.current) || void 0 === e || e.delay()
                }
            }, [d, c, u]),
            h = i.useCallback(() => {
                var e;
                !(d.current.size > 0) && (null === (e = c.current) || void 0 === e || e.cancel(), u(!0))
            }, [c, u]),
            E = i.useMemo(() => ({
                onAllowIdle: m,
                onPreventIdle: f,
                onActive: p,
                onForceIdle: h
            }), [m, f, p, h]);
        return (0, l.jsx)(r.Provider, {
            value: o,
            children: (0, l.jsx)(s.Provider, {
                value: E,
                children: t({
                    idle: o,
                    ...E
                })
            })
        })
    }
}