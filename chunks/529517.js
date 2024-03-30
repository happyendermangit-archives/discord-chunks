function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        },
        useVirtualizedAnchor: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("115423"),
        i = n("996757"),
        a = n("314187");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var l = Object.freeze({
        spacerTop: 0,
        totalHeight: 0,
        items: [],
        isSidebarVisible: !1
    });

    function c(e) {
        var t, n, u = e.sections,
            c = e.sectionHeight,
            f = e.rowHeight,
            d = e.footerHeight,
            _ = e.sidebarHeight,
            E = e.listHeaderHeight,
            p = e.chunkSize,
            m = void 0 === p ? 256 : p,
            y = e.paddingTop,
            I = void 0 === y ? 0 : y,
            h = e.paddingBottom,
            O = void 0 === h ? 0 : h,
            T = e.getScrollerState,
            S = e.getAnchorId,
            v = (0, i.default)(),
            g = (0, r.useRef)(l),
            A = s((0, r.useState)(function() {
                return new o.default
            }), 1)[0],
            b = (0, a.default)({
                chunkSize: m,
                getScrollerState: T,
                forceUpdate: v
            }),
            N = b.dirty,
            R = b.chunkStart,
            C = b.chunkEnd,
            P = b.forceUpdateOnChunkChange,
            D = g.current.items,
            L = null,
            M = T().scrollTop,
            U = !0,
            w = !1,
            k = void 0;
        try {
            for (var G, B = D[Symbol.iterator](); !(U = (G = B.next()).done); U = !0) {
                var j = G.value;
                if (0 === M) break;
                if ("footer" !== j.type && "header" !== j.type && null != j.anchorId) {
                    var F = "row" === j.type ? j.row : void 0;
                    if (j.offsetTop >= M) {
                        L = {
                            id: j.anchorId,
                            section: j.section,
                            row: F,
                            scrollOffset: j.offsetTop - M
                        };
                        break
                    }
                }
            }
        } catch (e) {
            w = !0, k = e
        } finally {
            try {
                !U && null != B.return && B.return()
            } finally {
                if (w) throw k
            }
        }
        var V = (0, r.useMemo)(function() {
                var e = Math.max(0, R * m);
                return null != _ && e < _
            }, [m, R, _]),
            H = (0, r.useMemo)(function() {
                return N > 0 ? g.current : (A.mergeProps({
                    sectionHeight: c,
                    rowHeight: f,
                    footerHeight: d,
                    listHeaderHeight: E,
                    paddingBottom: O,
                    paddingTop: I,
                    sections: u,
                    getAnchorId: S
                }), A.compute(Math.max(0, R * m), C * m))
            }, [N, R, C, c, f, d, E, O, I, u, A, m, S]);
        return (0, r.useLayoutEffect)(function() {
            g.current = H
        }), t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, H), n = (n = {
            listComputer: A,
            forceUpdateOnChunkChange: P,
            anchor: L,
            isSidebarVisible: V
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t
    }

    function f(e) {
        var t = e.scrollerRef,
            n = e.anchor,
            o = e.getScrollerState,
            i = e.listComputer,
            a = e.getAnchorId,
            u = e.totalHeight;
        (0, r.useLayoutEffect)(function() {
            var e = t.current,
                r = o().scrollTop;
            if (null == n || null == n.row || null == e || null == a || 0 === r) return;
            var u = function(t) {
                if (t < 0 || t >= i.sections[n.section] || a(n.section, n.row) !== n.id) return !1;
                var o = s(i.computeScrollPosition(n.section, t), 1)[0] - n.scrollOffset;
                return r !== o && (e.scrollTop = o), !0
            };
            if (!u(n.row)) !u(n.row - 1) && u(n.row + 1)
        }, [u])
    }
}