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
            onSelect: _,
            setFocus: f,
            getNewFocusIndex: E,
            maintainFocusPosition: h = !0,
            includeSetSizes: g = !0,
            focusOnMount: m = !0,
            enabled: p = !0,
            onDispatch: S
        } = e, T = i.useCallback((e, t) => {
            let n = (0, s.default)(e, t);
            return null != S && S(e, n, t), n
        }, [S]), [v, I] = i.useReducer(T, {
            focusedIndex: c,
            itemCount: n
        }), {
            itemCount: A,
            focusedIndex: C
        } = v, [y] = i.useState(() => (0, a.throttle)(I, 16));
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
                    onSelect: _,
                    setFocus: f = d,
                    getNewFocusIndex: E,
                    dispatch: h,
                    maintainFocusPosition: g,
                    includeSetSizes: m,
                    focusOnMount: p,
                    enabled: S,
                    makeId: T = a.makeId,
                    getIndexFromId: v
                } = e, I = i.useRef(n), A = i.useRef(v);
                A.current = v, I.current = n;
                let C = i.useRef();
                i.useEffect(() => {
                    C.current = S
                }, [S]);
                let [y, N] = i.useState(!1), [R] = i.useState(() => new a.HandlerMemoizer(e => () => {
                    let t = null != A.current && "string" == typeof e ? A.current(e) : e;
                    "number" == typeof t && !(t < 0) && h({
                        type: s.ListActionType.SET_FOCUSED_INDEX,
                        index: t
                    })
                }));
                i.useEffect(() => () => R.clean(), [R]);
                let O = i.useCallback((e, t) => {
                        C.current && f(e, t)
                    }, [f]),
                    [D, P] = i.useState(!0);
                i.useEffect(() => {
                    if (D && !p) {
                        P(!1);
                        return
                    }
                    O(T(t, c), c)
                }, [c]);
                let L = i.useCallback(function() {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != E ? E(c) : c;
                        n !== c && h({
                            type: s.ListActionType.SET_FOCUSED_INDEX,
                            index: n
                        }), e && O(T(t, n), n)
                    }, [T, c, E, h, t, O]),
                    M = i.useCallback(e => {
                        if (!C.current) return;
                        if (o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), L();
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
                                e.preventDefault(), e.stopPropagation(), h({
                                    type: n
                                });
                                return;
                            case r.ActionType.SELECT_FOCUSED_ITEM:
                                var i;
                                let s = u(l(T, t, c));
                                if ((null == (i = s) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
                                if (e.preventDefault(), e.stopPropagation(), h({
                                        type: n
                                    }), null != _) {
                                    _(c);
                                    return
                                }
                                null == s || s.click()
                        }
                    }, [T, t, h, c, L, _]),
                    b = i.useCallback(() => {
                        y || N(!0)
                    }, [y]),
                    U = i.useCallback(() => {
                        !y && (g ? O(T(t, c), c) : L(!0))
                    }, [T, t, O, g, y, c, L]),
                    w = i.useCallback(e => {
                        !e.currentTarget.contains(e.relatedTarget) && requestAnimationFrame(() => {
                            if (null == u(l(T, t, c))) {
                                O(t);
                                return
                            }
                            N(!1)
                        })
                    }, [T, t, c, O]),
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
                        onKeyDown: M,
                        ref: k
                    }), [t, y, M, g]),
                    G = i.useCallback(e => {
                        let {
                            index: n
                        } = e;
                        return {
                            role: "listitem",
                            "aria-setsize": m ? I.current : void 0,
                            "aria-posinset": m ? n + 1 : void 0,
                            id: T(t, n),
                            tabIndex: g && n === c ? 0 : -1,
                            onFocus: R.get(null != A.current ? T(t, n) : n)
                        }
                    }, [T, t, c, g, R, m]),
                    F = i.useMemo(() => ({
                        dispatch: h,
                        getContainerProps: V,
                        getItemProps: G
                    }), [h, V, G]);
                return F
            }({
                navId: t,
                itemCount: A,
                focusedIndex: C,
                dispatch: y,
                onSelect: _,
                setFocus: f,
                getNewFocusIndex: E,
                maintainFocusPosition: h,
                includeSetSizes: g,
                focusOnMount: m,
                enabled: p
            })
    }
}