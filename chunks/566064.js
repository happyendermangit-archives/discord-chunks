function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GridActionType: function() {
            return r.GridActionType
        },
        default: function() {
            return d
        }
    }), n("47120");
    var i = n("470079"),
        r = n("611144"),
        s = n("536895"),
        a = n("260866");
    let o = [s.Keys.TAB];

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
            focusedY: _ = 0,
            onSelect: c,
            prepareFocus: E,
            getNewFocusPosition: I,
            maintainFocusPosition: T = !0,
            enabled: f = !0,
            onDispatch: S,
            autoFocusElement: A = !0,
            useVirtualFocus: h = !1
        } = e, m = i.useCallback((e, t) => {
            let n = (0, r.default)(e, t);
            return null != S && S(e, n, t), n
        }, [S]), [N, O] = i.useReducer(m, {
            focusedX: d,
            focusedY: _,
            columnCounts: n
        }), {
            columnCounts: p,
            focusedX: R,
            focusedY: C
        } = N, [g] = i.useState(() => (0, a.throttle)(O, 16));
        return i.useEffect(() => {
                O({
                    type: r.GridActionType.UPDATE_COLUMN_COUNTS,
                    columnCounts: n
                })
            }, [n]),
            function(e) {
                let {
                    navId: t,
                    columnCounts: n,
                    focusedX: d,
                    focusedY: _,
                    onSelect: c,
                    prepareFocus: E,
                    getNewFocusPosition: I,
                    dispatch: T,
                    maintainFocusPosition: f,
                    enabled: S,
                    autoFocusElement: A,
                    useVirtualFocus: h
                } = e, m = i.useRef();
                m.current = S;
                let N = u(l(t, d, _)),
                    [O, p] = i.useState(!1),
                    [R, C] = i.useState(!1),
                    [g, L] = i.useState(!1),
                    [D] = i.useState(() => new a.HandlerMemoizer(e => {
                        let [t, n] = e.split(",").map(Number);
                        return () => {
                            p(!0), T({
                                type: r.GridActionType.SET_FOCUSED_POSITION,
                                x: t,
                                y: n
                            })
                        }
                    }));
                i.useEffect(() => () => D.clean(), [D]);
                let v = i.useCallback(e => {
                        if (!m.current || !A) return !1;
                        e.focus()
                    }, [A]),
                    M = i.useCallback((e, n) => {
                        let i = l(t, e, n);
                        (null != E ? E(e, n, i) : Promise.resolve()).then(() => {
                            let e = u(i);
                            null != e ? (v(e), C(!1)) : requestAnimationFrame(() => C(!0))
                        })
                    }, [t, E, v]),
                    y = i.useCallback(function() {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            [n, i] = null != I ? I(d, _) : [d, _];
                        if ((n !== d || i !== _) && (T({
                                type: r.GridActionType.SET_FOCUSED_POSITION,
                                x: n,
                                y: i
                            }), !e)) {
                            L(!0);
                            return
                        }
                        let s = u(l(t, n, i));
                        null != s && (L(!0), v(s))
                    }, [T, d, _, I, t, v]),
                    [P, U] = i.useState(!1);
                i.useEffect(() => {
                    if (!P || !O) return;
                    U(!1);
                    let e = u(l(t, d, _));
                    if (null != e) {
                        v(e);
                        return
                    }
                    p(!1);
                    let n = u(l(t));
                    null != n && v(n)
                }, [t, P, O, v, d, _]);
                let b = i.useCallback(e => {
                    m.current && null == e && U(!0)
                }, []);
                i.useEffect(() => {
                    O && R && null != N && (v(N), C(!1))
                }, [R, N]), i.useEffect(() => {
                    O && (!g && M(d, _), L(!1))
                }, [d, _]);
                let G = i.useCallback(e => {
                        if (!m.current) return;
                        if (!h && o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), y();
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
                                !(0 === n.length || 0 === d && 0 === _ && t === s.ActionType.NAVIGATE_LEFT) && (e.preventDefault(), e.stopPropagation()), T({
                                    type: t
                                });
                                return;
                            case s.ActionType.SELECT_FOCUSED_ITEM:
                                var i;
                                if (A && (null == (i = N) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
                                e.preventDefault(), e.stopPropagation(), T({
                                    type: t
                                }), null != c ? c(d, _, e) : null != N && N.click()
                        }
                    }, [y, T, A, N, c, d, _]),
                    w = i.useCallback(e => e.currentTarget !== e.target ? (!O && (p(!0), L(!0)), !1) : O ? (y(!1), !1) : void(f && null != N ? M(d, _) : y(!0)), [O, f, N, y, M, d, _]),
                    B = i.useCallback(e => {
                        if (e.target !== e.currentTarget) {
                            if (e.currentTarget.contains(e.relatedTarget)) return !1;
                            p(!1)
                        }
                    }, []),
                    k = i.useMemo(() => Math.max(...n), [n]),
                    V = i.useCallback(() => ({
                        role: "grid",
                        "aria-rowcount": n.length,
                        "aria-colcount": k,
                        tabIndex: O && f ? -1 : 0,
                        "data-ref-id": t,
                        onKeyDown: G,
                        onFocus: w,
                        onBlur: B
                    }), [n.length, k, O, f, t, G, w, B]),
                    F = i.useCallback((e, n) => {
                        let i = {
                            role: "gridcell",
                            "aria-rowindex": n + 1,
                            "aria-colindex": e + 1,
                            id: (0, a.makeGridId)(t, e, n),
                            tabIndex: f && e === d && n === _ ? 0 : -1,
                            onFocus: D.get("".concat(e, ",").concat(n))
                        };
                        return e === d && n === _ && (i.ref = b), i
                    }, [t, f, d, _, D, b]),
                    x = i.useCallback(e => ({
                        role: "row",
                        "aria-rowindex": e + 1
                    }), []);
                return i.useMemo(() => ({
                    dispatch: T,
                    getContainerProps: V,
                    getItemProps: F,
                    getRowProps: x
                }), [T, V, F, x])
            }({
                navId: t,
                columnCounts: p,
                focusedX: R,
                focusedY: C,
                dispatch: g,
                onSelect: c,
                prepareFocus: E,
                getNewFocusPosition: I,
                maintainFocusPosition: T,
                enabled: f,
                autoFocusElement: A,
                useVirtualFocus: h
            })
    }
}