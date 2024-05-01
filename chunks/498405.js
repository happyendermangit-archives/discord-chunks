function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("470079"),
        r = n("808629"),
        a = n("536895"),
        s = n("260866");

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
        }), I = i.useMemo(() => (0, s.throttle)(E, 30), [E]);
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
            onItemFocusMemoizer: new s.HandlerMemoizer(e => () => {
                S(!0), E({
                    type: r.MenuActionType.SET_FOCUS_PATH,
                    path: e.split("--")
                })
            }),
            onItemMouseEnterMemoizer: new s.HandlerMemoizer(e => () => {
                A(!1), E({
                    type: r.MenuActionType.SET_FOCUS_PATH,
                    path: e.split("--")
                })
            })
        })), p = i.useCallback(e => {
            if (!_.current) return;
            e.key === a.Keys.ESCAPE && null != d && (e.stopPropagation(), e.preventDefault(), d());
            let n = function(e) {
                switch (e.key) {
                    case a.Keys.ENTER:
                    case a.Keys.SPACE:
                        return a.ActionType.SELECT_FOCUSED_ITEM;
                    case a.Keys.UP:
                        return a.ActionType.NAVIGATE_UP;
                    case a.Keys.DOWN:
                        return a.ActionType.NAVIGATE_DOWN;
                    case a.Keys.RIGHT:
                        return a.ActionType.NAVIGATE_IN;
                    case a.Keys.LEFT:
                        return a.ActionType.NAVIGATE_OUT
                }
            }(e);
            switch (n) {
                case a.ActionType.NAVIGATE_UP:
                case a.ActionType.NAVIGATE_DOWN:
                case a.ActionType.NAVIGATE_IN:
                case a.ActionType.NAVIGATE_OUT:
                    e.preventDefault(), e.stopPropagation(), A(!0), I({
                        type: n
                    });
                    return;
                case a.ActionType.SELECT_FOCUSED_ITEM:
                    var i, r, o, u, c;
                    if (e.repeat) return;
                    if (e.target.tabIndex >= 0) return;
                    if (e.preventDefault(), e.stopPropagation(), A(!1), I({
                            type: n
                        }), null != l) {
                        l(T);
                        return
                    }
                    let E = (u = null !== (i = e.target.ownerDocument) && void 0 !== i ? i : document, c = (r = t, null != (o = T) ? "".concat((0, s.makeId)(r, o.join("--"))) : r), u.getElementById(c));
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
            "aria-activedescendant": T.length > 0 ? (0, s.makeId)(t, T.join("--")) : void 0
        }), [t, p, O, R, C, T]), v = i.useCallback(e => {
            let {
                path: n
            } = e;
            return {
                role: "menu",
                tabIndex: -1,
                "aria-activedescendant": g(n) ? (0, s.makeId)(t, T.join("--")) : void 0,
                focusIndex: c.focusIndex,
                isUsingKeyboardNavigation: h
            }
        }, [t, T, g, c.focusIndex, h]), D = i.useCallback(e => {
            let {
                path: n,
                hasSubmenu: i = !1,
                role: r = "menuitem"
            } = e, a = n.join("--");
            return {
                ...i ? {
                    "aria-expanded": g(n),
                    "aria-haspopup": !0
                } : {},
                role: r,
                id: (0, s.makeId)(t, a),
                tabIndex: -1,
                onFocus: m.get(a),
                onMouseEnter: N.get(a)
            }
        }, [t, g, m, N]);
        return i.useMemo(() => ({
            dispatch: I,
            getContainerProps: L,
            getSubmenuProps: v,
            getItemProps: D,
            isFocused: g,
            isUsingKeyboardNavigation: h
        }), [I, L, v, D, g, h])
    }
}