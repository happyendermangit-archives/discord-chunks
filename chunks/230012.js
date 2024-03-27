function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsSSR: function() {
            return p
        },
        useSSRSafeId: function() {
            return c
        }
    });
    var r = n("470079");
    let i = {
            prefix: String(Math.round(1e10 * Math.random())),
            current: 0
        },
        a = r.createContext(i),
        o = r.createContext(!1),
        s = !!("undefined" != typeof window && window.document && window.document.createElement),
        u = new WeakMap,
        c = "function" == typeof r.useId ? function(e) {
            let t = r.useId(),
                [n] = (0, r.useState)(p()),
                a = n ? "react-aria" : `react-aria${i.prefix}`;
            return e || `${a}-${t}`
        } : function(e) {
            let t = (0, r.useContext)(a);
            t === i && !s && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
            let n = function(e = !1) {
                    let t = (0, r.useContext)(a),
                        n = (0, r.useRef)(null);
                    if (null === n.current && !e) {
                        var i, o;
                        let e = null === (o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o ? void 0 : null === (i = o.ReactCurrentOwner) || void 0 === i ? void 0 : i.current;
                        if (e) {
                            let n = u.get(e);
                            null == n ? u.set(e, {
                                id: t.current,
                                state: e.memoizedState
                            }) : e.memoizedState !== n.state && (t.current = n.id, u.delete(e))
                        }
                        n.current = ++t.current
                    }
                    return n.current
                }(!!e),
                o = `react-aria${t.prefix}`;
            return e || `${o}-${n}`
        };

    function l() {
        return !1
    }

    function d() {
        return !0
    }

    function f(e) {
        return () => {}
    }

    function p() {
        return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(f, l, d) : (0, r.useContext)(o)
    }
}