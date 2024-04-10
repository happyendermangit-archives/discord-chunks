function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createListItemId: function() {
            return l.createListItemId
        },
        default: function() {
            return _
        }
    }), n("47120");
    var i = n("470079"),
        r = n("372817"),
        s = n("25441"),
        a = n("585627"),
        o = n("536895"),
        l = n("260866"),
        u = n("91192");

    function d(e, t) {
        var n;
        return Array.from((null !== (n = t.current) && void 0 !== n ? n : document).querySelectorAll("[".concat(l.LIST_ITEM_ID_ATTRIBUTE, '^="').concat(e, '"]')))
    }

    function _(e) {
        let {
            id: t,
            defaultFocused: n,
            isEnabled: u,
            scrollToStart: _,
            scrollToEnd: c,
            onNavigatePreviousAtStart: E,
            onNavigateNextAtEnd: I,
            setFocus: T,
            setFocusOnList: f,
            preserveFocusPosition: S = !0,
            useVirtualFocus: A = !1,
            wrap: h = !1,
            orientation: m = o.Orientations.VERTICAL,
            disableClickOnSpace: N = !1
        } = e, O = i.useRef(n ? (0, l.createListItemId)(t, n) : null), p = i.useRef(!1), R = i.useRef(null), C = i.useRef(u);

        function g(e) {
            var t;
            return (null !== (t = R.current) && void 0 !== t ? t : document).querySelector(e)
        }

        function L(e) {
            var t;
            null === (t = g(e)) || void 0 === t || t.focus()
        }
        i.useLayoutEffect(() => {
            C.current = u
        }, [u]);
        let D = i.useCallback((e, t) => {
                C.current && (null != T ? T : L)(e, t)
            }, [T]),
            v = i.useCallback(e => {
                C.current && (null != f ? f : L)(e)
            }, [f]),
            M = i.useCallback(e => {
                O.current = e;
                let n = (0, l.createSelector)(e),
                    i = (0, l.getItemId)(e);
                D(n, i), (0, s.notifyFocusSubscribers)(t, i, S)
            }, [t, S, D]),
            y = i.useMemo(() => (0, r.createFocusManager)({
                getFocusableElements: () => d(t, R),
                getActiveElement() {
                    var e;
                    return null === (e = R.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement
                },
                scrollToStart: _,
                scrollToEnd: c
            }), [t, _, c]),
            [P, U] = i.useState(!1),
            b = i.useRef(P);
        i.useLayoutEffect(() => {
            b.current = P
        }, [P]), i.useLayoutEffect(() => {
            let e = R.current;
            if (null != e) {
                if (u) return e.addEventListener("focusin", n), e.addEventListener("focusout", i), e.addEventListener("focus", r), e.addEventListener("scroll", s, {
                    passive: !0
                }), () => {
                    e.removeEventListener("focusin", n), e.removeEventListener("focusout", i), e.removeEventListener("focus", r), e.removeEventListener("scroll", s)
                }
            }

            function n() {
                U(!0)
            }

            function i(e) {
                !e.currentTarget.contains(e.relatedTarget) && (U(!1), requestAnimationFrame(() => {
                    let e = O.current;
                    null !== e && null == g((0, l.createSelector)(e)) && v((0, l.createSelector)(t, l.LIST_ID_ATTRIBUTE))
                }))
            }
            async function r() {
                let e = R.current;
                if (b.current || null == e) return;
                let n = O.current;
                if (S && null !== n) {
                    let t = (0, l.createSelector)(n),
                        i = g(t);
                    if (null != i) {
                        if (!0 !== p.current) return D(t, (0, l.getItemId)(n));
                        if (await (0, a.isItemVisible)(e, i)) return D(t, (0, l.getItemId)(n))
                    }
                }
                let i = await (0, a.findFirstVisibleItem)(e, d(t, R));
                null !== i && M(i)
            }

            function s() {
                p.current = !0
            }
        }, [u, t, S, D, f, v, M]);
        let G = i.useMemo(() => ({
                wrap: h,
                get from() {
                    if (!A) return;
                    let t = O.current;
                    if (null != t) {
                        var e;
                        return null !== (e = g((0, l.createSelector)(t))) && void 0 !== e ? e : void 0
                    }
                    return
                }
            }), [A, h]),
            w = i.useCallback(async () => {
                let e = await y.getNextFocusableElement(G),
                    t = null == e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                null != t ? M(t) : null == e && null != I && I()
            }, [y, G, I, M]),
            k = i.useCallback(async () => {
                let e = await y.getPreviousFocusableElement(G),
                    t = null == e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                null != t ? M(t) : null == e && null != E && E()
            }, [y, G, E, M]),
            B = i.useCallback(e => {
                if (!C.current || !A && !b.current) return;
                let n = m === o.Orientations.HORIZONTAL ? o.Keys.RIGHT : o.Keys.DOWN,
                    i = m === o.Orientations.HORIZONTAL ? o.Keys.LEFT : o.Keys.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), w();
                        return;
                    case i:
                        e.stopPropagation(), e.preventDefault(), k();
                        return;
                    case o.Keys.HOME:
                        e.stopPropagation(), e.preventDefault(), _().then(() => {
                            var e;
                            let n = null === (e = d(t, R)[0]) || void 0 === e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                            null != n && M(n)
                        });
                        return;
                    case o.Keys.END:
                        e.stopPropagation(), e.preventDefault(), c().then(() => {
                            var e;
                            let n = d(t, R),
                                i = null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
                            null != i && M(i)
                        });
                        return;
                    case o.Keys.SPACE:
                    case o.Keys.ENTER: {
                        if (e.key === o.Keys.SPACE && N || e.repeat) return;
                        let t = O.current;
                        if (null != t) {
                            var r;
                            let n = g((0, l.createSelector)(t)),
                                i = null !== (r = null == n ? void 0 : n.ownerDocument) && void 0 !== r ? r : document,
                                s = A || n === i.activeElement;
                            null != n && s && (e.preventDefault(), e.stopPropagation(), null == n || n.click())
                        }
                    }
                }
            }, [w, k, t, m, c, _, M, A]),
            V = i.useCallback(e => {
                let n = null != e ? (0, l.createListItemId)(t, e) : null;
                O.current = n
            }, [t]);
        return i.useMemo(() => ({
            id: t,
            containerProps: {
                onKeyDown: B,
                ref: R,
                tabIndex: P && S ? -1 : 0
            },
            orientation: m,
            setFocus: V,
            async focusLastVisibleItem() {
                var e;
                let n = await (0, a.findLastVisibleItem)(null !== (e = R.current) && void 0 !== e ? e : document.body, d(t, R));
                null !== n && M(n)
            },
            async focusFirstVisibleItem() {
                var e;
                let n = await (0, a.findFirstVisibleItem)(null !== (e = R.current) && void 0 !== e ? e : document.body, d(t, R));
                null !== n && M(n)
            },
            focusPreviousItem: k,
            focusNextItem: w,
            focusedItemId() {
                let e = O.current;
                return e ? (0, l.getItemId)(e) : null
            }
        }), [t, B, m, P, S, V, k, w, M])
    }
    n.es(u, t)
}