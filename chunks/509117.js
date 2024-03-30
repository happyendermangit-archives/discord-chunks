function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Menu: function() {
            return g
        },
        MenuSpinner: function() {
            return A
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("348327"),
        u = n.n(a),
        s = n("657354"),
        l = n("979820"),
        c = n("175071"),
        f = n("680799"),
        d = n("357337"),
        _ = n("622780"),
        E = n("946808"),
        p = n("20487"),
        m = n("670588"),
        y = n("989608");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e) {
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
    }

    function O(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function T(e) {
        return function(e) {
            if (Array.isArray(e)) return I(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || v(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function S(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }

    function v(e, t) {
        if (e) {
            if ("string" == typeof e) return I(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
        }
    }

    function g(e) {
        var t, n = e.navId,
            o = e.variant,
            a = e.hideScroller,
            f = e.className,
            I = e.children,
            v = e.onClose,
            g = e.onSelect,
            A = function e(t) {
                return (function e(t) {
                    return null == t ? [] : r.Children.toArray(t).flatMap(function(t) {
                        var n;
                        return null == t ? [] : Array.isArray(t) ? e(t) : t.type === r.Fragment ? null !== (n = e(t.props.children)) && void 0 !== n ? n : [] : [t]
                    })
                })(t).reduce(function(t, n) {
                    if (n.type === E.MenuSeparator) return t.push({
                        type: "separator",
                        navigable: !1
                    }), t;
                    if (n.type === E.MenuGroup) {
                        var r, o, i = e(n.props.children);
                        return i.length > 0 && (t.push({
                            type: "groupstart",
                            length: i.length,
                            navigable: !1,
                            props: n.props
                        }), t.push.apply(t, T(i)), t.push({
                            type: "groupend",
                            length: i.length,
                            navigable: !1,
                            props: n.props
                        })), t
                    }
                    if (n.type === E.MenuItem) return t.push(null != n.props.render ? {
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
                    else if (n.type === E.MenuCheckboxItem) return t.push({
                        type: "checkbox",
                        key: n.props.id,
                        navigable: !0,
                        props: n.props
                    }), t;
                    else if (n.type === E.MenuRadioItem) return t.push({
                        type: "radio",
                        key: n.props.id,
                        navigable: !0,
                        props: n.props
                    }), t;
                    else if (n.type === E.MenuControlItem) return t.push(null != n.props.control ? {
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
                    throw Error("Menu API only allows Items and groups of Items as children. Received ".concat(null !== (o = null !== (r = null == n ? void 0 : n.type) && void 0 !== r ? r : n) && void 0 !== o ? o : void 0 === n ? "undefined" : S(n), " (").concat(void 0 === n ? "undefined" : S(n), ") instead"))
                }, [])
            }(I),
            N = function e(t) {
                return t.reduce(function(t, n) {
                    return n.navigable ? (t.push({
                        key: n.key,
                        children: "item" === n.type && null != n.children ? e(n.children) : void 0
                    }), t) : t
                }, [])
            }(A),
            R = r.useRef([]);
        !u()(R.current, N) && (R.current = N);
        var C = null === (t = A.find(function(e) {
                return null != e.key
            })) || void 0 === t ? void 0 : t.key,
            P = (0, s.useMenuNavigator)({
                navId: n,
                items: R.current,
                initialFocusPath: _.default.keyboardModeEnabled && null != C ? [C] : [],
                closeMenu: v
            });
        r.useEffect(function() {
            P.isUsingKeyboardNavigation ? !_.default.keyboardModeEnabled && (0, d.enableKeyboardMode)() : _.default.keyboardModeEnabled && (0, d.disableKeyboardMode)()
        }, [P.isUsingKeyboardNavigation]);
        var D = r.useRef(null);
        (0, l.useFocusLock)(D);
        var L = void 0 !== a && a ? c.ScrollerNone : c.ScrollerThin;
        return r.createElement(p.OnMenuSelectContext.Provider, {
            value: g
        }, r.createElement("div", O(h({
            className: i()(y.menu, y[void 0 === o ? "flexible" : o], f)
        }, P.getContainerProps()), {
            ref: D,
            "aria-label": e["aria-label"]
        }), r.createElement(L, {
            className: y.scroller
        }, 0 === A.length && r.createElement(m.Item, {
            disabled: !0,
            label: function() {
                return r.createElement(b, null)
            },
            menuItemProps: P.getItemProps({
                path: ["empty"]
            }),
            isFocused: !1,
            onFocus: function() {},
            onClose: v
        }), A.length > 0 && function e(t, n, o, i) {
            var a = 0,
                u = [];
            return t.reduce(function(t, s, l) {
                var c = u.length > 0 ? u[u.length - 1] : t;
                switch (s.type) {
                    case "separator":
                        c.push(r.createElement(m.Separator, {
                            key: "separator-".concat(l)
                        })), a = 0;
                        break;
                    case "groupstart":
                        a > 0 && s.length > 0 && (c.push(r.createElement(m.Separator, {
                            key: "separator-".concat(l)
                        })), a = 0), u.push([]);
                        break;
                    case "groupend":
                        u.length > 0 && t.push(r.createElement(m.Group, h({
                            key: "group-".concat(l),
                            contents: u.pop()
                        }, s.props)));
                        break;
                    case "item":
                        var f = s.children,
                            d = s.childRowHeight,
                            _ = s.onChildrenScroll,
                            E = s.listClassName,
                            p = s.subMenuClassName,
                            y = null != f,
                            I = T(o).concat([s.key]),
                            S = n.isFocused(I),
                            v = r.createElement(m.Item, O(h({
                                key: s.key
                            }, s.props), {
                                label: s.label,
                                hasSubmenu: null != f,
                                isFocused: S,
                                menuItemProps: h({}, n.getItemProps({
                                    path: I,
                                    hasSubmenu: y
                                }), null != f ? {
                                    "aria-haspopup": !0
                                } : {}),
                                onClose: i
                            }));
                        y ? null != d ? c.push(r.createElement(m.SubmenuListItem, O(h({
                            key: "".concat(s.key, "-submenu")
                        }, s.props), {
                            parentItem: v,
                            isFocused: S,
                            menuSubmenuProps: n.getSubmenuProps({
                                path: I
                            }),
                            rows: e(f, n, I, i),
                            rowHeight: d,
                            onScroll: _,
                            listClassName: E
                        }))) : c.push(r.createElement(m.SubmenuItem, O(h({
                            key: "".concat(s.key, "-submenu")
                        }, s.props), {
                            subMenuClassName: p,
                            parentItem: v,
                            isFocused: S,
                            menuSubmenuProps: n.getSubmenuProps({
                                path: I
                            }),
                            renderSubmenu: function() {
                                return e(f, n, I, i)
                            }
                        }))) : c.push(v), a++;
                        break;
                    case "customitem":
                        var g = T(o).concat([s.key]);
                        c.push(r.createElement(m.CustomItem, O(h({
                            key: s.key
                        }, s.props), {
                            isFocused: n.isFocused(g),
                            menuItemProps: n.getItemProps({
                                path: g
                            }),
                            onClose: i
                        }), s.render)), a++;
                        break;
                    case "checkbox":
                        var A = T(o).concat([s.key]);
                        c.push(r.createElement(m.CheckboxItem, O(h({
                            key: s.key
                        }, s.props), {
                            isFocused: n.isFocused(A),
                            menuItemProps: n.getItemProps({
                                path: A,
                                role: "menuitemcheckbox"
                            })
                        }))), a++;
                        break;
                    case "radio":
                        var b = T(o).concat([s.key]);
                        c.push(r.createElement(m.RadioItem, O(h({
                            key: s.key
                        }, s.props), {
                            isFocused: n.isFocused(b),
                            menuItemProps: n.getItemProps({
                                path: b,
                                role: "menuitemradio"
                            })
                        }))), a++;
                        break;
                    case "control":
                        var N = T(o).concat([s.key]);
                        c.push(r.createElement(m.ControlItem, O(h({
                            key: s.key
                        }, s.props), {
                            isFocused: n.isFocused(N),
                            menuItemProps: n.getItemProps({
                                path: N
                            }),
                            onClose: i
                        }))), a++;
                        break;
                    case "compositecontrol":
                        var R = T(o).concat([s.key]);
                        c.push(r.createElement(m.CompositeControlItem, O(h({
                            key: s.key
                        }, s.props), {
                            isFocused: n.isFocused(R),
                            menuItemProps: n.getItemProps({
                                path: R
                            }),
                            onClose: i
                        }), s.children)), a++
                }
                return t
            }, [])
        }(A, P, [], v))))
    }

    function A() {
        return r.createElement("div", {
            className: i()(y.menu, y.loader, y.flexible)
        }, r.createElement(f.Spinner, null))
    }

    function b() {
        var e, t, n = "♫ (つ｡◕‿‿◕｡)つ ♪";
        var o = (e = r.useState(n), t = 2, function(e) {
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
            }(e, t) || v(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            i = o[0],
            a = o[1];
        return r.useEffect(function() {
            if (!_.default.useReducedMotion) {
                var e = setInterval(function() {
                    a(function(e) {
                        return e === n ? "♫ ⊂(｡◕‿‿◕｡⊂) ♪" : n
                    })
                }, 700);
                return function() {
                    return clearInterval(e)
                }
            }
        }, []), r.createElement("div", {
            style: {
                width: "100%",
                textAlign: "center"
            }
        }, i)
    }
}