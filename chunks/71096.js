function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Menu: function() {
            return T
        },
        MenuSpinner: function() {
            return g
        }
    }), n("881410"), n("808653"), n("424973"), n("222007"), n("70102");
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("714617"),
        l = n.n(o),
        u = n("880317"),
        c = n("311720"),
        d = n("670914"),
        f = n("242670"),
        E = n("180748"),
        p = n("206230"),
        h = n("155823"),
        _ = n("107728"),
        S = n("537011"),
        m = n("639826");

    function T(e) {
        var t;
        let {
            navId: n,
            variant: s = "flexible",
            hideScroller: o = !1,
            className: f,
            children: T,
            onClose: g,
            onSelect: C
        } = e, v = function e(t) {
            return (function e(t) {
                return null == t ? [] : r.Children.toArray(t).flatMap(t => {
                    var n;
                    return null == t ? [] : Array.isArray(t) ? e(t) : t.type === r.Fragment ? null !== (n = e(t.props.children)) && void 0 !== n ? n : [] : [t]
                })
            })(t).reduce((t, n) => {
                var i, r;
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
                throw Error("Menu API only allows Items and groups of Items as children. Received ".concat(null !== (r = null !== (i = null == n ? void 0 : n.type) && void 0 !== i ? i : n) && void 0 !== r ? r : typeof n, " (").concat(typeof n, ") instead"))
            }, [])
        }(T), A = function e(t) {
            return t.reduce((t, n) => n.navigable ? (t.push({
                key: n.key,
                children: "item" === n.type && null != n.children ? e(n.children) : void 0
            }), t) : t, [])
        }(v), R = r.useRef([]);
        !l(R.current, A) && (R.current = A);
        let N = null === (t = v.find(e => null != e.key)) || void 0 === t ? void 0 : t.key,
            O = (0, u.useMenuNavigator)({
                navId: n,
                items: R.current,
                initialFocusPath: p.default.keyboardModeEnabled && null != N ? [N] : [],
                closeMenu: g
            });
        r.useEffect(() => {
            O.isUsingKeyboardNavigation ? !p.default.keyboardModeEnabled && (0, E.enableKeyboardMode)() : p.default.keyboardModeEnabled && (0, E.disableKeyboardMode)()
        }, [O.isUsingKeyboardNavigation]);
        let D = r.useRef(null);
        (0, c.useFocusLock)(D);
        let y = o ? d.ScrollerNone : d.ScrollerThin;
        return (0, i.jsx)(_.OnMenuSelectContext.Provider, {
            value: C,
            children: (0, i.jsx)("div", {
                className: a(m.menu, m[s], f),
                ...O.getContainerProps(),
                ref: D,
                "aria-label": e["aria-label"],
                children: (0, i.jsxs)(y, {
                    className: m.scroller,
                    children: [0 === v.length && (0, i.jsx)(S.Item, {
                        disabled: !0,
                        label: () => (0, i.jsx)(I, {}),
                        menuItemProps: O.getItemProps({
                            path: ["empty"]
                        }),
                        isFocused: !1,
                        onFocus: () => {},
                        onClose: g
                    }), v.length > 0 && function e(t, n, r, s) {
                        let a = 0,
                            o = [];
                        return t.reduce((t, l, u) => {
                            let c = o.length > 0 ? o[o.length - 1] : t;
                            switch (l.type) {
                                case "separator":
                                    c.push((0, i.jsx)(S.Separator, {}, "separator-".concat(u))), a = 0;
                                    break;
                                case "groupstart":
                                    a > 0 && l.length > 0 && (c.push((0, i.jsx)(S.Separator, {}, "separator-".concat(u))), a = 0), o.push([]);
                                    break;
                                case "groupend":
                                    o.length > 0 && t.push((0, i.jsx)(S.Group, {
                                        contents: o.pop(),
                                        ...l.props
                                    }, "group-".concat(u)));
                                    break;
                                case "item": {
                                    let {
                                        children: t,
                                        childRowHeight: o,
                                        onChildrenScroll: u,
                                        listClassName: d,
                                        subMenuClassName: f
                                    } = l, E = null != t, p = [...r, l.key], h = n.isFocused(p), _ = (0, i.jsx)(S.Item, {
                                        ...l.props,
                                        label: l.label,
                                        hasSubmenu: null != t,
                                        isFocused: h,
                                        menuItemProps: {
                                            ...n.getItemProps({
                                                path: p,
                                                hasSubmenu: E
                                            }),
                                            ...null != t ? {
                                                "aria-haspopup": !0
                                            } : {}
                                        },
                                        onClose: s
                                    }, l.key);
                                    E ? null != o ? c.push((0, i.jsx)(S.SubmenuListItem, {
                                        ...l.props,
                                        parentItem: _,
                                        isFocused: h,
                                        menuSubmenuProps: n.getSubmenuProps({
                                            path: p
                                        }),
                                        rows: e(t, n, p, s),
                                        rowHeight: o,
                                        onScroll: u,
                                        listClassName: d
                                    }, "".concat(l.key, "-submenu"))) : c.push((0, i.jsx)(S.SubmenuItem, {
                                        ...l.props,
                                        subMenuClassName: f,
                                        parentItem: _,
                                        isFocused: h,
                                        menuSubmenuProps: n.getSubmenuProps({
                                            path: p
                                        }),
                                        renderSubmenu: () => e(t, n, p, s)
                                    }, "".concat(l.key, "-submenu"))) : c.push(_), a++;
                                    break
                                }
                                case "customitem": {
                                    let e = [...r, l.key];
                                    c.push((0, i.jsx)(S.CustomItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e
                                        }),
                                        onClose: s,
                                        children: l.render
                                    }, l.key)), a++;
                                    break
                                }
                                case "checkbox": {
                                    let e = [...r, l.key];
                                    c.push((0, i.jsx)(S.CheckboxItem, {
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
                                    let e = [...r, l.key];
                                    c.push((0, i.jsx)(S.RadioItem, {
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
                                    let e = [...r, l.key];
                                    c.push((0, i.jsx)(S.ControlItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e
                                        }),
                                        onClose: s
                                    }, l.key)), a++;
                                    break
                                }
                                case "compositecontrol": {
                                    let e = [...r, l.key];
                                    c.push((0, i.jsx)(S.CompositeControlItem, {
                                        ...l.props,
                                        isFocused: n.isFocused(e),
                                        menuItemProps: n.getItemProps({
                                            path: e
                                        }),
                                        onClose: s,
                                        children: l.children
                                    }, l.key)), a++
                                }
                            }
                            return t
                        }, [])
                    }(v, O, [], g)]
                })
            })
        })
    }

    function g() {
        return (0, i.jsx)("div", {
            className: a(m.menu, m.loader, m.flexible),
            children: (0, i.jsx)(f.Spinner, {})
        })
    }

    function I() {
        let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
            [t, n] = r.useState(e);
        return r.useEffect(() => {
            if (p.default.useReducedMotion) return;
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