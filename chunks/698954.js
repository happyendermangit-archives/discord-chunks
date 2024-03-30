function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GridActionType: function() {
            return o.GridActionType
        },
        default: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("498101"),
        i = n("639340"),
        a = n("447261");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || l(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(e, t) {
        if (e) {
            if ("string" == typeof e) return u(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
        }
    }
    var c = [i.Keys.TAB];

    function f(e, t, n) {
        return null != t && null != n ? "#".concat((0, a.makeGridId)(e, t, n)) : "[data-ref-id=".concat(e, "]")
    }

    function d(e) {
        return document.querySelector(e)
    }

    function _(e) {
        var t, n, _, E, p, m, y, I, h, O, T, S, v, g, A, b, N, R, C, P, D, L, M, U, w, k, G, B, j, F, V, H, x, Y, W, K, z, X, q, Q, J = e.navId,
            Z = e.columnCounts,
            $ = e.focusedX,
            ee = e.focusedY,
            et = e.onSelect,
            en = e.prepareFocus,
            er = e.getNewFocusPosition,
            eo = e.maintainFocusPosition,
            ei = e.enabled,
            ea = e.onDispatch,
            eu = e.autoFocusElement,
            es = e.useVirtualFocus,
            el = r.useCallback(function(e, t) {
                var n = (0, o.default)(e, t);
                return null != ea && ea(e, n, t), n
            }, [ea]),
            ec = s(r.useReducer(el, {
                focusedX: void 0 === $ ? 0 : $,
                focusedY: void 0 === ee ? 0 : ee,
                columnCounts: Z
            }), 2),
            ef = ec[0],
            ed = ec[1],
            e_ = ef.columnCounts,
            eE = ef.focusedX,
            ep = ef.focusedY,
            em = s(r.useState(function() {
                return (0, a.throttle)(ed, 16)
            }), 1)[0];
        return r.useEffect(function() {
            ed({
                type: o.GridActionType.UPDATE_COLUMN_COUNTS,
                columnCounts: Z
            })
        }, [Z]), _ = (t = {
            navId: J,
            columnCounts: e_,
            focusedX: eE,
            focusedY: ep,
            dispatch: em,
            onSelect: et,
            prepareFocus: en,
            getNewFocusPosition: er,
            maintainFocusPosition: void 0 === eo || eo,
            enabled: void 0 === ei || ei,
            autoFocusElement: void 0 === eu || eu,
            useVirtualFocus: void 0 !== es && es
        }).navId, E = t.columnCounts, p = t.focusedX, m = t.focusedY, y = t.onSelect, I = t.prepareFocus, h = t.getNewFocusPosition, O = t.dispatch, T = t.maintainFocusPosition, S = t.enabled, v = t.autoFocusElement, g = t.useVirtualFocus, (A = r.useRef()).current = S, b = d(f(_, p, m)), R = (N = s(r.useState(!1), 2))[0], C = N[1], D = (P = s(r.useState(!1), 2))[0], L = P[1], U = (M = s(r.useState(!1), 2))[0], w = M[1], k = s(r.useState(function() {
            return new a.HandlerMemoizer(function(e) {
                var t = s(e.split(",").map(Number), 2),
                    n = t[0],
                    r = t[1];
                return function() {
                    C(!0), O({
                        type: o.GridActionType.SET_FOCUSED_POSITION,
                        x: n,
                        y: r
                    })
                }
            })
        }), 1)[0], r.useEffect(function() {
            return function() {
                return k.clean()
            }
        }, [k]), G = r.useCallback(function(e) {
            if (!A.current || !v) return !1;
            e.focus()
        }, [v]), B = r.useCallback(function(e, t) {
            var n = f(_, e, t);
            (null != I ? I(e, t, n) : Promise.resolve()).then(function() {
                var e = d(n);
                null != e ? (G(e), L(!1)) : requestAnimationFrame(function() {
                    return L(!0)
                })
            })
        }, [_, I, G]), j = r.useCallback(function() {
            var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                t = s(null != h ? h(p, m) : [p, m], 2),
                n = t[0],
                r = t[1];
            if ((n !== p || r !== m) && (O({
                    type: o.GridActionType.SET_FOCUSED_POSITION,
                    x: n,
                    y: r
                }), !e)) {
                w(!0);
                return
            }
            var i = d(f(_, n, r));
            null != i && (w(!0), G(i))
        }, [O, p, m, h, _, G]), V = (F = s(r.useState(!1), 2))[0], H = F[1], r.useEffect(function() {
            if (V && R) {
                H(!1);
                var e = d(f(_, p, m));
                if (null != e) {
                    G(e);
                    return
                }
                C(!1);
                var t = d(f(_));
                null != t && G(t)
            }
        }, [_, V, R, G, p, m]), x = r.useCallback(function(e) {
            A.current && null == e && H(!0)
        }, []), r.useEffect(function() {
            R && D && null != b && (G(b), L(!1))
        }, [D, b]), r.useEffect(function() {
            R && (!U && B(p, m), w(!1))
        }, [p, m]), Y = r.useCallback(function(e) {
            if (A.current) {
                if (!g && c.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                    e.preventDefault(), e.stopPropagation(), j();
                    return
                }
                var t, n = function(e) {
                    switch (e.key) {
                        case i.Keys.ENTER:
                            return i.ActionType.SELECT_FOCUSED_ITEM;
                        case i.Keys.UP:
                            return i.ActionType.NAVIGATE_UP;
                        case i.Keys.DOWN:
                            return i.ActionType.NAVIGATE_DOWN;
                        case i.Keys.RIGHT:
                            return i.ActionType.NAVIGATE_RIGHT;
                        case i.Keys.LEFT:
                            return i.ActionType.NAVIGATE_LEFT;
                        case i.Keys.HOME:
                            if (e.ctrlKey) return i.ActionType.NAVIGATE_START;
                            return i.ActionType.NAVIGATE_INLINE_START;
                        case i.Keys.END:
                            if (e.ctrlKey) return i.ActionType.NAVIGATE_END;
                            return i.ActionType.NAVIGATE_INLINE_END
                    }
                }(e);
                switch (n) {
                    case i.ActionType.NAVIGATE_UP:
                    case i.ActionType.NAVIGATE_DOWN:
                    case i.ActionType.NAVIGATE_RIGHT:
                    case i.ActionType.NAVIGATE_LEFT:
                    case i.ActionType.NAVIGATE_INLINE_START:
                    case i.ActionType.NAVIGATE_INLINE_END:
                    case i.ActionType.NAVIGATE_START:
                    case i.ActionType.NAVIGATE_END:
                        !(0 === E.length || 0 === p && 0 === m && n === i.ActionType.NAVIGATE_LEFT) && (e.preventDefault(), e.stopPropagation()), O({
                            type: n
                        });
                        return;
                    case i.ActionType.SELECT_FOCUSED_ITEM:
                        ;
                        if (v && (null == (t = b) ? void 0 : t.ownerDocument.activeElement) !== t || e.repeat) return;
                        e.preventDefault(), e.stopPropagation(), O({
                            type: n
                        }), null != y ? y(p, m, e) : null != b && b.click()
                }
            }
        }, [j, O, v, b, y, p, m]), W = r.useCallback(function(e) {
            return e.currentTarget !== e.target ? (!R && (C(!0), w(!0)), !1) : R ? (j(!1), !1) : void(T && null != b ? B(p, m) : j(!0))
        }, [R, T, b, j, B, p, m]), K = r.useCallback(function(e) {
            if (e.target !== e.currentTarget) {
                if (e.currentTarget.contains(e.relatedTarget)) return !1;
                C(!1)
            }
        }, []), z = r.useMemo(function() {
            var e;
            return (n = Math).max.apply(n, function(e) {
                if (Array.isArray(e)) return u(e)
            }(e = E) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || l(e) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())
        }, [E]), X = r.useCallback(function() {
            return {
                role: "grid",
                "aria-rowcount": E.length,
                "aria-colcount": z,
                tabIndex: R && T ? -1 : 0,
                "data-ref-id": _,
                onKeyDown: Y,
                onFocus: W,
                onBlur: K
            }
        }, [E.length, z, R, T, _, Y, W, K]), q = r.useCallback(function(e, t) {
            var n = {
                role: "gridcell",
                "aria-rowindex": t + 1,
                "aria-colindex": e + 1,
                id: (0, a.makeGridId)(_, e, t),
                tabIndex: T && e === p && t === m ? 0 : -1,
                onFocus: k.get("".concat(e, ",").concat(t))
            };
            return e === p && t === m && (n.ref = x), n
        }, [_, T, p, m, k, x]), Q = r.useCallback(function(e) {
            return {
                role: "row",
                "aria-rowindex": e + 1
            }
        }, []), r.useMemo(function() {
            return {
                dispatch: O,
                getContainerProps: X,
                getItemProps: q,
                getRowProps: Q
            }
        }, [O, X, q, Q])
    }
}