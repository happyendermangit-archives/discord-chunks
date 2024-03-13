function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("884691"),
        s = n("134322"),
        r = n("942367"),
        a = n("74139");
    let o = [r.Keys.TAB, r.Keys.UP, r.Keys.DOWN];

    function l(e, t, n) {
        return null != n ? "#".concat(e(t, n)) : "#".concat(t)
    }

    function u(e) {
        return document.querySelector(e)
    }

    function d(e) {
        var t;
        null === (t = document.getElementById(e)) || void 0 === t || t.focus()
    }

    function c(e) {
        let {
            navId: t,
            itemCount: n,
            focusedIndex: c = 0,
            onSelect: f,
            setFocus: _,
            getNewFocusIndex: h,
            maintainFocusPosition: E = !0,
            includeSetSizes: g = !0,
            focusOnMount: m = !0,
            enabled: p = !0,
            onDispatch: S
        } = e, v = i.useCallback((e, t) => {
            let n = (0, s.default)(e, t);
            return null != S && S(e, n, t), n
        }, [S]), [T, I] = i.useReducer(v, {
            focusedIndex: c,
            itemCount: n
        }), {
            itemCount: C,
            focusedIndex: A
        } = T, [y] = i.useState(() => (0, a.throttle)(I, 16));
        return i.useEffect(() => {
                I({
                    type: s.ListActionType.UPDATE_ITEM_COUNT,
                    itemCount: n
                })
            }, [n]),
            function(e) {
                let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: c,
                    onSelect: f,
                    setFocus: _ = d,
                    getNewFocusIndex: h,
                    dispatch: E,
                    maintainFocusPosition: g,
                    includeSetSizes: m,
                    focusOnMount: p,
                    enabled: S,
                    makeId: v = a.makeId,
                    getIndexFromId: T
                } = e, I = i.useRef(n), C = i.useRef(T);
                C.current = T, I.current = n;
                let A = i.useRef();
                i.useEffect(() => {
                    A.current = S
                }, [S]);
                let [y, N] = i.useState(!1), [R] = i.useState(() => new a.HandlerMemoizer(e => () => {
                    let t = null != C.current && "string" == typeof e ? C.current(e) : e;
                    "number" == typeof t && !(t < 0) && E({
                        type: s.ListActionType.SET_FOCUSED_INDEX,
                        index: t
                    })
                }));
                i.useEffect(() => () => R.clean(), [R]);
                let O = i.useCallback((e, t) => {
                        A.current && _(e, t)
                    }, [_]),
                    [D, P] = i.useState(!0);
                i.useEffect(() => {
                    if (D && !p) {
                        P(!1);
                        return
                    }
                    O(v(t, c), c)
                }, [c]);
                let M = i.useCallback(function() {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != h ? h(c) : c;
                        n !== c && E({
                            type: s.ListActionType.SET_FOCUSED_INDEX,
                            index: n
                        }), e && O(v(t, n), n)
                    }, [v, c, h, E, t, O]),
                    L = i.useCallback(e => {
                        if (!A.current) return;
                        if (o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), M();
                            return
                        }
                        let n = function(e) {
                            switch (e.key) {
                                case r.Keys.ENTER:
                                case r.Keys.SPACE:
                                    return r.ActionType.SELECT_FOCUSED_ITEM;
                                case r.Keys.UP:
                                    return r.ActionType.NAVIGATE_UP;
                                case r.Keys.DOWN:
                                    return r.ActionType.NAVIGATE_DOWN;
                                case r.Keys.HOME:
                                    return r.ActionType.NAVIGATE_START;
                                case r.Keys.END:
                                    return r.ActionType.NAVIGATE_END
                            }
                        }(e);
                        switch (n) {
                            case r.ActionType.NAVIGATE_UP:
                            case r.ActionType.NAVIGATE_DOWN:
                            case r.ActionType.NAVIGATE_START:
                            case r.ActionType.NAVIGATE_END:
                                e.preventDefault(), e.stopPropagation(), E({
                                    type: n
                                });
                                return;
                            case r.ActionType.SELECT_FOCUSED_ITEM:
                                var i;
                                let s = u(l(v, t, c));
                                if ((null == (i = s) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
                                if (e.preventDefault(), e.stopPropagation(), E({
                                        type: n
                                    }), null != f) {
                                    f(c);
                                    return
                                }
                                null == s || s.click()
                        }
                    }, [v, t, E, c, M, f]),
                    b = i.useCallback(() => {
                        y || N(!0)
                    }, [y]),
                    U = i.useCallback(() => {
                        !y && (g ? O(v(t, c), c) : M(!0))
                    }, [v, t, O, g, y, c, M]),
                    w = i.useCallback(e => {
                        !e.currentTarget.contains(e.relatedTarget) && requestAnimationFrame(() => {
                            if (null == u(l(v, t, c))) {
                                O(t);
                                return
                            }
                            N(!1)
                        })
                    }, [v, t, c, O]),
                    k = i.useRef(null);
                i.useLayoutEffect(() => {
                    let e = k.current;
                    if (null != e) return e.addEventListener("focusin", b), e.addEventListener("focus", U), e.addEventListener("focusout", w), () => {
                        e.removeEventListener("focusin", b), e.removeEventListener("focus", U), e.removeEventListener("focusout", w)
                    }
                }, [U, b, w]);
                let V = i.useCallback(() => ({
                        role: "list",
                        tabIndex: y && g ? -1 : 0,
                        id: t,
                        onKeyDown: L,
                        ref: k
                    }), [t, y, L, g]),
                    G = i.useCallback(e => {
                        let {
                            index: n
                        } = e;
                        return {
                            role: "listitem",
                            "aria-setsize": m ? I.current : void 0,
                            "aria-posinset": m ? n + 1 : void 0,
                            id: v(t, n),
                            tabIndex: g && n === c ? 0 : -1,
                            onFocus: R.get(null != C.current ? v(t, n) : n)
                        }
                    }, [v, t, c, g, R, m]),
                    F = i.useMemo(() => ({
                        dispatch: E,
                        getContainerProps: V,
                        getItemProps: G
                    }), [E, V, G]);
                return F
            }({
                navId: t,
                itemCount: C,
                focusedIndex: A,
                dispatch: y,
                onSelect: f,
                setFocus: _,
                getNewFocusIndex: h,
                maintainFocusPosition: E,
                includeSetSizes: g,
                focusOnMount: m,
                enabled: p
            })
    }
}