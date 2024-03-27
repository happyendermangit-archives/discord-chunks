function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("470079");
    let i = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? r.useEffect : r.useLayoutEffect;

    function a(e) {
        let t = "function" == typeof e ? function(e) {
                let t;
                let n = new Set,
                    r = (e, r) => {
                        let i = "function" == typeof e ? e(t) : e;
                        if (i !== t) {
                            let e = t;
                            t = r ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
                        }
                    },
                    i = () => t,
                    a = (e, r = i, a = Object.is) => {
                        console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                        let o = r(t);

                        function s() {
                            let n = r(t);
                            if (!a(o, n)) {
                                let t = o;
                                e(o = n, t)
                            }
                        }
                        return n.add(s), () => n.delete(s)
                    },
                    o = {
                        setState: r,
                        getState: i,
                        subscribe: (e, t, r) => t || r ? a(e, t, r) : (n.add(e), () => n.delete(e)),
                        destroy: () => n.clear()
                    };
                return t = e(r, i, o), o
            }(e) : e,
            n = (e = t.getState, n = Object.is) => {
                let a;
                let [, o] = (0, r.useReducer)(e => e + 1, 0), s = t.getState(), u = (0, r.useRef)(s), c = (0, r.useRef)(e), l = (0, r.useRef)(n), d = (0, r.useRef)(!1), f = (0, r.useRef)();
                void 0 === f.current && (f.current = e(s));
                let p = !1;
                (u.current !== s || c.current !== e || l.current !== n || d.current) && (a = e(s), p = !n(f.current, a)), i(() => {
                    p && (f.current = a), u.current = s, c.current = e, l.current = n, d.current = !1
                });
                let h = (0, r.useRef)(s);
                i(() => {
                    let e = () => {
                            try {
                                let e = t.getState(),
                                    n = c.current(e);
                                !l.current(f.current, n) && (u.current = e, f.current = n, o())
                            } catch (e) {
                                d.current = !0, o()
                            }
                        },
                        n = t.subscribe(e);
                    return t.getState() !== h.current && e(), n
                }, []);
                let m = p ? a : f.current;
                return (0, r.useDebugValue)(m), m
            };
        return Object.assign(n, t), n[Symbol.iterator] = function() {
            console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
            let e = [n, t];
            return {
                next() {
                    let t = e.length <= 0;
                    return {
                        value: e.shift(),
                        done: t
                    }
                }
            }
        }, n
    }
}