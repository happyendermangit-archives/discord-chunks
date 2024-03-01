function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GridActionType: function() {
            return r.GridActionType
        },
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("884691"),
        r = n("585463"),
        s = n("942367"),
        a = n("74139");
    let o = [s.Keys.TAB];

    function l(e, t, n) {
        return null != t && null != n ? "#".concat((0, a.makeGridId)(e, t, n)) : "[data-ref-id=".concat(e, "]")
    }

    function u(e) {
        return document.querySelector(e)
    }

    function c(e) {
        let {
            navId: t,
            columnCounts: n,
            focusedX: c = 0,
            focusedY: d = 0,
            onSelect: f,
            prepareFocus: E,
            getNewFocusPosition: p,
            maintainFocusPosition: h = !0,
            enabled: _ = !0,
            onDispatch: S,
            autoFocusElement: m = !0,
            useVirtualFocus: T = !1
        } = e, g = i.useCallback((e, t) => {
            let n = (0, r.default)(e, t);
            return null != S && S(e, n, t), n
        }, [S]), [I, C] = i.useReducer(g, {
            focusedX: c,
            focusedY: d,
            columnCounts: n
        }), {
            columnCounts: v,
            focusedX: A,
            focusedY: R
        } = I, [N] = i.useState(() => (0, a.throttle)(C, 16));
        return i.useEffect(() => {
                C({
                    type: r.GridActionType.UPDATE_COLUMN_COUNTS,
                    columnCounts: n
                })
            }, [n]),
            function(e) {
                let {
                    navId: t,
                    columnCounts: n,
                    focusedX: c,
                    focusedY: d,
                    onSelect: f,
                    prepareFocus: E,
                    getNewFocusPosition: p,
                    dispatch: h,
                    maintainFocusPosition: _,
                    enabled: S,
                    autoFocusElement: m,
                    useVirtualFocus: T
                } = e, g = i.useRef();
                g.current = S;
                let I = u(l(t, c, d)),
                    [C, v] = i.useState(!1),
                    [A, R] = i.useState(!1),
                    [N, O] = i.useState(!1),
                    [D] = i.useState(() => new a.HandlerMemoizer(e => {
                        let [t, n] = e.split(",").map(Number);
                        return () => {
                            v(!0), h({
                                type: r.GridActionType.SET_FOCUSED_POSITION,
                                x: t,
                                y: n
                            })
                        }
                    }));
                i.useEffect(() => () => D.clean(), [D]);
                let y = i.useCallback(e => {
                        if (!g.current || !m) return !1;
                        e.focus()
                    }, [m]),
                    P = i.useCallback((e, n) => {
                        let i = l(t, e, n),
                            r = null != E ? E(e, n, i) : Promise.resolve();
                        r.then(() => {
                            let e = u(i);
                            null != e ? (y(e), R(!1)) : requestAnimationFrame(() => R(!0))
                        })
                    }, [t, E, y]),
                    L = i.useCallback(function() {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            [n, i] = null != p ? p(c, d) : [c, d];
                        if ((n !== c || i !== d) && (h({
                                type: r.GridActionType.SET_FOCUSED_POSITION,
                                x: n,
                                y: i
                            }), !e)) {
                            O(!0);
                            return
                        }
                        let s = u(l(t, n, i));
                        null != s && (O(!0), y(s))
                    }, [h, c, d, p, t, y]),
                    [b, M] = i.useState(!1);
                i.useEffect(() => {
                    if (!b || !C) return;
                    M(!1);
                    let e = u(l(t, c, d));
                    if (null != e) {
                        y(e);
                        return
                    }
                    v(!1);
                    let n = u(l(t));
                    null != n && y(n)
                }, [t, b, C, y, c, d]);
                let U = i.useCallback(e => {
                    g.current && null == e && M(!0)
                }, []);
                i.useEffect(() => {
                    C && A && null != I && (y(I), R(!1))
                }, [A, I]), i.useEffect(() => {
                    C && (!N && P(c, d), O(!1))
                }, [c, d]);
                let G = i.useCallback(e => {
                        if (!g.current) return;
                        if (!T && o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), L();
                            return
                        }
                        let t = function(e) {
                            switch (e.key) {
                                case s.Keys.ENTER:
                                    return s.ActionType.SELECT_FOCUSED_ITEM;
                                case s.Keys.UP:
                                    return s.ActionType.NAVIGATE_UP;
                                case s.Keys.DOWN:
                                    return s.ActionType.NAVIGATE_DOWN;
                                case s.Keys.RIGHT:
                                    return s.ActionType.NAVIGATE_RIGHT;
                                case s.Keys.LEFT:
                                    return s.ActionType.NAVIGATE_LEFT;
                                case s.Keys.HOME:
                                    if (e.ctrlKey) return s.ActionType.NAVIGATE_START;
                                    return s.ActionType.NAVIGATE_INLINE_START;
                                case s.Keys.END:
                                    if (e.ctrlKey) return s.ActionType.NAVIGATE_END;
                                    return s.ActionType.NAVIGATE_INLINE_END
                            }
                        }(e);
                        switch (t) {
                            case s.ActionType.NAVIGATE_UP:
                            case s.ActionType.NAVIGATE_DOWN:
                            case s.ActionType.NAVIGATE_RIGHT:
                            case s.ActionType.NAVIGATE_LEFT:
                            case s.ActionType.NAVIGATE_INLINE_START:
                            case s.ActionType.NAVIGATE_INLINE_END:
                            case s.ActionType.NAVIGATE_START:
                            case s.ActionType.NAVIGATE_END:
                                let i = 0 === n.length || 0 === c && 0 === d && t === s.ActionType.NAVIGATE_LEFT;
                                !i && (e.preventDefault(), e.stopPropagation()), h({
                                    type: t
                                });
                                return;
                            case s.ActionType.SELECT_FOCUSED_ITEM:
                                var r;
                                if (m && (null == (r = I) ? void 0 : r.ownerDocument.activeElement) !== r || e.repeat) return;
                                e.preventDefault(), e.stopPropagation(), h({
                                    type: t
                                }), null != f ? f(c, d, e) : null != I && I.click()
                        }
                    }, [L, h, m, I, f, c, d]),
                    w = i.useCallback(e => e.currentTarget !== e.target ? (!C && (v(!0), O(!0)), !1) : C ? (L(!1), !1) : void(_ && null != I ? P(c, d) : L(!0)), [C, _, I, L, P, c, d]),
                    k = i.useCallback(e => {
                        if (e.target !== e.currentTarget) {
                            if (e.currentTarget.contains(e.relatedTarget)) return !1;
                            v(!1)
                        }
                    }, []),
                    x = i.useMemo(() => Math.max(...n), [n]),
                    F = i.useCallback(() => ({
                        role: "grid",
                        "aria-rowcount": n.length,
                        "aria-colcount": x,
                        tabIndex: C && _ ? -1 : 0,
                        "data-ref-id": t,
                        onKeyDown: G,
                        onFocus: w,
                        onBlur: k
                    }), [n.length, x, C, _, t, G, w, k]),
                    V = i.useCallback((e, n) => {
                        let i = {
                            role: "gridcell",
                            "aria-rowindex": n + 1,
                            "aria-colindex": e + 1,
                            id: (0, a.makeGridId)(t, e, n),
                            tabIndex: _ && e === c && n === d ? 0 : -1,
                            onFocus: D.get("".concat(e, ",").concat(n))
                        };
                        return e === c && n === d && (i.ref = U), i
                    }, [t, _, c, d, D, U]),
                    B = i.useCallback(e => ({
                        role: "row",
                        "aria-rowindex": e + 1
                    }), []),
                    H = i.useMemo(() => ({
                        dispatch: h,
                        getContainerProps: F,
                        getItemProps: V,
                        getRowProps: B
                    }), [h, F, V, B]);
                return H
            }({
                navId: t,
                columnCounts: v,
                focusedX: A,
                focusedY: R,
                dispatch: N,
                onSelect: f,
                prepareFocus: E,
                getNewFocusPosition: p,
                maintainFocusPosition: h,
                enabled: _,
                autoFocusElement: m,
                useVirtualFocus: T
            })
    }
}