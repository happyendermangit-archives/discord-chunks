function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("642061"),
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var l = [i.Keys.TAB, i.Keys.UP, i.Keys.DOWN];

    function c(e, t, n) {
        return null != n ? "#".concat(e(t, n)) : "#".concat(t)
    }

    function f(e) {
        return document.querySelector(e)
    }

    function d(e) {
        var t;
        null === (t = document.getElementById(e)) || void 0 === t || t.focus()
    }

    function _(e) {
        var t, n, u, _, E, p, m, y, I, h, O, T, S, v, g, A, b, N, R, C, P, D, L, M, U, w, k, G, B, j, F, V, H, x, Y, W = e.navId,
            K = e.itemCount,
            z = e.focusedIndex,
            X = e.onSelect,
            q = e.setFocus,
            Q = e.getNewFocusIndex,
            J = e.maintainFocusPosition,
            Z = e.includeSetSizes,
            $ = e.focusOnMount,
            ee = e.enabled,
            et = e.onDispatch,
            en = r.useCallback(function(e, t) {
                var n = (0, o.default)(e, t);
                return null != et && et(e, n, t), n
            }, [et]),
            er = s(r.useReducer(en, {
                focusedIndex: void 0 === z ? 0 : z,
                itemCount: K
            }), 2),
            eo = er[0],
            ei = er[1],
            ea = eo.itemCount,
            eu = eo.focusedIndex,
            es = s(r.useState(function() {
                return (0, a.throttle)(ei, 16)
            }), 1)[0];
        return r.useEffect(function() {
            ei({
                type: o.ListActionType.UPDATE_ITEM_COUNT,
                itemCount: K
            })
        }, [K]), n = (t = {
            navId: W,
            itemCount: ea,
            focusedIndex: eu,
            dispatch: es,
            onSelect: X,
            setFocus: q,
            getNewFocusIndex: Q,
            maintainFocusPosition: void 0 === J || J,
            includeSetSizes: void 0 === Z || Z,
            focusOnMount: void 0 === $ || $,
            enabled: void 0 === ee || ee
        }).navId, u = t.itemCount, _ = t.focusedIndex, E = t.onSelect, m = void 0 === (p = t.setFocus) ? d : p, y = t.getNewFocusIndex, I = t.dispatch, h = t.maintainFocusPosition, O = t.includeSetSizes, T = t.focusOnMount, S = t.enabled, g = void 0 === (v = t.makeId) ? a.makeId : v, A = t.getIndexFromId, b = r.useRef(u), (N = r.useRef(A)).current = A, b.current = u, R = r.useRef(), r.useEffect(function() {
            R.current = S
        }, [S]), P = (C = s(r.useState(!1), 2))[0], D = C[1], L = s(r.useState(function() {
            return new a.HandlerMemoizer(function(e) {
                return function() {
                    var t = null != N.current && "string" == typeof e ? N.current(e) : e;
                    "number" == typeof t && !(t < 0) && I({
                        type: o.ListActionType.SET_FOCUSED_INDEX,
                        index: t
                    })
                }
            })
        }), 1)[0], r.useEffect(function() {
            return function() {
                return L.clean()
            }
        }, [L]), M = r.useCallback(function(e, t) {
            R.current && m(e, t)
        }, [m]), w = (U = s(r.useState(!0), 2))[0], k = U[1], r.useEffect(function() {
            if (w && !T) {
                k(!1);
                return
            }
            M(g(n, _), _)
        }, [_]), G = r.useCallback(function() {
            var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                t = null != y ? y(_) : _;
            t !== _ && I({
                type: o.ListActionType.SET_FOCUSED_INDEX,
                index: t
            }), e && M(g(n, t), t)
        }, [g, _, y, I, n, M]), B = r.useCallback(function(e) {
            if (R.current) {
                if (l.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                    e.preventDefault(), e.stopPropagation(), G();
                    return
                }
                var t = function(e) {
                    switch (e.key) {
                        case i.Keys.ENTER:
                        case i.Keys.SPACE:
                            return i.ActionType.SELECT_FOCUSED_ITEM;
                        case i.Keys.UP:
                            return i.ActionType.NAVIGATE_UP;
                        case i.Keys.DOWN:
                            return i.ActionType.NAVIGATE_DOWN;
                        case i.Keys.HOME:
                            return i.ActionType.NAVIGATE_START;
                        case i.Keys.END:
                            return i.ActionType.NAVIGATE_END
                    }
                }(e);
                switch (t) {
                    case i.ActionType.NAVIGATE_UP:
                    case i.ActionType.NAVIGATE_DOWN:
                    case i.ActionType.NAVIGATE_START:
                    case i.ActionType.NAVIGATE_END:
                        e.preventDefault(), e.stopPropagation(), I({
                            type: t
                        });
                        return;
                    case i.ActionType.SELECT_FOCUSED_ITEM:
                        var r, o = f(c(g, n, _));
                        if ((null == (r = o) ? void 0 : r.ownerDocument.activeElement) !== r || e.repeat) return;
                        if (e.preventDefault(), e.stopPropagation(), I({
                                type: t
                            }), null != E) {
                            E(_);
                            return
                        }
                        null == o || o.click()
                }
            }
        }, [g, n, I, _, G, E]), j = r.useCallback(function() {
            P || D(!0)
        }, [P]), F = r.useCallback(function() {
            !P && (h ? M(g(n, _), _) : G(!0))
        }, [g, n, M, h, P, _, G]), V = r.useCallback(function(e) {
            !e.currentTarget.contains(e.relatedTarget) && requestAnimationFrame(function() {
                if (null == f(c(g, n, _))) {
                    M(n);
                    return
                }
                D(!1)
            })
        }, [g, n, _, M]), H = r.useRef(null), r.useLayoutEffect(function() {
            var e = H.current;
            if (null != e) return e.addEventListener("focusin", j), e.addEventListener("focus", F), e.addEventListener("focusout", V),
                function() {
                    e.removeEventListener("focusin", j), e.removeEventListener("focus", F), e.removeEventListener("focusout", V)
                }
        }, [F, j, V]), x = r.useCallback(function() {
            return {
                role: "list",
                tabIndex: P && h ? -1 : 0,
                id: n,
                onKeyDown: B,
                ref: H
            }
        }, [n, P, B, h]), Y = r.useCallback(function(e) {
            var t = e.index;
            return {
                role: "listitem",
                "aria-setsize": O ? b.current : void 0,
                "aria-posinset": O ? t + 1 : void 0,
                id: g(n, t),
                tabIndex: h && t === _ ? 0 : -1,
                onFocus: L.get(null != N.current ? g(n, t) : t)
            }
        }, [g, n, _, h, L, O]), r.useMemo(function() {
            return {
                dispatch: I,
                getContainerProps: x,
                getItemProps: Y
            }
        }, [I, x, Y])
    }
}