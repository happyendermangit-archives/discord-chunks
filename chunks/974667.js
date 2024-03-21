function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createListItemId: function() {
            return l.createListItemId
        },
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("884691"),
        s = n("71185"),
        r = n("909283"),
        a = n("533619"),
        o = n("942367"),
        l = n("74139"),
        u = n("355262");

    function d(e, t) {
        var n;
        let i = null !== (n = t.current) && void 0 !== n ? n : document,
            s = i.querySelectorAll("[".concat(l.LIST_ITEM_ID_ATTRIBUTE, '^="').concat(e, '"]'));
        return Array.from(s)
    }

    function c(e) {
        let {
            id: t,
            defaultFocused: n,
            isEnabled: u,
            scrollToStart: c,
            scrollToEnd: _,
            onNavigatePreviousAtStart: f,
            onNavigateNextAtEnd: E,
            setFocus: h,
            setFocusOnList: g,
            preserveFocusPosition: m = !0,
            useVirtualFocus: p = !1,
            wrap: S = !1,
            orientation: v = o.Orientations.VERTICAL,
            disableClickOnSpace: T = !1
        } = e, I = i.useRef(n ? (0, l.createListItemId)(t, n) : null), A = i.useRef(!1), C = i.useRef(null), y = i.useRef(u);

        function N(e) {
            var t;
            return (null !== (t = C.current) && void 0 !== t ? t : document).querySelector(e)
        }

        function R(e) {
            var t;
            null === (t = N(e)) || void 0 === t || t.focus()
        }
        i.useLayoutEffect(() => {
            y.current = u
        }, [u]);
        let O = i.useCallback((e, t) => {
                if (y.current) {
                    let n = null != h ? h : R;
                    n(e, t)
                }
            }, [h]),
            D = i.useCallback(e => {
                if (y.current) {
                    let t = null != g ? g : R;
                    t(e)
                }
            }, [g]),
            P = i.useCallback(e => {
                I.current = e;
                let n = (0, l.createSelector)(e),
                    i = (0, l.getItemId)(e);
                O(n, i), (0, r.notifyFocusSubscribers)(t, i, m)
            }, [t, m, O]),
            L = i.useMemo(() => (0, s.createFocusManager)({
                getFocusableElements: () => d(t, C),
                getActiveElement() {
                    var e;
                    return null === (e = C.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement
                },
                scrollToStart: c,
                scrollToEnd: _
            }), [t, c, _]),
            [M, b] = i.useState(!1),
            U = i.useRef(M);
        i.useLayoutEffect(() => {
            U.current = M
        }, [M]), i.useLayoutEffect(() => {
            let e = C.current;
            if (null != e) {
                if (u) return e.addEventListener("focusin", n), e.addEventListener("focusout", i), e.addEventListener("focus", s), e.addEventListener("scroll", r, {
                    passive: !0
                }), () => {
                    e.removeEventListener("focusin", n), e.removeEventListener("focusout", i), e.removeEventListener("focus", s), e.removeEventListener("scroll", r)
                }
            }

            function n() {
                b(!0)
            }

            function i(e) {
                !e.currentTarget.contains(e.relatedTarget) && (b(!1), requestAnimationFrame(() => {
                    let e = I.current;
                    if (null !== e) {
                        let n = (0, l.createSelector)(e);
                        null == N(n) && D((0, l.createSelector)(t, l.LIST_ID_ATTRIBUTE))
                    }
                }))
            }
            async function s() {
                let e = C.current,
                    n = U.current;
                if (n || null == e) return;
                let i = I.current;
                if (m && null !== i) {
                    let t = (0, l.createSelector)(i),
                        n = N(t);
                    if (null != n) {
                        if (!0 !== A.current) return O(t, (0, l.getItemId)(i));
                        {
                            let s = await (0, a.isItemVisible)(e, n);
                            if (s) return O(t, (0, l.getItemId)(i))
                        }
                    }
                }
                let s = await (0, a.findFirstVisibleItem)(e, d(t, C));
                null !== s && P(s)
            }

            function r() {
                A.current = !0
            }
        }, [u, t, m, O, g, D, P]);
        let w = i.useMemo(() => ({
                wrap: S,
                get from() {
                    if (!p) return;
                    let t = I.current;
                    if (null != t) {
                        var e;
                        let n = (0, l.createSelector)(t);
                        return null !== (e = N(n)) && void 0 !== e ? e : void 0
                    }
                    return
                }
            }), [p, S]),
            k = i.useCallback(async () => {
                let e = await L.getNextFocusableElement(w),
                    t = null == e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                null != t ? P(t) : null == e && null != E && E()
            }, [L, w, E, P]),
            V = i.useCallback(async () => {
                let e = await L.getPreviousFocusableElement(w),
                    t = null == e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                null != t ? P(t) : null == e && null != f && f()
            }, [L, w, f, P]),
            G = i.useCallback(e => {
                if (!y.current || !p && !U.current) return;
                let n = v === o.Orientations.HORIZONTAL ? o.Keys.RIGHT : o.Keys.DOWN,
                    i = v === o.Orientations.HORIZONTAL ? o.Keys.LEFT : o.Keys.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), k();
                        return;
                    case i:
                        e.stopPropagation(), e.preventDefault(), V();
                        return;
                    case o.Keys.HOME:
                        e.stopPropagation(), e.preventDefault(), c().then(() => {
                            var e;
                            let n = d(t, C),
                                i = null === (e = n[0]) || void 0 === e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                            null != i && P(i)
                        });
                        return;
                    case o.Keys.END:
                        e.stopPropagation(), e.preventDefault(), _().then(() => {
                            var e;
                            let n = d(t, C),
                                i = null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                            null != i && P(i)
                        });
                        return;
                    case o.Keys.SPACE:
                    case o.Keys.ENTER: {
                        if (e.key === o.Keys.SPACE && T || e.repeat) return;
                        let t = I.current;
                        if (null != t) {
                            var s;
                            let n = (0, l.createSelector)(t),
                                i = N(n),
                                r = null !== (s = null == i ? void 0 : i.ownerDocument) && void 0 !== s ? s : document,
                                a = p || i === r.activeElement;
                            null != i && a && (e.preventDefault(), e.stopPropagation(), null == i || i.click())
                        }
                    }
                }
            }, [k, V, t, v, _, c, P, p]),
            F = i.useCallback(e => {
                let n = null != e ? (0, l.createListItemId)(t, e) : null;
                I.current = n
            }, [t]);
        return i.useMemo(() => ({
            id: t,
            containerProps: {
                onKeyDown: G,
                ref: C,
                tabIndex: M && m ? -1 : 0
            },
            orientation: v,
            setFocus: F,
            async focusLastVisibleItem() {
                var e;
                let n = await (0, a.findLastVisibleItem)(null !== (e = C.current) && void 0 !== e ? e : document.body, d(t, C));
                null !== n && P(n)
            },
            async focusFirstVisibleItem() {
                var e;
                let n = await (0, a.findFirstVisibleItem)(null !== (e = C.current) && void 0 !== e ? e : document.body, d(t, C));
                null !== n && P(n)
            },
            focusPreviousItem: V,
            focusNextItem: k,
            focusedItemId() {
                let e = I.current;
                return e ? (0, l.getItemId)(e) : null
            }
        }), [t, G, v, M, m, F, V, k, P])
    }
    n.es(u, t)
}