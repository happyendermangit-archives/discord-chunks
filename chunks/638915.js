function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSSRSafeId: function() {
            return u
        },
        useIsSSR: function() {
            return p
        }
    }), n("222007");
    var r = n("884691");
    let i = {
            prefix: String(Math.round(1e10 * Math.random())),
            current: 0
        },
        o = r.createContext(i),
        s = r.createContext(!1),
        a = !!("undefined" != typeof window && window.document && window.document.createElement),
        c = new WeakMap,
        u = "function" == typeof r.useId ? function(e) {
            let t = r.useId(),
                [n] = (0, r.useState)(p()),
                o = n ? "react-aria" : "react-aria".concat(i.prefix);
            return e || "".concat(o, "-").concat(t)
        } : function(e) {
            let t = (0, r.useContext)(o);
            t === i && !a && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
            let n = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = (0, r.useContext)(o),
                        n = (0, r.useRef)(null);
                    if (null === n.current && !e) {
                        var i, s;
                        let e = null === (s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === s ? void 0 : null === (i = s.ReactCurrentOwner) || void 0 === i ? void 0 : i.current;
                        if (e) {
                            let n = c.get(e);
                            null == n ? c.set(e, {
                                id: t.current,
                                state: e.memoizedState
                            }) : e.memoizedState !== n.state && (t.current = n.id, c.delete(e))
                        }
                        n.current = ++t.current
                    }
                    return n.current
                }(!!e),
                s = "react-aria".concat(t.prefix);
            return e || "".concat(s, "-").concat(n)
        };

    function d() {
        return !1
    }

    function l() {
        return !0
    }

    function f(e) {
        return () => {}
    }

    function p() {
        return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(f, d, l) : (0, r.useContext)(s)
    }
}