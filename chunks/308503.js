function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return a
        }
    }), n("222007");
    var r = n("884691");
    let i = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        o = i ? r.useEffect : r.useLayoutEffect;

    function a(t) {
        let e = "function" == typeof t ? function(t) {
                let e;
                let n = new Set,
                    r = (t, r) => {
                        let i = "function" == typeof t ? t(e) : t;
                        if (i !== e) {
                            let t = e;
                            e = r ? i : Object.assign({}, e, i), n.forEach(n => n(e, t))
                        }
                    },
                    i = () => e,
                    o = function(t) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
                        console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                        let a = r(e);

                        function u() {
                            let n = r(e);
                            if (!o(a, n)) {
                                let e = a;
                                t(a = n, e)
                            }
                        }
                        return n.add(u), () => n.delete(u)
                    },
                    a = {
                        setState: r,
                        getState: i,
                        subscribe: (t, e, r) => e || r ? o(t, e, r) : (n.add(t), () => n.delete(t)),
                        destroy: () => n.clear()
                    };
                return e = t(r, i, a), a
            }(t) : t,
            n = function() {
                let t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.getState,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                    [, a] = (0, r.useReducer)(t => t + 1, 0),
                    u = e.getState(),
                    s = (0, r.useRef)(u),
                    c = (0, r.useRef)(n),
                    l = (0, r.useRef)(i),
                    f = (0, r.useRef)(!1),
                    h = (0, r.useRef)();
                void 0 === h.current && (h.current = n(u));
                let p = !1;
                (s.current !== u || c.current !== n || l.current !== i || f.current) && (t = n(u), p = !i(h.current, t)), o(() => {
                    p && (h.current = t), s.current = u, c.current = n, l.current = i, f.current = !1
                });
                let d = (0, r.useRef)(u);
                o(() => {
                    let t = () => {
                            try {
                                let t = e.getState(),
                                    n = c.current(t);
                                !l.current(h.current, n) && (s.current = t, h.current = n, a())
                            } catch (t) {
                                f.current = !0, a()
                            }
                        },
                        n = e.subscribe(t);
                    return e.getState() !== d.current && t(), n
                }, []);
                let v = p ? t : h.current;
                return (0, r.useDebugValue)(v), v
            };
        return Object.assign(n, e), n[Symbol.iterator] = function() {
            console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
            let t = [n, e];
            return {
                next() {
                    let e = t.length <= 0;
                    return {
                        value: t.shift(),
                        done: e
                    }
                }
            }
        }, n
    }
}