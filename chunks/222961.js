function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("882393"),
        u = n("68389");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e, t) {
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
        }(e, t) || f(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e) {
        return function(e) {
            if (Array.isArray(e)) return s(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || f(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(e, t) {
        if (e) {
            if ("string" == typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
        }
    }
    var d = r.memo(r.forwardRef(function(e, t) {
        var n = e.onScroll,
            o = e.onResize,
            s = e.listPadding,
            f = void 0 === s ? [0, 0, 0, 0] : s,
            d = e.renderRow,
            _ = e.renderSection,
            E = e.renderSectionHeader,
            p = e.renderSectionFooter,
            m = e.renderListHeader,
            y = e.rowCount,
            I = e.rowCountBySection,
            h = e.rowHeight,
            O = e.sectionMarginBottom,
            T = e.sectionHeaderHeight,
            S = e.sectionFooterHeight,
            v = e.listHeaderHeight,
            g = e.stickyHeaders,
            A = void 0 !== g && g,
            b = e.className,
            N = e.hideScrollbar,
            R = e.fade,
            C = e.initialScrollTop,
            P = void 0 === C ? 0 : C,
            D = e.role,
            L = l(r.useState(-1), 2),
            M = L[0],
            U = L[1],
            w = l(r.useState(-1), 2),
            k = w[0],
            G = w[1],
            B = r.useRef(null),
            j = r.useRef(0),
            F = r.useRef(-1);
        r.useLayoutEffect(function() {
            var e, t = null === (e = B.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t && (t.scrollTop = P)
        }, []);
        var V = r.useCallback(function() {
                var e = "function" == typeof v ? v() : v;
                return null == e ? 0 : e
            }, [v]),
            H = r.useCallback(function(e, t, n) {
                return "function" == typeof h ? h(n, {
                    sectionIndex: e,
                    sectionRowIndex: t
                }) : h
            }, [h]),
            x = r.useCallback(function(e) {
                var t = "function" == typeof T ? T(e) : T;
                return null == t ? 0 : t
            }, [T]),
            Y = r.useCallback(function(e) {
                var t = "function" == typeof S ? S(e) : S;
                return null == t ? 0 : t
            }, [S]),
            W = r.useCallback(function(e) {
                var t = "function" == typeof O ? O(e) : O;
                return null == t ? 0 : t
            }, [O]),
            K = r.useRef([]),
            z = r.useRef([]),
            X = r.useMemo(function() {
                var e = 0,
                    t = null != I,
                    n = t ? I.length : 1,
                    r = f[0],
                    o = [],
                    i = [];
                r += V();
                for (var a = 0; a < n; a++) {
                    var u = t ? I[a] : y,
                        s = (null == I ? void 0 : I[a]) !== 0;
                    i[a] = {
                        firstRowIndex: e,
                        offset: {
                            top: r,
                            bottom: -1
                        }
                    }, r += x(a);
                    for (var l = 0; l < u; l++) {
                        var c = r + (s ? H(a, l, e) : 0),
                            d = {
                                top: r,
                                bottom: c
                            };
                        o[e] = {
                            sectionIndex: a,
                            offset: d
                        }, r = c, e++
                    }
                    r += Y(a) + W(a), i[a].offset.bottom = r
                }
                return {
                    totalHeight: r += f[2],
                    rowDescriptors: o,
                    sectionDescriptors: i
                }
            }, [H, Y, x, W, f, y, I, V]),
            q = X.totalHeight,
            Q = X.rowDescriptors,
            J = X.sectionDescriptors;
        K.current = J, z.current = Q;
        var Z = r.useCallback(function() {
            var e, t = null === (e = B.current) || void 0 === e ? void 0 : e.getScrollerNode();
            if (null != t) {
                var n = t.offsetWidth,
                    r = t.offsetHeight,
                    i = t.scrollTop;
                G(r), U(i), null == o || o({
                    width: n,
                    height: r
                })
            }
        }, [o]);
        r.useLayoutEffect(function() {
            -1 === k && Z()
        }, [k, Z]), r.useEffect(function() {
            var e, t = null === (e = B.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                n = null == t ? void 0 : t.ownerDocument.defaultView;
            if (null != t && null != n) {
                var r = new n.ResizeObserver(Z);
                return r.observe(t),
                    function() {
                        return r.disconnect()
                    }
            }
        }, [Z]);
        var $ = r.useCallback(function() {
            var e, t = null === (e = B.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t && (window.cancelAnimationFrame(F.current), F.current = window.requestAnimationFrame(function() {
                var e = t.scrollTop;
                j.current = e, null == n || n(e), U(e)
            }))
        }, [n]);
        r.useImperativeHandle(t, function() {
            return {
                scrollTo: function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.animate;
                    null === (t = B.current) || void 0 === t || t.scrollTo({
                        to: e,
                        animate: void 0 !== r && r
                    })
                },
                scrollRowIntoView: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.animate,
                        r = void 0 !== n && n,
                        o = t.offset,
                        i = void 0 === o ? 0 : o,
                        a = z.current[e];
                    null != a && window.requestAnimationFrame(function() {
                        var t = a.sectionIndex,
                            n = a.offset,
                            o = n.top,
                            u = n.bottom,
                            s = x(t),
                            l = o - (A ? s : 0) - i <= j.current,
                            c = u + i >= j.current + k;
                        if (l) {
                            var f, d = j.current + s - o,
                                _ = A ? j.current - d : o;
                            null === (f = B.current) || void 0 === f || f.scrollTo({
                                to: 0 === e ? 0 : _ - i,
                                animate: r
                            })
                        } else if (c) {
                            var E, p = u - (j.current + k);
                            null === (E = B.current) || void 0 === E || E.scrollTo({
                                to: j.current + p + i,
                                animate: r
                            })
                        }
                    })
                },
                scrollToSectionTop: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.animate,
                        r = void 0 !== n && n,
                        o = t.offset,
                        i = void 0 === o ? 0 : o,
                        a = K.current[e];
                    null != a && window.requestAnimationFrame(function() {
                        var t;
                        null === (t = B.current) || void 0 === t || t.scrollTo({
                            to: (0 === e ? 0 : a.offset.top) + i,
                            animate: r
                        })
                    })
                },
                getListDimensions: function() {
                    return {
                        height: k,
                        totalHeight: q
                    }
                },
                getSectionDescriptors: function() {
                    return K.current
                },
                getRowDescriptors: function() {
                    return z.current
                },
                getScrollerNode: function() {
                    var e;
                    return null === (e = B.current) || void 0 === e ? void 0 : e.getScrollerNode()
                },
                scrollIntoViewNode: function(e) {
                    var t;
                    return null === (t = B.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({
                        node: e
                    })
                }
            }
        }, [x, A, q, k]);
        var ee = r.useMemo(function() {
                if (-1 === k || -1 === M) return {
                    visibleItems: null,
                    listOffset: 0
                };
                var e = M + k,
                    t = 0,
                    n = f[0],
                    r = [],
                    o = V();
                null != m && M < o ? r.push(m()) : n += o;
                for (var i = 0; i < J.length; i++) {
                    var a = J[i],
                        u = a.firstRowIndex,
                        s = a.offset,
                        l = s.top,
                        y = s.bottom,
                        I = y - l;
                    if (0 !== I) {
                        var h = x(i),
                            O = Y(i),
                            T = W(i);
                        if (y <= M) n = y;
                        else if (y > M && l < e) {
                            t = u;
                            var S = [],
                                v = 0,
                                g = 0,
                                b = l + h >= M && l <= e;
                            for (null != E && (A || b) && S.push(E(i)), !b && !A && (n += h); v + h + O < I - T;) {
                                var N = H(i, g, t),
                                    R = l + v + h,
                                    C = R + N;
                                if (C <= M) n = C - (A ? h : 0);
                                else if (C > M && R < e) S.push(d(t, {
                                    sectionIndex: i,
                                    sectionRowIndex: g
                                }));
                                else break;
                                v += N, g++, t++
                            }
                            var P = l + h + v,
                                D = P + O >= M && P <= e;
                            null != p && D && S.push(p(i)), null != _ ? r.push(_(i, S)) : r = c(r).concat(c(S))
                        } else break
                    }
                }
                return {
                    visibleItems: r,
                    listOffset: n
                }
            }, [H, Y, x, W, f, d, _, p, E, M, J, A, m, V, k]),
            et = ee.visibleItems,
            en = ee.listOffset,
            er = r.useMemo(function() {
                var e, t, n;
                return {
                    top: en,
                    right: null !== (e = null == f ? void 0 : f[1]) && void 0 !== e ? e : 0,
                    bottom: null !== (t = null == f ? void 0 : f[2]) && void 0 !== t ? t : 0,
                    left: null !== (n = null == f ? void 0 : f[3]) && void 0 !== n ? n : 0
                }
            }, [en, f]),
            eo = r.useMemo(function() {
                return {
                    height: q
                }
            }, [q]),
            ei = void 0 !== N && N ? a.AdvancedScrollerNone : a.AdvancedScrollerThin;
        return r.createElement(ei, {
            fade: void 0 !== R && R,
            className: i()(u.scroller, b),
            ref: B,
            onScroll: $
        }, r.createElement("div", {
            role: void 0 === D ? "list" : D,
            className: u.listItems,
            style: er
        }, et), r.createElement("div", {
            className: u.listHeight,
            style: eo
        }))
    }));
    t.default = d
}