function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GridActionType: function() {
            return s.GridActionType
        },
        default: function() {
            return d
        }
    }), n("222007");
    var i = n("884691"),
        s = n("585463"),
        r = n("942367"),
        a = n("74139");
    let o = [r.Keys.TAB];

    function l(e, t, n) {
        return null != t && null != n ? "#".concat((0, a.makeGridId)(e, t, n)) : "[data-ref-id=".concat(e, "]")
    }

    function u(e) {
        return document.querySelector(e)
    }

    function d(e) {
        let {
            navId: t,
            columnCounts: n,
            focusedX: d = 0,
            focusedY: c = 0,
            onSelect: f,
            prepareFocus: _,
            getNewFocusPosition: E,
            maintainFocusPosition: h = !0,
            enabled: g = !0,
            onDispatch: m,
            autoFocusElement: p = !0,
            useVirtualFocus: S = !1
        } = e, v = i.useCallback((e, t) => {
            let n = (0, s.default)(e, t);
            return null != m && m(e, n, t), n
        }, [m]), [T, I] = i.useReducer(v, {
            focusedX: d,
            focusedY: c,
            columnCounts: n
        }), {
            columnCounts: C,
            focusedX: A,
            focusedY: y
        } = T, [N] = i.useState(() => (0, a.throttle)(I, 16));
        return i.useEffect(() => {
                I({
                    type: s.GridActionType.UPDATE_COLUMN_COUNTS,
                    columnCounts: n
                })
            }, [n]),
            function(e) {
                let {
                    navId: t,
                    columnCounts: n,
                    focusedX: d,
                    focusedY: c,
                    onSelect: f,
                    prepareFocus: _,
                    getNewFocusPosition: E,
                    dispatch: h,
                    maintainFocusPosition: g,
                    enabled: m,
                    autoFocusElement: p,
                    useVirtualFocus: S
                } = e, v = i.useRef();
                v.current = m;
                let T = u(l(t, d, c)),
                    [I, C] = i.useState(!1),
                    [A, y] = i.useState(!1),
                    [N, R] = i.useState(!1),
                    [O] = i.useState(() => new a.HandlerMemoizer(e => {
                        let [t, n] = e.split(",").map(Number);
                        return () => {
                            C(!0), h({
                                type: s.GridActionType.SET_FOCUSED_POSITION,
                                x: t,
                                y: n
                            })
                        }
                    }));
                i.useEffect(() => () => O.clean(), [O]);
                let D = i.useCallback(e => {
                        if (!v.current || !p) return !1;
                        e.focus()
                    }, [p]),
                    P = i.useCallback((e, n) => {
                        let i = l(t, e, n),
                            s = null != _ ? _(e, n, i) : Promise.resolve();
                        s.then(() => {
                            let e = u(i);
                            null != e ? (D(e), y(!1)) : requestAnimationFrame(() => y(!0))
                        })
                    }, [t, _, D]),
                    L = i.useCallback(function() {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            [n, i] = null != E ? E(d, c) : [d, c];
                        if ((n !== d || i !== c) && (h({
                                type: s.GridActionType.SET_FOCUSED_POSITION,
                                x: n,
                                y: i
                            }), !e)) {
                            R(!0);
                            return
                        }
                        let r = u(l(t, n, i));
                        null != r && (R(!0), D(r))
                    }, [h, d, c, E, t, D]),
                    [M, b] = i.useState(!1);
                i.useEffect(() => {
                    if (!M || !I) return;
                    b(!1);
                    let e = u(l(t, d, c));
                    if (null != e) {
                        D(e);
                        return
                    }
                    C(!1);
                    let n = u(l(t));
                    null != n && D(n)
                }, [t, M, I, D, d, c]);
                let U = i.useCallback(e => {
                    v.current && null == e && b(!0)
                }, []);
                i.useEffect(() => {
                    I && A && null != T && (D(T), y(!1))
                }, [A, T]), i.useEffect(() => {
                    I && (!N && P(d, c), R(!1))
                }, [d, c]);
                let w = i.useCallback(e => {
                        if (!v.current) return;
                        if (!S && o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), L();
                            return
                        }
                        let t = function(e) {
                            switch (e.key) {
                                case r.Keys.ENTER:
                                    return r.ActionType.SELECT_FOCUSED_ITEM;
                                case r.Keys.UP:
                                    return r.ActionType.NAVIGATE_UP;
                                case r.Keys.DOWN:
                                    return r.ActionType.NAVIGATE_DOWN;
                                case r.Keys.RIGHT:
                                    return r.ActionType.NAVIGATE_RIGHT;
                                case r.Keys.LEFT:
                                    return r.ActionType.NAVIGATE_LEFT;
                                case r.Keys.HOME:
                                    if (e.ctrlKey) return r.ActionType.NAVIGATE_START;
                                    return r.ActionType.NAVIGATE_INLINE_START;
                                case r.Keys.END:
                                    if (e.ctrlKey) return r.ActionType.NAVIGATE_END;
                                    return r.ActionType.NAVIGATE_INLINE_END
                            }
                        }(e);
                        switch (t) {
                            case r.ActionType.NAVIGATE_UP:
                            case r.ActionType.NAVIGATE_DOWN:
                            case r.ActionType.NAVIGATE_RIGHT:
                            case r.ActionType.NAVIGATE_LEFT:
                            case r.ActionType.NAVIGATE_INLINE_START:
                            case r.ActionType.NAVIGATE_INLINE_END:
                            case r.ActionType.NAVIGATE_START:
                            case r.ActionType.NAVIGATE_END:
                                let i = 0 === n.length || 0 === d && 0 === c && t === r.ActionType.NAVIGATE_LEFT;
                                !i && (e.preventDefault(), e.stopPropagation()), h({
                                    type: t
                                });
                                return;
                            case r.ActionType.SELECT_FOCUSED_ITEM:
                                var s;
                                if (p && (null == (s = T) ? void 0 : s.ownerDocument.activeElement) !== s || e.repeat) return;
                                e.preventDefault(), e.stopPropagation(), h({
                                    type: t
                                }), null != f ? f(d, c, e) : null != T && T.click()
                        }
                    }, [L, h, p, T, f, d, c]),
                    k = i.useCallback(e => e.currentTarget !== e.target ? (!I && (C(!0), R(!0)), !1) : I ? (L(!1), !1) : void(g && null != T ? P(d, c) : L(!0)), [I, g, T, L, P, d, c]),
                    V = i.useCallback(e => {
                        if (e.target !== e.currentTarget) {
                            if (e.currentTarget.contains(e.relatedTarget)) return !1;
                            C(!1)
                        }
                    }, []),
                    G = i.useMemo(() => Math.max(...n), [n]),
                    F = i.useCallback(() => ({
                        role: "grid",
                        "aria-rowcount": n.length,
                        "aria-colcount": G,
                        tabIndex: I && g ? -1 : 0,
                        "data-ref-id": t,
                        onKeyDown: w,
                        onFocus: k,
                        onBlur: V
                    }), [n.length, G, I, g, t, w, k, V]),
                    x = i.useCallback((e, n) => {
                        let i = {
                            role: "gridcell",
                            "aria-rowindex": n + 1,
                            "aria-colindex": e + 1,
                            id: (0, a.makeGridId)(t, e, n),
                            tabIndex: g && e === d && n === c ? 0 : -1,
                            onFocus: O.get("".concat(e, ",").concat(n))
                        };
                        return e === d && n === c && (i.ref = U), i
                    }, [t, g, d, c, O, U]),
                    B = i.useCallback(e => ({
                        role: "row",
                        "aria-rowindex": e + 1
                    }), []),
                    H = i.useMemo(() => ({
                        dispatch: h,
                        getContainerProps: F,
                        getItemProps: x,
                        getRowProps: B
                    }), [h, F, x, B]);
                return H
            }({
                navId: t,
                columnCounts: C,
                focusedX: A,
                focusedY: y,
                dispatch: N,
                onSelect: f,
                prepareFocus: _,
                getNewFocusPosition: E,
                maintainFocusPosition: h,
                enabled: g,
                autoFocusElement: p,
                useVirtualFocus: S
            })
    }
}