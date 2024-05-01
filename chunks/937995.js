function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IdleHandlerContext: function() {
            return s
        },
        IdleStateContext: function() {
            return o
        },
        default: function() {
            return l
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("846519");
    let s = r.createContext({
            onPreventIdle: () => null,
            onAllowIdle: () => null,
            onForceIdle: () => null,
            onActive: () => null
        }),
        o = r.createContext(!1);

    function l(e) {
        let {
            children: t,
            timeout: n
        } = e, [l, u] = r.useState(!1), d = r.useRef(new Set), _ = r.useRef(null);
        r.useEffect(() => (_.current = new a.DelayedCall(n, () => u(!0)), _.current.delay(), () => {
            var e;
            null === (e = _.current) || void 0 === e || e.cancel(), _.current = null
        }), [n]);
        let c = r.useCallback(e => {
                var t;
                u(!1), d.current.add(e), null === (t = _.current) || void 0 === t || t.cancel()
            }, [d, _, u]),
            E = r.useCallback(e => {
                if (d.current.delete(e), 0 === d.current.size) {
                    var t;
                    null === (t = _.current) || void 0 === t || t.delay()
                }
            }, [d, _]),
            I = r.useCallback(() => {
                if (u(!1), 0 === d.current.size) {
                    var e;
                    null === (e = _.current) || void 0 === e || e.delay()
                }
            }, [d, _, u]),
            T = r.useCallback(() => {
                var e;
                !(d.current.size > 0) && (null === (e = _.current) || void 0 === e || e.cancel(), u(!0))
            }, [_, u]),
            f = r.useMemo(() => ({
                onAllowIdle: E,
                onPreventIdle: c,
                onActive: I,
                onForceIdle: T
            }), [E, c, I, T]);
        return (0, i.jsx)(o.Provider, {
            value: l,
            children: (0, i.jsx)(s.Provider, {
                value: f,
                children: t({
                    idle: l,
                    ...f
                })
            })
        })
    }
}