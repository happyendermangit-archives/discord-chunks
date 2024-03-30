function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createManagedReactiveScroller: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("35628"),
        u = n("714417"),
        s = n("173566");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                c(e, t, n[t])
            })
        }
        return e
    }

    function d(e, t) {
        var n = new Map,
            o = new t(function(e) {
                e.forEach(function(e) {
                    var t, r = e.target;
                    null === (t = n.get(r)) || void 0 === t || t(e)
                })
            });
        return r.forwardRef(function(t, d) {
            var _, E, p, m = t.children,
                y = t.className,
                I = t.onResize,
                h = t.contentClassName,
                O = t.onScroll,
                T = t.dir,
                S = t.fade,
                v = void 0 !== S && S,
                g = t.customTheme,
                A = t.style,
                b = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) {
                            if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                    }
                    return o
                }(t, ["children", "className", "onResize", "contentClassName", "onScroll", "dir", "fade", "customTheme", "style"]),
                N = r.useRef(null),
                R = r.useRef(null);
            var C = (_ = r.useState(!1), E = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(_) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(_, E) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                    }
                }(_, E) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                P = C[0],
                D = C[1],
                L = (0, u.useUncachedScrollerState)(),
                M = L.scrollerRef,
                U = L.getScrollerState,
                w = (0, u.useScrollSpring)(M);
            r.useImperativeHandle(d, function() {
                return f({
                    getScrollerNode: function() {
                        return M.current
                    },
                    isScrolling: function() {
                        return null != N.current
                    },
                    getScrollerState: U
                }, (0, u.getAnimatedScrollHelpers)(M, U, w))
            }, [M, U, w]);
            var k = r.useCallback(function(e) {
                null == N.current ? D(!0) : clearTimeout(N.current), N.current = setTimeout(function() {
                    N.current = null, D(!1)
                }, 200), null != O && O(e)
            }, [O]);
            return r.useEffect(function() {
                return function() {
                    return clearTimeout(N.current)
                }
            }, []), (0, u.useResizeObserverSubscription)({
                ref: M,
                key: "container",
                onUpdate: I,
                resizeObserver: o,
                listenerMap: n
            }), (0, u.useResizeObserverSubscription)({
                ref: R,
                key: "content",
                onUpdate: I,
                resizeObserver: o,
                listenerMap: n
            }), r.createElement("div", f({
                ref: M,
                className: i()(y, (c(p = {}, s.fade, v), c(p, s.customTheme, void 0 !== g && g), c(p, e, !0), c(p, s.managedReactiveScroller, !0), c(p, s.scrolling, P && v), p)),
                style: A,
                dir: void 0 === T ? "ltr" : T,
                onScroll: k
            }, b), r.createElement(a.FocusRingScope, {
                containerRef: R
            }, r.createElement("div", {
                ref: R,
                className: i()(h, s.content)
            }, m, P && r.createElement("div", {
                className: s.pointerCover
            }))))
        })
    }
}