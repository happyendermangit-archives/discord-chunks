function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ListContainerContext: function() {
            return f
        },
        ListNavigatorContainer: function() {
            return y
        },
        ListNavigatorItem: function() {
            return E
        },
        ListNavigatorProvider: function() {
            return I
        },
        getContainerPropsFromNavigator: function() {
            return m
        },
        useListContainerProps: function() {
            return p
        },
        useListItem: function() {
            return d
        },
        useTreeItem: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("556387"),
        i = n("639340"),
        a = n("447261");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var l = {
            id: "NO_LIST",
            onKeyDown: function() {},
            orientation: i.Orientations.VERTICAL,
            ref: r.createRef(),
            tabIndex: -1
        },
        c = r.createContext({
            id: "NO_LIST",
            setFocus: function() {}
        }),
        f = r.createContext(l);

    function d(e) {
        var t, n, i, l = (t = r.useState(-1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            f = l[0],
            d = l[1],
            _ = r.useContext(c),
            E = _.id,
            p = _.setFocus,
            m = r.useCallback(function() {
                return p(e)
            }, [e, p]);
        return r.useLayoutEffect(function() {
            return (0, o.addFocusSubscriber)(E, function(t, n) {
                d(n && t === e ? 0 : -1)
            })
        }, [e, E]), s(i = {
            role: "listitem"
        }, a.LIST_ITEM_ID_ATTRIBUTE, (0, a.createListItemId)(E, e)), s(i, "tabIndex", f), s(i, "onFocus", m), i
    }

    function _(e) {
        var t, n;
        return t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    s(e, t, n[t])
                })
            }
            return e
        }({}, d(e)), n = (n = {
            role: "treeitem"
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t
    }

    function E(e) {
        return (0, e.children)(d(e.id))
    }

    function p() {
        var e, t = r.useContext(f),
            n = t.id,
            o = t.onKeyDown,
            i = t.ref;
        return s(e = {
            role: "list",
            tabIndex: t.tabIndex
        }, a.LIST_ID_ATTRIBUTE, n), s(e, "onKeyDown", o), s(e, "ref", i), e
    }

    function m(e) {
        var t, n = e.id,
            r = e.containerProps,
            o = r.onKeyDown,
            i = r.ref,
            u = r.tabIndex;
        return e.orientation, s(t = {
            role: "list",
            onKeyDown: o,
            ref: i
        }, a.LIST_ID_ATTRIBUTE, n), s(t, "tabIndex", u), t
    }

    function y(e) {
        return (0, e.children)(p())
    }

    function I(e) {
        var t = e.children,
            n = e.navigator,
            o = n.id,
            i = n.setFocus,
            a = n.containerProps,
            u = a.onKeyDown,
            s = a.ref,
            l = a.tabIndex,
            d = n.orientation,
            _ = r.useMemo(function() {
                return {
                    id: o,
                    setFocus: i
                }
            }, [o, i]),
            E = r.useMemo(function() {
                return {
                    onKeyDown: u,
                    orientation: d,
                    ref: s,
                    id: o,
                    tabIndex: l
                }
            }, [u, d, s, o, l]);
        return r.createElement(f.Provider, {
            value: E
        }, r.createElement(c.Provider, {
            value: _
        }, t), " ")
    }
}