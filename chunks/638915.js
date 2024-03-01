function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSSRSafeId: function() {
            return l
        },
        useIsSSR: function() {
            return f
        }
    }), n("222007");
    var r = n("884691");
    let a = {
            prefix: String(Math.round(1e10 * Math.random())),
            current: 0
        },
        i = r.createContext(a),
        o = r.createContext(!1),
        s = !!("undefined" != typeof window && window.document && window.document.createElement),
        c = new WeakMap,
        l = "function" == typeof r.useId ? function(e) {
            let t = r.useId(),
                [n] = (0, r.useState)(f()),
                i = n ? "react-aria" : "react-aria".concat(a.prefix);
            return e || "".concat(i, "-").concat(t)
        } : function(e) {
            let t = (0, r.useContext)(i);
            t === a && !s && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
            let n = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = (0, r.useContext)(i),
                        n = (0, r.useRef)(null);
                    if (null === n.current && !e) {
                        var a, o;
                        let e = null === (o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o ? void 0 : null === (a = o.ReactCurrentOwner) || void 0 === a ? void 0 : a.current;
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
                o = "react-aria".concat(t.prefix);
            return e || "".concat(o, "-").concat(n)
        };

    function u() {
        return !1
    }

    function d() {
        return !0
    }

    function p(e) {
        return () => {}
    }

    function f() {
        return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(p, u, d) : (0, r.useContext)(o)
    }
}