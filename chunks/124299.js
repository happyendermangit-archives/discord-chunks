function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007"), n("424973");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("446662"),
        l = n("699706");
    let u = s.memo(s.forwardRef((e, t) => {
        let {
            onScroll: n,
            onResize: r,
            listPadding: u = [0, 0, 0, 0],
            renderRow: d,
            renderSection: c,
            renderSectionHeader: f,
            renderSectionFooter: _,
            renderListHeader: E,
            rowCount: h,
            rowCountBySection: g,
            rowHeight: m,
            sectionMarginBottom: p,
            sectionHeaderHeight: S,
            sectionFooterHeight: v,
            listHeaderHeight: T,
            stickyHeaders: I = !1,
            className: A,
            hideScrollbar: C = !1,
            fade: y = !1,
            initialScrollTop: N = 0,
            role: R = "list"
        } = e, [O, D] = s.useState(-1), [P, L] = s.useState(-1), M = s.useRef(null), b = s.useRef(0), U = s.useRef(-1);
        s.useLayoutEffect(() => {
            var e;
            let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t && (t.scrollTop = N)
        }, []);
        let w = s.useCallback(() => {
                let e = "function" == typeof T ? T() : T;
                return null == e ? 0 : e
            }, [T]),
            k = s.useCallback((e, t, n) => "function" == typeof m ? m(n, {
                sectionIndex: e,
                sectionRowIndex: t
            }) : m, [m]),
            V = s.useCallback(e => {
                let t = "function" == typeof S ? S(e) : S;
                return null == t ? 0 : t
            }, [S]),
            G = s.useCallback(e => {
                let t = "function" == typeof v ? v(e) : v;
                return null == t ? 0 : t
            }, [v]),
            F = s.useCallback(e => {
                let t = "function" == typeof p ? p(e) : p;
                return null == t ? 0 : t
            }, [p]),
            x = s.useRef([]),
            B = s.useRef([]),
            {
                totalHeight: H,
                rowDescriptors: Y,
                sectionDescriptors: K
            } = s.useMemo(() => {
                let e = 0,
                    t = null != g,
                    n = t ? g.length : 1,
                    i = u[0],
                    s = [],
                    r = [];
                i += w();
                for (let a = 0; a < n; a++) {
                    let n = t ? g[a] : h,
                        o = (null == g ? void 0 : g[a]) !== 0;
                    r[a] = {
                        firstRowIndex: e,
                        offset: {
                            top: i,
                            bottom: -1
                        }
                    }, i += V(a);
                    for (let t = 0; t < n; t++) {
                        let n = o ? k(a, t, e) : 0,
                            r = i + n,
                            l = {
                                top: i,
                                bottom: r
                            };
                        s[e] = {
                            sectionIndex: a,
                            offset: l
                        }, i = r, e++
                    }
                    i += G(a) + F(a), r[a].offset.bottom = i
                }
                return {
                    totalHeight: i += u[2],
                    rowDescriptors: s,
                    sectionDescriptors: r
                }
            }, [k, G, V, F, u, h, g, w]);
        x.current = K, B.current = Y;
        let j = s.useCallback(() => {
            var e;
            let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode();
            if (null == t) return;
            let {
                offsetWidth: n,
                offsetHeight: i,
                scrollTop: s
            } = t;
            L(i), D(s), null == r || r({
                width: n,
                height: i
            })
        }, [r]);
        s.useLayoutEffect(() => {
            -1 === P && j()
        }, [P, j]), s.useEffect(() => {
            var e;
            let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                n = null == t ? void 0 : t.ownerDocument.defaultView;
            if (null == t || null == n) return;
            let i = new n.ResizeObserver(j);
            return i.observe(t), () => i.disconnect()
        }, [j]);
        let W = s.useCallback(() => {
            var e;
            let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t && (window.cancelAnimationFrame(U.current), U.current = window.requestAnimationFrame(() => {
                let {
                    scrollTop: e
                } = t;
                b.current = e, null == n || n(e), D(e)
            }))
        }, [n]);
        s.useImperativeHandle(t, () => ({
            scrollTo: function(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        animate: i = !1
                    } = n;
                null === (t = M.current) || void 0 === t || t.scrollTo({
                    to: e,
                    animate: i
                })
            },
            scrollRowIntoView: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        animate: n = !1,
                        offset: i = 0
                    } = t,
                    s = B.current[e];
                null != s && window.requestAnimationFrame(() => {
                    var t, r;
                    let {
                        sectionIndex: a,
                        offset: {
                            top: o,
                            bottom: l
                        }
                    } = s, u = V(a), d = o - (I ? u : 0) - i <= b.current, c = l + i >= b.current + P;
                    if (d) {
                        let s = b.current + u - o,
                            r = I ? b.current - s : o;
                        null === (t = M.current) || void 0 === t || t.scrollTo({
                            to: 0 === e ? 0 : r - i,
                            animate: n
                        })
                    } else if (c) {
                        let e = l - (b.current + P);
                        null === (r = M.current) || void 0 === r || r.scrollTo({
                            to: b.current + e + i,
                            animate: n
                        })
                    }
                })
            },
            scrollToSectionTop: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        animate: n = !1,
                        offset: i = 0
                    } = t,
                    s = x.current[e];
                null != s && window.requestAnimationFrame(() => {
                    var t;
                    null === (t = M.current) || void 0 === t || t.scrollTo({
                        to: (0 === e ? 0 : s.offset.top) + i,
                        animate: n
                    })
                })
            },
            getListDimensions: () => ({
                height: P,
                totalHeight: H
            }),
            getSectionDescriptors: () => x.current,
            getRowDescriptors: () => B.current,
            getScrollerNode: () => {
                var e;
                return null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode()
            },
            scrollIntoViewNode: e => {
                var t;
                return null === (t = M.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({
                    node: e
                })
            }
        }), [V, I, H, P]);
        let {
            visibleItems: z,
            listOffset: q
        } = s.useMemo(() => {
            if (-1 === P || -1 === O) return {
                visibleItems: null,
                listOffset: 0
            };
            let e = O + P,
                t = 0,
                n = u[0],
                i = [],
                s = w();
            null != E && O < s ? i.push(E()) : n += s;
            for (let s = 0; s < K.length; s++) {
                let r = K[s],
                    {
                        firstRowIndex: a,
                        offset: {
                            top: o,
                            bottom: l
                        }
                    } = r,
                    u = l - o;
                if (0 === u) continue;
                let E = V(s),
                    h = G(s),
                    g = F(s);
                if (l <= O) n = l;
                else if (l > O && o < e) {
                    t = a;
                    let r = [],
                        l = 0,
                        m = 0,
                        p = o + E,
                        S = p >= O && o <= e;
                    for (null != f && (I || S) && r.push(f(s)), !S && !I && (n += E); l + E + h < u - g;) {
                        let i = k(s, m, t),
                            a = o + l + E,
                            u = a + i;
                        if (u <= O) n = u - (I ? E : 0);
                        else if (u > O && a < e) r.push(d(t, {
                            sectionIndex: s,
                            sectionRowIndex: m
                        }));
                        else break;
                        l += i, m++, t++
                    }
                    let v = o + E + l,
                        T = v + h,
                        A = T >= O && v <= e;
                    null != _ && A && r.push(_(s)), null != c ? i.push(c(s, r)) : i = [...i, ...r]
                } else break
            }
            return {
                visibleItems: i,
                listOffset: n
            }
        }, [k, G, V, F, u, d, c, _, f, O, K, I, E, w, P]), X = s.useMemo(() => {
            var e, t, n;
            return {
                top: q,
                right: null !== (e = null == u ? void 0 : u[1]) && void 0 !== e ? e : 0,
                bottom: null !== (t = null == u ? void 0 : u[2]) && void 0 !== t ? t : 0,
                left: null !== (n = null == u ? void 0 : u[3]) && void 0 !== n ? n : 0
            }
        }, [q, u]), Q = s.useMemo(() => ({
            height: H
        }), [H]), Z = C ? o.AdvancedScrollerNone : o.AdvancedScrollerThin;
        return (0, i.jsxs)(Z, {
            fade: y,
            className: a(l.scroller, A),
            ref: M,
            onScroll: W,
            children: [(0, i.jsx)("div", {
                role: R,
                className: l.listItems,
                style: X,
                children: z
            }), (0, i.jsx)("div", {
                className: l.listHeight,
                style: Q
            })]
        })
    }));
    var d = u
}