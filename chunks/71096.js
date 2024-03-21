function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Menu: function() {
            return S
        },
        MenuSpinner: function() {
            return T
        }
    }), n("881410"), n("808653"), n("424973"), n("222007"), n("70102");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("714617"),
        l = n.n(o),
        u = n("880317"),
        d = n("311720"),
        c = n("670914"),
        _ = n("242670"),
        f = n("180748"),
        E = n("206230"),
        h = n("155823"),
        g = n("107728"),
        m = n("537011"),
        p = n("639826");

    function S(e) {
        var t;
        let {
            navId: n,
            variant: r = "flexible",
            hideScroller: o = !1,
            className: _,
            children: S,
            onClose: T,
            onSelect: I
        } = e, A = function e(t) {
            return (function e(t) {
                return null == t ? [] : s.Children.toArray(t).flatMap(t => {
                    var n;
                    return null == t ? [] : Array.isArray(t) ? e(t) : t.type === s.Fragment ? null !== (n = e(t.props.children)) && void 0 !== n ? n : [] : [t]
                })
            })(t).reduce((t, n) => {
                var i, s;
                if (n.type === h.MenuSeparator) return t.push({
                    type: "separator",
                    navigable: !1
                }), t;
                if (n.type === h.MenuGroup) {
                    let i = e(n.props.children);
                    return i.length > 0 && (t.push({
                        type: "groupstart",
                        length: i.length,
                        navigable: !1,
                        props: n.props
                    }), t.push(...i), t.push({
                        type: "groupend",
                        length: i.length,
                        navigable: !1,
                        props: n.props
                    })), t
                }
                if (n.type === h.MenuItem) return t.push(null != n.props.render ? {
                    type: "customitem",
                    key: n.props.id,
                    navigable: null == n.props.navigable || n.props.navigable,
                    render: n.props.render,
                    props: n.props
                } : {
                    type: "item",
                    key: n.props.id,
                    navigable: !0,
                    label: n.props.label,
                    children: n.props.children ? e(n.props.children) : void 0,
                    onChildrenScroll: n.props.onChildrenScroll,
                    props: n.props,
                    childRowHeight: n.props.childRowHeight,
                    listClassName: n.props.listClassName,
                    subMenuClassName: n.props.subMenuClassName
                }), t;
                else if (n.type === h.MenuCheckboxItem) return t.push({
                    type: "checkbox",
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                }), t;
                else if (n.type === h.MenuRadioItem) return t.push({
                    type: "radio",
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                }), t;
                else if (n.type === h.MenuControlItem) return t.push(null != n.props.control ? {
                    type: "control",
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                } : {
                    type: "compositecontrol",
                    key: n.props.id,
                    navigable: !1 !== n.props.interactive,
                    children: n.props.children,
                    props: n.props
                }), t;
                throw Error("Menu API only allows Items and groups of Items as children. Received ".concat(null !== (s = null !== (i = null == n ? void 0 : n.type) && void 0 !== i ? i : n) && void 0 !== s ? s : typeof n, " (").concat(typeof n, ") instead"))
            }, [])
        }(S), C = function e(t) {
            return t.reduce((t, n) => n.navigable ? (t.push({
                key: n.key,
                children: "item" === n.type && null != n.children ? e(n.children) : void 0
            }), t) : t, [])
        }(A), y = s.useRef([]);
        !l(y.current, C) && (y.current = C);
        let N = null === (t = A.find(e => null != e.key)) || void 0 === t ? void 0 : t.key,
            R = (0, u.useMenuNavigator)({
                navId: n,
                items: y.current,
                initialFocusPath: E.default.keyboardModeEnabled && null != N ? [N] : [],
                closeMenu: T
            });
        s.useEffect(() => {
            R.isUsingKeyboardNavigation ? !E.default.keyboardModeEnabled && (0, f.enableKeyboardMode)() : E.default.keyboardModeEnabled && (0, f.disableKeyboardMode)()
        }, [R.isUsingKeyboardNavigation]);
        let O = s.useRef(null);
        (0, d.useFocusLock)(O);
        let D = o ? c.ScrollerNone : c.ScrollerThin;
        return (0, i.jsx)(g.OnMenuSelectContext.Provider, {
            value: I,
            children: (0, i.jsx)("div", {
                className: a(p.menu, p[r], _),
                ...R.getContainerProps(),
                ref: O,
                "aria-label": e["aria-label"],
                children: (0, i.jsxs)(D, {
                    className: p.scroller,
                    children: [0 === A.length && (0, i.jsx)(m.Item, {
                        disabled: !0,
                        label: () => (0, i.jsx)(v, {}),
                        menuItemProps: R.getItemProps({
                            path: ["empty"]
                        }),
                        isFocused: !1,
                        onFocus: () => {},
                        onClose: T
                    }), A.length > 0 && function e(t, n, s, r) {
                        let a = 0,
                            o = [];
                        return t.reduce((t, l, u) => {
                            let d = o.length > 0 ? o[o.length - 1] : t;
                            switch (l.type) {
                                case "separator":
                                    d.push((0, i.jsx)(m.Separator, {}, "separator-".concat(u))), a = 0;
                                    break;
                                case "groupstart":
                                    a > 0 && l.length > 0 && (d.push((0, i.jsx)(m.Separator, {}, "separator-".concat(u))), a = 0), o.push([]);
                                    break;
                                case "groupend":
                                    o.length > 0 && t.push((0, i.jsx)(m.Group, {
                                        contents: o.pop(),
                                        ...l.props
                                    }, "group-".concat(u)));
                                    break;
                                case "item": {
                                    let {
                                        children: t,
                                        childRowHeight: o,
                                        onChildrenScroll: u,
                                        listClassName: c,
                                        subMenuClassName: _
                                    } = l, f = null != t, E = [...s, l.key], h = n.isFocused(E), g = (0, i.jsx)(m.Item, {
                                        ...l.props,
                                        label: l.label,
                                        hasSubmenu: null != t,
                                        isFocused: h,
                                        menuItemProps: {
                                            ...n.getItemProps({
                                                path: E,
                                                hasSubmenu: f
                                            }),
                                            ...null != t ? {
                                                "aria-haspopup": !0
                                            } : {}
                                        },
                                        onClose: r
                                    }, l.key);
                                    f ? null != o ? d.push((0, i.jsx)(m.SubmenuListItem, {
                                        ...l.props,
                                        parentItem: g,
                                        isFocused: h,
                                        menuSubmenuProps: n.getSubmenuProps({
                                            path: E
                                        }),
                                        rows: e(t, n, E, r),
                                        rowHeight: o,
                                        onScroll: u,
                                        listClassName: c
                                    }, "".concat(l.key, "-submenu"))) : d.push((0, i.jsx)(m.SubmenuItem, {
                                        ...l.props,
                                        subMenuClassName: _,
                                        parentItem: g,
                                        isFocused: h,
                                        menuSubmenuProps: n.getSubmenuProps({
                                            path: E
                                        }),
                                        renderSubmenu: () => e(t, n, E, r)
                                    }, "".concat(l.key, "-submenu"))) : d.push(g), a++;
                                    break
                                }
                                case "customitem": {
                                    let e = [...s, l.key];
                                    d.push((0, i.jsx)(m.CustomItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e
                                        }),
                                        onClose: r,
                                        children: l.render
                                    }, l.key)), a++;
                                    break
                                }
                                case "checkbox": {
                                    let e = [...s, l.key];
                                    d.push((0, i.jsx)(m.CheckboxItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e,
                                            role: "menuitemcheckbox"
                                        })
                                    }, l.key)), a++;
                                    break
                                }
                                case "radio": {
                                    let e = [...s, l.key];
                                    d.push((0, i.jsx)(m.RadioItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e,
                                            role: "menuitemradio"
                                        })
                                    }, l.key)), a++;
                                    break
                                }
                                case "control": {
                                    let e = [...s, l.key];
                                    d.push((0, i.jsx)(m.ControlItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e
                                        }),
                                        onClose: r
                                    }, l.key)), a++;
                                    break
                                }
                                case "compositecontrol": {
                                    let e = [...s, l.key];
                                    d.push((0, i.jsx)(m.CompositeControlItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e
                                        }),
                                        onClose: r,
                                        children: l.children
                                    }, l.key)), a++
                                }
                            }
                            return t
                        }, [])
                    }(A, R, [], T)]
                })
            })
        })
    }

    function T() {
        return (0, i.jsx)("div", {
            className: a(p.menu, p.loader, p.flexible),
            children: (0, i.jsx)(_.Spinner, {})
        })
    }

    function v() {
        let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
            [t, n] = s.useState(e);
        return s.useEffect(() => {
            if (E.default.useReducedMotion) return;
            let t = setInterval(() => {
                n(t => t === e ? "♫ ⊂(｡◕‿‿◕｡⊂) ♪" : e)
            }, 700);
            return () => clearInterval(t)
        }, []), (0, i.jsx)("div", {
            style: {
                width: "100%",
                textAlign: "center"
            },
            children: t
        })
    }
}