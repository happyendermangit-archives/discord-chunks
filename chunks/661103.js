function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("321793"),
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

    function l(e) {
        var t = e.navId,
            n = e.items,
            u = e.initialFocusPath,
            l = e.onSelect,
            c = e.enabled,
            f = void 0 === c || c,
            d = e.closeMenu,
            _ = r.useRef(f);
        r.useLayoutEffect(function() {
            _.current = f
        }, [f]);
        var E = s(r.useReducer(o.default, {
                items: n,
                focusPath: u,
                focusIndex: -1
            }), 2),
            p = E[0],
            m = E[1],
            y = r.useMemo(function() {
                return (0, a.throttle)(m, 30)
            }, [m]);
        r.useEffect(function() {
            m({
                type: o.MenuActionType.UPDATE_ITEMS,
                items: n
            })
        }, [n]);
        var I = p.focusPath,
            h = s(r.useState(!1), 2),
            O = h[0],
            T = h[1],
            S = s(r.useState(!1), 2),
            v = S[0],
            g = S[1],
            A = s(r.useState(function() {
                return {
                    onItemFocusMemoizer: new a.HandlerMemoizer(function(e) {
                        return function() {
                            T(!0), m({
                                type: o.MenuActionType.SET_FOCUS_PATH,
                                path: e.split("--")
                            })
                        }
                    }),
                    onItemMouseEnterMemoizer: new a.HandlerMemoizer(function(e) {
                        return function() {
                            g(!1), m({
                                type: o.MenuActionType.SET_FOCUS_PATH,
                                path: e.split("--")
                            })
                        }
                    })
                }
            }), 1)[0],
            b = A.onItemFocusMemoizer,
            N = A.onItemMouseEnterMemoizer,
            R = r.useCallback(function(e) {
                if (_.current) {
                    e.key === i.Keys.ESCAPE && null != d && (e.stopPropagation(), e.preventDefault(), d());
                    var n = function(e) {
                        switch (e.key) {
                            case i.Keys.ENTER:
                            case i.Keys.SPACE:
                                return i.ActionType.SELECT_FOCUSED_ITEM;
                            case i.Keys.UP:
                                return i.ActionType.NAVIGATE_UP;
                            case i.Keys.DOWN:
                                return i.ActionType.NAVIGATE_DOWN;
                            case i.Keys.RIGHT:
                                return i.ActionType.NAVIGATE_IN;
                            case i.Keys.LEFT:
                                return i.ActionType.NAVIGATE_OUT
                        }
                    }(e);
                    switch (n) {
                        case i.ActionType.NAVIGATE_UP:
                        case i.ActionType.NAVIGATE_DOWN:
                        case i.ActionType.NAVIGATE_IN:
                        case i.ActionType.NAVIGATE_OUT:
                            e.preventDefault(), e.stopPropagation(), g(!0), y({
                                type: n
                            });
                            return;
                        case i.ActionType.SELECT_FOCUSED_ITEM:
                            if (e.repeat) return;
                            if (e.target.tabIndex >= 0) return;
                            if (e.preventDefault(), e.stopPropagation(), g(!1), y({
                                    type: n
                                }), null != l) {
                                l(I);
                                return
                            }
                            var r, o, u, s, c, f = (s = null !== (r = e.target.ownerDocument) && void 0 !== r ? r : document, c = (o = t, null != (u = I) ? "".concat((0, a.makeId)(o, u.join("--"))) : o), s.getElementById(c));
                            null == f || f.click()
                    }
                }
            }, [y, t, I, l, d]),
            C = r.useCallback(function() {
                !O && T(!0)
            }, [O]),
            P = r.useCallback(function(e) {
                e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && O && T(!1)
            }, [O]),
            D = r.useCallback(function() {
                m({
                    type: o.MenuActionType.SET_FOCUS_PATH,
                    path: []
                }), T(!1)
            }, []),
            L = r.useCallback(function(e) {
                return e.every(function(e, t) {
                    return I[t] === e
                })
            }, [I]),
            M = r.useCallback(function() {
                return {
                    role: "menu",
                    id: t,
                    tabIndex: -1,
                    onKeyDown: R,
                    onFocus: C,
                    onBlur: P,
                    onMouseLeave: D,
                    "aria-activedescendant": I.length > 0 ? (0, a.makeId)(t, I.join("--")) : void 0
                }
            }, [t, R, C, P, D, I]),
            U = r.useCallback(function(e) {
                return {
                    role: "menu",
                    tabIndex: -1,
                    "aria-activedescendant": L(e.path) ? (0, a.makeId)(t, I.join("--")) : void 0,
                    focusIndex: p.focusIndex,
                    isUsingKeyboardNavigation: v
                }
            }, [t, I, L, p.focusIndex, v]),
            w = r.useCallback(function(e) {
                var n, r, o = e.path,
                    i = e.hasSubmenu,
                    u = e.role,
                    s = o.join("--");
                return n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r, o, i;
                            r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[o] = i
                        })
                    }
                    return e
                }({}, void 0 !== i && i ? {
                    "aria-expanded": L(o),
                    "aria-haspopup": !0
                } : {}), r = (r = {
                    role: void 0 === u ? "menuitem" : u,
                    id: (0, a.makeId)(t, s),
                    tabIndex: -1,
                    onFocus: b.get(s),
                    onMouseEnter: N.get(s)
                }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n
            }, [t, L, b, N]);
        return r.useMemo(function() {
            return {
                dispatch: y,
                getContainerProps: M,
                getSubmenuProps: U,
                getItemProps: w,
                isFocused: L,
                isUsingKeyboardNavigation: v
            }
        }, [y, M, U, w, L, v])
    }
}