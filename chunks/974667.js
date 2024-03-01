function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createListItemId: function() {
            return l.createListItemId
        },
        default: function() {
            return d
        }
    }), n("222007");
    var i = n("884691"),
        r = n("71185"),
        s = n("909283"),
        a = n("533619"),
        o = n("942367"),
        l = n("74139"),
        u = n("355262");

    function c(e, t) {
        var n;
        let i = null !== (n = t.current) && void 0 !== n ? n : document,
            r = i.querySelectorAll("[".concat(l.LIST_ITEM_ID_ATTRIBUTE, '^="').concat(e, '"]'));
        return Array.from(r)
    }

    function d(e) {
        let {
            id: t,
            defaultFocused: n,
            isEnabled: u,
            scrollToStart: d,
            scrollToEnd: f,
            onNavigatePreviousAtStart: E,
            onNavigateNextAtEnd: p,
            setFocus: h,
            setFocusOnList: _,
            preserveFocusPosition: S = !0,
            useVirtualFocus: m = !1,
            wrap: T = !1,
            orientation: g = o.Orientations.VERTICAL,
            disableClickOnSpace: I = !1
        } = e, C = i.useRef(n ? (0, l.createListItemId)(t, n) : null), v = i.useRef(!1), A = i.useRef(null), R = i.useRef(u);

        function N(e) {
            var t;
            return (null !== (t = A.current) && void 0 !== t ? t : document).querySelector(e)
        }

        function O(e) {
            var t;
            null === (t = N(e)) || void 0 === t || t.focus()
        }
        i.useLayoutEffect(() => {
            R.current = u
        }, [u]);
        let D = i.useCallback((e, t) => {
                if (R.current) {
                    let n = null != h ? h : O;
                    n(e, t)
                }
            }, [h]),
            y = i.useCallback(e => {
                if (R.current) {
                    let t = null != _ ? _ : O;
                    t(e)
                }
            }, [_]),
            P = i.useCallback(e => {
                C.current = e;
                let n = (0, l.createSelector)(e),
                    i = (0, l.getItemId)(e);
                D(n, i), (0, s.notifyFocusSubscribers)(t, i, S)
            }, [t, S, D]),
            L = i.useMemo(() => (0, r.createFocusManager)({
                getFocusableElements: () => c(t, A),
                getActiveElement() {
                    var e;
                    return null === (e = A.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement
                },
                scrollToStart: d,
                scrollToEnd: f
            }), [t, d, f]),
            [b, M] = i.useState(!1),
            U = i.useRef(b);
        i.useLayoutEffect(() => {
            U.current = b
        }, [b]), i.useLayoutEffect(() => {
            let e = A.current;
            if (null != e) {
                if (u) return e.addEventListener("focusin", n), e.addEventListener("focusout", i), e.addEventListener("focus", r), e.addEventListener("scroll", s, {
                    passive: !0
                }), () => {
                    e.removeEventListener("focusin", n), e.removeEventListener("focusout", i), e.removeEventListener("focus", r), e.removeEventListener("scroll", s)
                }
            }

            function n() {
                M(!0)
            }

            function i(e) {
                !e.currentTarget.contains(e.relatedTarget) && (M(!1), requestAnimationFrame(() => {
                    let e = C.current;
                    if (null !== e) {
                        let n = (0, l.createSelector)(e);
                        null == N(n) && y((0, l.createSelector)(t, l.LIST_ID_ATTRIBUTE))
                    }
                }))
            }
            async function r() {
                let e = A.current,
                    n = U.current;
                if (n || null == e) return;
                let i = C.current;
                if (S && null !== i) {
                    let t = (0, l.createSelector)(i),
                        n = N(t);
                    if (null != n) {
                        if (!0 !== v.current) return D(t, (0, l.getItemId)(i));
                        {
                            let r = await (0, a.isItemVisible)(e, n);
                            if (r) return D(t, (0, l.getItemId)(i))
                        }
                    }
                }
                let r = await (0, a.findFirstVisibleItem)(e, c(t, A));
                null !== r && P(r)
            }

            function s() {
                v.current = !0
            }
        }, [u, t, S, D, _, y, P]);
        let G = i.useMemo(() => ({
                wrap: T,
                get from() {
                    if (!m) return;
                    let t = C.current;
                    if (null != t) {
                        var e;
                        let n = (0, l.createSelector)(t);
                        return null !== (e = N(n)) && void 0 !== e ? e : void 0
                    }
                    return
                }
            }), [m, T]),
            w = i.useCallback(async () => {
                let e = await L.getNextFocusableElement(G),
                    t = null == e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                null != t ? P(t) : null == e && null != p && p()
            }, [L, G, p, P]),
            k = i.useCallback(async () => {
                let e = await L.getPreviousFocusableElement(G),
                    t = null == e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                null != t ? P(t) : null == e && null != E && E()
            }, [L, G, E, P]),
            x = i.useCallback(e => {
                if (!R.current || !m && !U.current) return;
                let n = g === o.Orientations.HORIZONTAL ? o.Keys.RIGHT : o.Keys.DOWN,
                    i = g === o.Orientations.HORIZONTAL ? o.Keys.LEFT : o.Keys.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), w();
                        return;
                    case i:
                        e.stopPropagation(), e.preventDefault(), k();
                        return;
                    case o.Keys.HOME:
                        e.stopPropagation(), e.preventDefault(), d().then(() => {
                            var e;
                            let n = c(t, A),
                                i = null === (e = n[0]) || void 0 === e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                            null != i && P(i)
                        });
                        return;
                    case o.Keys.END:
                        e.stopPropagation(), e.preventDefault(), f().then(() => {
                            var e;
                            let n = c(t, A),
                                i = null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                            null != i && P(i)
                        });
                        return;
                    case o.Keys.SPACE:
                    case o.Keys.ENTER: {
                        if (e.key === o.Keys.SPACE && I || e.repeat) return;
                        let t = C.current;
                        if (null != t) {
                            var r;
                            let n = (0, l.createSelector)(t),
                                i = N(n),
                                s = null !== (r = null == i ? void 0 : i.ownerDocument) && void 0 !== r ? r : document,
                                a = m || i === s.activeElement;
                            null != i && a && (e.preventDefault(), e.stopPropagation(), null == i || i.click())
                        }
                    }
                }
            }, [w, k, t, g, f, d, P, m]),
            F = i.useCallback(e => {
                let n = null != e ? (0, l.createListItemId)(t, e) : null;
                C.current = n
            }, [t]);
        return i.useMemo(() => ({
            id: t,
            containerProps: {
                onKeyDown: x,
                ref: A,
                tabIndex: b && S ? -1 : 0
            },
            orientation: g,
            setFocus: F,
            async focusLastVisibleItem() {
                var e;
                let n = await (0, a.findLastVisibleItem)(null !== (e = A.current) && void 0 !== e ? e : document.body, c(t, A));
                null !== n && P(n)
            },
            async focusFirstVisibleItem() {
                var e;
                let n = await (0, a.findFirstVisibleItem)(null !== (e = A.current) && void 0 !== e ? e : document.body, c(t, A));
                null !== n && P(n)
            },
            focusPreviousItem: k,
            focusNextItem: w,
            focusedItemId() {
                let e = C.current;
                return e ? (0, l.getItemId)(e) : null
            }
        }), [t, x, g, b, S, F, k, w, P])
    }
    n.es(u, t)
}