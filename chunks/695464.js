function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("147479"),
        l = n("900299");
    let u = r.memo(r.forwardRef((e, t) => {
        let {
            onScroll: n,
            onResize: a,
            listPadding: u = [0, 0, 0, 0],
            renderRow: d,
            renderSection: _,
            renderSectionHeader: c,
            renderSectionFooter: E,
            renderListHeader: I,
            rowCount: T,
            rowCountBySection: f,
            rowHeight: S,
            sectionMarginBottom: h,
            sectionHeaderHeight: A,
            sectionFooterHeight: m,
            listHeaderHeight: N,
            stickyHeaders: p = !1,
            className: O,
            hideScrollbar: R = !1,
            fade: C = !1,
            initialScrollTop: g = 0,
            role: L = "list"
        } = e, [v, D] = r.useState(-1), [M, y] = r.useState(-1), P = r.useRef(null), U = r.useRef(0), b = r.useRef(-1);
        r.useLayoutEffect(() => {
            var e;
            let t = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t && (t.scrollTop = g)
        }, []);
        let G = r.useCallback(() => {
                let e = "function" == typeof N ? N() : N;
                return null == e ? 0 : e
            }, [N]),
            w = r.useCallback((e, t, n) => "function" == typeof S ? S(n, {
                sectionIndex: e,
                sectionRowIndex: t
            }) : S, [S]),
            B = r.useCallback(e => {
                let t = "function" == typeof A ? A(e) : A;
                return null == t ? 0 : t
            }, [A]),
            k = r.useCallback(e => {
                let t = "function" == typeof m ? m(e) : m;
                return null == t ? 0 : t
            }, [m]),
            V = r.useCallback(e => {
                let t = "function" == typeof h ? h(e) : h;
                return null == t ? 0 : t
            }, [h]),
            x = r.useRef([]),
            F = r.useRef([]),
            {
                totalHeight: H,
                rowDescriptors: Y,
                sectionDescriptors: j
            } = r.useMemo(() => {
                let e = 0,
                    t = null != f,
                    n = t ? f.length : 1,
                    i = u[0],
                    r = [],
                    a = [];
                i += G();
                for (let s = 0; s < n; s++) {
                    let n = t ? f[s] : T,
                        o = (null == f ? void 0 : f[s]) !== 0;
                    a[s] = {
                        firstRowIndex: e,
                        offset: {
                            top: i,
                            bottom: -1
                        }
                    }, i += B(s);
                    for (let t = 0; t < n; t++) {
                        let n = i + (o ? w(s, t, e) : 0),
                            a = {
                                top: i,
                                bottom: n
                            };
                        r[e] = {
                            sectionIndex: s,
                            offset: a
                        }, i = n, e++
                    }
                    i += k(s) + V(s), a[s].offset.bottom = i
                }
                return {
                    totalHeight: i += u[2],
                    rowDescriptors: r,
                    sectionDescriptors: a
                }
            }, [w, k, B, V, u, T, f, G]);
        x.current = j, F.current = Y;
        let W = r.useCallback(() => {
            var e;
            let t = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode();
            if (null == t) return;
            let {
                offsetWidth: n,
                offsetHeight: i,
                scrollTop: r
            } = t;
            y(i), D(r), null == a || a({
                width: n,
                height: i
            })
        }, [a]);
        r.useLayoutEffect(() => {
            -1 === M && W()
        }, [M, W]), r.useEffect(() => {
            var e;
            let t = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                n = null == t ? void 0 : t.ownerDocument.defaultView;
            if (null == t || null == n) return;
            let i = new n.ResizeObserver(W);
            return i.observe(t), () => i.disconnect()
        }, [W]);
        let K = r.useCallback(() => {
            var e;
            let t = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t && (window.cancelAnimationFrame(b.current), b.current = window.requestAnimationFrame(() => {
                let {
                    scrollTop: e
                } = t;
                U.current = e, null == n || n(e), D(e)
            }))
        }, [n]);
        r.useImperativeHandle(t, () => ({
            scrollTo: function(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        animate: i = !1
                    } = n;
                null === (t = P.current) || void 0 === t || t.scrollTo({
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
                    r = F.current[e];
                null != r && window.requestAnimationFrame(() => {
                    var t, a;
                    let {
                        sectionIndex: s,
                        offset: {
                            top: o,
                            bottom: l
                        }
                    } = r, u = B(s), d = o - (p ? u : 0) - i <= U.current, _ = l + i >= U.current + M;
                    if (d) {
                        let r = U.current + u - o,
                            a = p ? U.current - r : o;
                        null === (t = P.current) || void 0 === t || t.scrollTo({
                            to: 0 === e ? 0 : a - i,
                            animate: n
                        })
                    } else if (_) {
                        let e = l - (U.current + M);
                        null === (a = P.current) || void 0 === a || a.scrollTo({
                            to: U.current + e + i,
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
                    r = x.current[e];
                null != r && window.requestAnimationFrame(() => {
                    var t;
                    null === (t = P.current) || void 0 === t || t.scrollTo({
                        to: (0 === e ? 0 : r.offset.top) + i,
                        animate: n
                    })
                })
            },
            getListDimensions: () => ({
                height: M,
                totalHeight: H
            }),
            getSectionDescriptors: () => x.current,
            getRowDescriptors: () => F.current,
            getScrollerNode: () => {
                var e;
                return null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerNode()
            },
            scrollIntoViewNode: e => {
                var t;
                return null === (t = P.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({
                    node: e
                })
            }
        }), [B, p, H, M]);
        let {
            visibleItems: z,
            listOffset: Z
        } = r.useMemo(() => {
            if (-1 === M || -1 === v) return {
                visibleItems: null,
                listOffset: 0
            };
            let e = v + M,
                t = 0,
                n = u[0],
                i = [],
                r = G();
            null != I && v < r ? i.push(I()) : n += r;
            for (let r = 0; r < j.length; r++) {
                let {
                    firstRowIndex: a,
                    offset: {
                        top: s,
                        bottom: o
                    }
                } = j[r], l = o - s;
                if (0 === l) continue;
                let u = B(r),
                    I = k(r),
                    T = V(r);
                if (o <= v) n = o;
                else if (o > v && s < e) {
                    t = a;
                    let o = [],
                        f = 0,
                        S = 0,
                        h = s + u >= v && s <= e;
                    for (null != c && (p || h) && o.push(c(r)), !h && !p && (n += u); f + u + I < l - T;) {
                        let i = w(r, S, t),
                            a = s + f + u,
                            l = a + i;
                        if (l <= v) n = l - (p ? u : 0);
                        else if (l > v && a < e) o.push(d(t, {
                            sectionIndex: r,
                            sectionRowIndex: S
                        }));
                        else break;
                        f += i, S++, t++
                    }
                    let A = s + u + f,
                        m = A + I >= v && A <= e;
                    null != E && m && o.push(E(r)), null != _ ? i.push(_(r, o)) : i = [...i, ...o]
                } else break
            }
            return {
                visibleItems: i,
                listOffset: n
            }
        }, [w, k, B, V, u, d, _, E, c, v, j, p, I, G, M]), X = r.useMemo(() => {
            var e, t, n;
            return {
                top: Z,
                right: null !== (e = null == u ? void 0 : u[1]) && void 0 !== e ? e : 0,
                bottom: null !== (t = null == u ? void 0 : u[2]) && void 0 !== t ? t : 0,
                left: null !== (n = null == u ? void 0 : u[3]) && void 0 !== n ? n : 0
            }
        }, [Z, u]), Q = r.useMemo(() => ({
            height: H
        }), [H]), q = R ? o.AdvancedScrollerNone : o.AdvancedScrollerThin;
        return (0, i.jsxs)(q, {
            fade: C,
            className: s()(l.scroller, O),
            ref: P,
            onScroll: K,
            children: [(0, i.jsx)("div", {
                role: L,
                className: l.listItems,
                style: X,
                children: z
            }), (0, i.jsx)("div", {
                className: l.listHeight,
                style: Q
            })]
        })
    }));
    t.default = u
}