function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("470079"),
        r = n("808629"),
        s = n("536895"),
        a = n("260866");

    function o(e) {
        let {
            navId: t,
            items: n,
            initialFocusPath: o,
            onSelect: l,
            enabled: u = !0,
            closeMenu: d
        } = e, _ = i.useRef(u);
        i.useLayoutEffect(() => {
            _.current = u
        }, [u]);
        let [c, E] = i.useReducer(r.default, {
            items: n,
            focusPath: o,
            focusIndex: -1
        }), I = i.useMemo(() => (0, a.throttle)(E, 30), [E]);
        i.useEffect(() => {
            E({
                type: r.MenuActionType.UPDATE_ITEMS,
                items: n
            })
        }, [n]);
        let {
            focusPath: T
        } = c, [f, S] = i.useState(!1), [h, A] = i.useState(!1), [{
            onItemFocusMemoizer: m,
            onItemMouseEnterMemoizer: N
        }] = i.useState(() => ({
            onItemFocusMemoizer: new a.HandlerMemoizer(e => () => {
                S(!0), E({
                    type: r.MenuActionType.SET_FOCUS_PATH,
                    path: e.split("--")
                })
            }),
            onItemMouseEnterMemoizer: new a.HandlerMemoizer(e => () => {
                A(!1), E({
                    type: r.MenuActionType.SET_FOCUS_PATH,
                    path: e.split("--")
                })
            })
        })), p = i.useCallback(e => {
            if (!_.current) return;
            e.key === s.Keys.ESCAPE && null != d && (e.stopPropagation(), e.preventDefault(), d());
            let n = function(e) {
                switch (e.key) {
                    case s.Keys.ENTER:
                    case s.Keys.SPACE:
                        return s.ActionType.SELECT_FOCUSED_ITEM;
                    case s.Keys.UP:
                        return s.ActionType.NAVIGATE_UP;
                    case s.Keys.DOWN:
                        return s.ActionType.NAVIGATE_DOWN;
                    case s.Keys.RIGHT:
                        return s.ActionType.NAVIGATE_IN;
                    case s.Keys.LEFT:
                        return s.ActionType.NAVIGATE_OUT
                }
            }(e);
            switch (n) {
                case s.ActionType.NAVIGATE_UP:
                case s.ActionType.NAVIGATE_DOWN:
                case s.ActionType.NAVIGATE_IN:
                case s.ActionType.NAVIGATE_OUT:
                    e.preventDefault(), e.stopPropagation(), A(!0), I({
                        type: n
                    });
                    return;
                case s.ActionType.SELECT_FOCUSED_ITEM:
                    var i, r, o, u, c;
                    if (e.repeat) return;
                    if (e.target.tabIndex >= 0) return;
                    if (e.preventDefault(), e.stopPropagation(), A(!1), I({
                            type: n
                        }), null != l) {
                        l(T);
                        return
                    }
                    let E = (u = null !== (i = e.target.ownerDocument) && void 0 !== i ? i : document, c = (r = t, null != (o = T) ? "".concat((0, a.makeId)(r, o.join("--"))) : r), u.getElementById(c));
                    null == E || E.click()
            }
        }, [I, t, T, l, d]), O = i.useCallback(() => {
            !f && S(!0)
        }, [f]), R = i.useCallback(e => {
            e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && f && S(!1)
        }, [f]), C = i.useCallback(() => {
            E({
                type: r.MenuActionType.SET_FOCUS_PATH,
                path: []
            }), S(!1)
        }, []), g = i.useCallback(e => e.every((e, t) => T[t] === e), [T]), L = i.useCallback(() => ({
            role: "menu",
            id: t,
            tabIndex: -1,
            onKeyDown: p,
            onFocus: O,
            onBlur: R,
            onMouseLeave: C,
            "aria-activedescendant": T.length > 0 ? (0, a.makeId)(t, T.join("--")) : void 0
        }), [t, p, O, R, C, T]), D = i.useCallback(e => {
            let {
                path: n
            } = e;
            return {
                role: "menu",
                tabIndex: -1,
                "aria-activedescendant": g(n) ? (0, a.makeId)(t, T.join("--")) : void 0,
                focusIndex: c.focusIndex,
                isUsingKeyboardNavigation: h
            }
        }, [t, T, g, c.focusIndex, h]), v = i.useCallback(e => {
            let {
                path: n,
                hasSubmenu: i = !1,
                role: r = "menuitem"
            } = e, s = n.join("--");
            return {
                ...i ? {
                    "aria-expanded": g(n),
                    "aria-haspopup": !0
                } : {},
                role: r,
                id: (0, a.makeId)(t, s),
                tabIndex: -1,
                onFocus: m.get(s),
                onMouseEnter: N.get(s)
            }
        }, [t, g, m, N]);
        return i.useMemo(() => ({
            dispatch: I,
            getContainerProps: L,
            getSubmenuProps: D,
            getItemProps: v,
            isFocused: g,
            isUsingKeyboardNavigation: h
        }), [I, L, D, v, g, h])
    }
}