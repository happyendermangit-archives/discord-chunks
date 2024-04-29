function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Menu: function() {
            return A
        },
        MenuSpinner: function() {
            return m
        }
    }), n("390547"), n("724458"), n("653041"), n("47120"), n("411104");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("348327"),
        l = n.n(o),
        u = n("739940"),
        d = n("597442"),
        _ = n("21340"),
        c = n("922770"),
        E = n("857595"),
        I = n("607070"),
        T = n("828214"),
        f = n("898560"),
        S = n("788314"),
        h = n("942610");

    function A(e) {
        var t;
        let {
            navId: n,
            variant: s = "flexible",
            hideScroller: o = !1,
            className: c,
            children: A,
            onClose: m,
            onSelect: p
        } = e, O = function e(t) {
            return (function e(t) {
                return null == t ? [] : r.Children.toArray(t).flatMap(t => {
                    var n;
                    return null == t ? [] : Array.isArray(t) ? e(t) : t.type === r.Fragment ? null !== (n = e(t.props.children)) && void 0 !== n ? n : [] : [t]
                })
            })(t).reduce((t, n) => {
                var i, r;
                if (n.type === T.MenuSeparator) return t.push({
                    type: "separator",
                    navigable: !1
                }), t;
                if (n.type === T.MenuGroup) {
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
                if (n.type === T.MenuItem) return t.push(null != n.props.render ? {
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
                else if (n.type === T.MenuCheckboxItem) return t.push({
                    type: "checkbox",
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                }), t;
                else if (n.type === T.MenuRadioItem) return t.push({
                    type: "radio",
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                }), t;
                else if (n.type === T.MenuControlItem) return t.push(null != n.props.control ? {
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
        }(A), R = function e(t) {
            return t.reduce((t, n) => n.navigable ? (t.push({
                key: n.key,
                children: "item" === n.type && null != n.children ? e(n.children) : void 0
            }), t) : t, [])
        }(O), C = r.useRef([]);
        !l()(C.current, R) && (C.current = R);
        let g = null === (t = O.find(e => null != e.key)) || void 0 === t ? void 0 : t.key,
            L = (0, u.useMenuNavigator)({
                navId: n,
                items: C.current,
                initialFocusPath: I.default.keyboardModeEnabled && null != g ? [g] : [],
                closeMenu: m
            });
        r.useEffect(() => {
            L.isUsingKeyboardNavigation ? !I.default.keyboardModeEnabled && (0, E.enableKeyboardMode)() : I.default.keyboardModeEnabled && (0, E.disableKeyboardMode)()
        }, [L.isUsingKeyboardNavigation]);
        let D = r.useRef(null);
        (0, d.useFocusLock)(D);
        let v = o ? _.ScrollerNone : _.ScrollerThin;
        return (0, i.jsx)(f.OnMenuSelectContext.Provider, {
            value: p,
            children: (0, i.jsx)("div", {
                className: a()(h.menu, h[s], c),
                ...L.getContainerProps(),
                ref: D,
                "aria-label": e["aria-label"],
                children: (0, i.jsxs)(v, {
                    className: h.scroller,
                    children: [0 === O.length && (0, i.jsx)(S.Item, {
                        disabled: !0,
                        label: () => (0, i.jsx)(N, {}),
                        menuItemProps: L.getItemProps({
                            path: ["empty"]
                        }),
                        isFocused: !1,
                        onFocus: () => {},
                        onClose: m
                    }), O.length > 0 && function e(t, n, r, s) {
                        let a = 0,
                            o = [];
                        return t.reduce((t, l, u) => {
                            let d = o.length > 0 ? o[o.length - 1] : t;
                            switch (l.type) {
                                case "separator":
                                    d.push((0, i.jsx)(S.Separator, {}, "separator-".concat(u))), a = 0;
                                    break;
                                case "groupstart":
                                    a > 0 && l.length > 0 && (d.push((0, i.jsx)(S.Separator, {}, "separator-".concat(u))), a = 0), o.push([]);
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
                                        listClassName: _,
                                        subMenuClassName: c
                                    } = l, E = null != t, I = [...r, l.key], T = n.isFocused(I), f = (0, i.jsx)(S.Item, {
                                        ...l.props,
                                        label: l.label,
                                        hasSubmenu: null != t,
                                        isFocused: T,
                                        menuItemProps: {
                                            ...n.getItemProps({
                                                path: I,
                                                hasSubmenu: E
                                            }),
                                            ...null != t ? {
                                                "aria-haspopup": !0
                                            } : {}
                                        },
                                        onClose: s
                                    }, l.key);
                                    E ? null != o ? d.push((0, i.jsx)(S.SubmenuListItem, {
                                        ...l.props,
                                        parentItem: f,
                                        isFocused: T,
                                        menuSubmenuProps: n.getSubmenuProps({
                                            path: I
                                        }),
                                        rows: e(t, n, I, s),
                                        rowHeight: o,
                                        onScroll: u,
                                        listClassName: _
                                    }, "".concat(l.key, "-submenu"))) : d.push((0, i.jsx)(S.SubmenuItem, {
                                        ...l.props,
                                        subMenuClassName: c,
                                        parentItem: f,
                                        isFocused: T,
                                        menuSubmenuProps: n.getSubmenuProps({
                                            path: I
                                        }),
                                        renderSubmenu: () => e(t, n, I, s)
                                    }, "".concat(l.key, "-submenu"))) : d.push(f), a++;
                                    break
                                }
                                case "customitem": {
                                    let e = [...r, l.key];
                                    d.push((0, i.jsx)(S.CustomItem, {
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
                                    d.push((0, i.jsx)(S.CheckboxItem, {
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
                                    d.push((0, i.jsx)(S.RadioItem, {
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
                                    d.push((0, i.jsx)(S.ControlItem, {
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
                                    d.push((0, i.jsx)(S.CompositeControlItem, {
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
                    }(O, L, [], m)]
                })
            })
        })
    }

    function m() {
        return (0, i.jsx)("div", {
            className: a()(h.menu, h.loader, h.flexible),
            children: (0, i.jsx)(c.Spinner, {})
        })
    }

    function N() {
        let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
            [t, n] = r.useState(e);
        return r.useEffect(() => {
            if (I.default.useReducedMotion) return;
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