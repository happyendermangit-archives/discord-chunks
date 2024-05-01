function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("47120");
    var i = n("470079"),
        r = n("714319"),
        a = n("536895"),
        s = n("260866");
    let o = [a.Keys.TAB, a.Keys.UP, a.Keys.DOWN];

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

    function _(e) {
        let {
            navId: t,
            itemCount: n,
            focusedIndex: _ = 0,
            onSelect: c,
            setFocus: E,
            getNewFocusIndex: I,
            maintainFocusPosition: T = !0,
            includeSetSizes: f = !0,
            focusOnMount: S = !0,
            enabled: h = !0,
            onDispatch: A
        } = e, m = i.useCallback((e, t) => {
            let n = (0, r.default)(e, t);
            return null != A && A(e, n, t), n
        }, [A]), [N, p] = i.useReducer(m, {
            focusedIndex: _,
            itemCount: n
        }), {
            itemCount: O,
            focusedIndex: R
        } = N, [C] = i.useState(() => (0, s.throttle)(p, 16));
        return i.useEffect(() => {
                p({
                    type: r.ListActionType.UPDATE_ITEM_COUNT,
                    itemCount: n
                })
            }, [n]),
            function(e) {
                let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: _,
                    onSelect: c,
                    setFocus: E = d,
                    getNewFocusIndex: I,
                    dispatch: T,
                    maintainFocusPosition: f,
                    includeSetSizes: S,
                    focusOnMount: h,
                    enabled: A,
                    makeId: m = s.makeId,
                    getIndexFromId: N
                } = e, p = i.useRef(n), O = i.useRef(N);
                O.current = N, p.current = n;
                let R = i.useRef();
                i.useEffect(() => {
                    R.current = A
                }, [A]);
                let [C, g] = i.useState(!1), [L] = i.useState(() => new s.HandlerMemoizer(e => () => {
                    let t = null != O.current && "string" == typeof e ? O.current(e) : e;
                    "number" == typeof t && !(t < 0) && T({
                        type: r.ListActionType.SET_FOCUSED_INDEX,
                        index: t
                    })
                }));
                i.useEffect(() => () => L.clean(), [L]);
                let v = i.useCallback((e, t) => {
                        R.current && E(e, t)
                    }, [E]),
                    [D, M] = i.useState(!0);
                i.useEffect(() => {
                    if (D && !h) {
                        M(!1);
                        return
                    }
                    v(m(t, _), _)
                }, [_]);
                let y = i.useCallback(function() {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != I ? I(_) : _;
                        n !== _ && T({
                            type: r.ListActionType.SET_FOCUSED_INDEX,
                            index: n
                        }), e && v(m(t, n), n)
                    }, [m, _, I, T, t, v]),
                    P = i.useCallback(e => {
                        if (!R.current) return;
                        if (o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), y();
                            return
                        }
                        let n = function(e) {
                            switch (e.key) {
                                case a.Keys.ENTER:
                                case a.Keys.SPACE:
                                    return a.ActionType.SELECT_FOCUSED_ITEM;
                                case a.Keys.UP:
                                    return a.ActionType.NAVIGATE_UP;
                                case a.Keys.DOWN:
                                    return a.ActionType.NAVIGATE_DOWN;
                                case a.Keys.HOME:
                                    return a.ActionType.NAVIGATE_START;
                                case a.Keys.END:
                                    return a.ActionType.NAVIGATE_END
                            }
                        }(e);
                        switch (n) {
                            case a.ActionType.NAVIGATE_UP:
                            case a.ActionType.NAVIGATE_DOWN:
                            case a.ActionType.NAVIGATE_START:
                            case a.ActionType.NAVIGATE_END:
                                e.preventDefault(), e.stopPropagation(), T({
                                    type: n
                                });
                                return;
                            case a.ActionType.SELECT_FOCUSED_ITEM:
                                var i;
                                let r = u(l(m, t, _));
                                if ((null == (i = r) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
                                if (e.preventDefault(), e.stopPropagation(), T({
                                        type: n
                                    }), null != c) {
                                    c(_);
                                    return
                                }
                                null == r || r.click()
                        }
                    }, [m, t, T, _, y, c]),
                    U = i.useCallback(() => {
                        C || g(!0)
                    }, [C]),
                    b = i.useCallback(() => {
                        !C && (f ? v(m(t, _), _) : y(!0))
                    }, [m, t, v, f, C, _, y]),
                    G = i.useCallback(e => {
                        !e.currentTarget.contains(e.relatedTarget) && requestAnimationFrame(() => {
                            if (null == u(l(m, t, _))) {
                                v(t);
                                return
                            }
                            g(!1)
                        })
                    }, [m, t, _, v]),
                    w = i.useRef(null);
                i.useLayoutEffect(() => {
                    let e = w.current;
                    if (null != e) return e.addEventListener("focusin", U), e.addEventListener("focus", b), e.addEventListener("focusout", G), () => {
                        e.removeEventListener("focusin", U), e.removeEventListener("focus", b), e.removeEventListener("focusout", G)
                    }
                }, [b, U, G]);
                let B = i.useCallback(() => ({
                        role: "list",
                        tabIndex: C && f ? -1 : 0,
                        id: t,
                        onKeyDown: P,
                        ref: w
                    }), [t, C, P, f]),
                    k = i.useCallback(e => {
                        let {
                            index: n
                        } = e;
                        return {
                            role: "listitem",
                            "aria-setsize": S ? p.current : void 0,
                            "aria-posinset": S ? n + 1 : void 0,
                            id: m(t, n),
                            tabIndex: f && n === _ ? 0 : -1,
                            onFocus: L.get(null != O.current ? m(t, n) : n)
                        }
                    }, [m, t, _, f, L, S]);
                return i.useMemo(() => ({
                    dispatch: T,
                    getContainerProps: B,
                    getItemProps: k
                }), [T, B, k])
            }({
                navId: t,
                itemCount: O,
                focusedIndex: R,
                dispatch: C,
                onSelect: c,
                setFocus: E,
                getNewFocusIndex: I,
                maintainFocusPosition: T,
                includeSetSizes: f,
                focusOnMount: S,
                enabled: h
            })
    }
}