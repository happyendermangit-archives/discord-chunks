function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("222007");
    var i = n("884691"),
        s = n("429787"),
        r = n("942367"),
        a = n("74139");

    function o(e) {
        let {
            navId: t,
            items: n,
            initialFocusPath: o,
            onSelect: l,
            enabled: u = !0,
            closeMenu: d
        } = e, c = i.useRef(u);
        i.useLayoutEffect(() => {
            c.current = u
        }, [u]);
        let [_, f] = i.useReducer(s.default, {
            items: n,
            focusPath: o,
            focusIndex: -1
        }), E = i.useMemo(() => (0, a.throttle)(f, 30), [f]);
        i.useEffect(() => {
            f({
                type: s.MenuActionType.UPDATE_ITEMS,
                items: n
            })
        }, [n]);
        let {
            focusPath: h
        } = _, [g, m] = i.useState(!1), [p, S] = i.useState(!1), [{
            onItemFocusMemoizer: v,
            onItemMouseEnterMemoizer: T
        }] = i.useState(() => ({
            onItemFocusMemoizer: new a.HandlerMemoizer(e => () => {
                m(!0), f({
                    type: s.MenuActionType.SET_FOCUS_PATH,
                    path: e.split("--")
                })
            }),
            onItemMouseEnterMemoizer: new a.HandlerMemoizer(e => () => {
                S(!1), f({
                    type: s.MenuActionType.SET_FOCUS_PATH,
                    path: e.split("--")
                })
            })
        })), I = i.useCallback(e => {
            if (!c.current) return;
            e.key === r.Keys.ESCAPE && null != d && (e.stopPropagation(), e.preventDefault(), d());
            let n = function(e) {
                switch (e.key) {
                    case r.Keys.ENTER:
                    case r.Keys.SPACE:
                        return r.ActionType.SELECT_FOCUSED_ITEM;
                    case r.Keys.UP:
                        return r.ActionType.NAVIGATE_UP;
                    case r.Keys.DOWN:
                        return r.ActionType.NAVIGATE_DOWN;
                    case r.Keys.RIGHT:
                        return r.ActionType.NAVIGATE_IN;
                    case r.Keys.LEFT:
                        return r.ActionType.NAVIGATE_OUT
                }
            }(e);
            switch (n) {
                case r.ActionType.NAVIGATE_UP:
                case r.ActionType.NAVIGATE_DOWN:
                case r.ActionType.NAVIGATE_IN:
                case r.ActionType.NAVIGATE_OUT:
                    e.preventDefault(), e.stopPropagation(), S(!0), E({
                        type: n
                    });
                    return;
                case r.ActionType.SELECT_FOCUSED_ITEM:
                    var i, s, o, u, _;
                    if (e.repeat) return;
                    if (e.target.tabIndex >= 0) return;
                    if (e.preventDefault(), e.stopPropagation(), S(!1), E({
                            type: n
                        }), null != l) {
                        l(h);
                        return
                    }
                    let f = null !== (i = e.target.ownerDocument) && void 0 !== i ? i : document;
                    let g = (u = f, _ = (s = t, null != (o = h) ? "".concat((0, a.makeId)(s, o.join("--"))) : s), u.getElementById(_));
                    null == g || g.click()
            }
        }, [E, t, h, l, d]), A = i.useCallback(() => {
            !g && m(!0)
        }, [g]), C = i.useCallback(e => {
            e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && g && m(!1)
        }, [g]), y = i.useCallback(() => {
            f({
                type: s.MenuActionType.SET_FOCUS_PATH,
                path: []
            }), m(!1)
        }, []), N = i.useCallback(e => e.every((e, t) => h[t] === e), [h]), R = i.useCallback(() => ({
            role: "menu",
            id: t,
            tabIndex: -1,
            onKeyDown: I,
            onFocus: A,
            onBlur: C,
            onMouseLeave: y,
            "aria-activedescendant": h.length > 0 ? (0, a.makeId)(t, h.join("--")) : void 0
        }), [t, I, A, C, y, h]), O = i.useCallback(e => {
            let {
                path: n
            } = e;
            return {
                role: "menu",
                tabIndex: -1,
                "aria-activedescendant": N(n) ? (0, a.makeId)(t, h.join("--")) : void 0,
                focusIndex: _.focusIndex,
                isUsingKeyboardNavigation: p
            }
        }, [t, h, N, _.focusIndex, p]), D = i.useCallback(e => {
            let {
                path: n,
                hasSubmenu: i = !1,
                role: s = "menuitem"
            } = e, r = n.join("--"), o = i ? {
                "aria-expanded": N(n),
                "aria-haspopup": !0
            } : {};
            return {
                ...o,
                role: s,
                id: (0, a.makeId)(t, r),
                tabIndex: -1,
                onFocus: v.get(r),
                onMouseEnter: T.get(r)
            }
        }, [t, N, v, T]), P = i.useMemo(() => ({
            dispatch: E,
            getContainerProps: R,
            getSubmenuProps: O,
            getItemProps: D,
            isFocused: N,
            isUsingKeyboardNavigation: p
        }), [E, R, O, D, N, p]);
        return P
    }
}