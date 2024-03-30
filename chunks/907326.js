function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Combobox: function() {
            return R
        },
        ComboboxItem: function() {
            return P
        },
        useMultiSelect: function() {
            return g
        },
        useSingleSelect: function() {
            return A
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("762624"),
        u = n("48111"),
        s = n("324377"),
        l = n("556026"),
        c = n("839881"),
        f = n("135983"),
        d = n("567687"),
        _ = n("943273"),
        E = n("941504"),
        p = n("309399");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                y(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t) {
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

    function O(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }

    function T(e, t) {
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
                if ("string" == typeof e) return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var S = "data-listbox-item-id",
        v = Object.freeze({
            STANDARD: p.selected,
            BRAND: p.selectedBrand
        });

    function g(e) {
        var t = T(r.useState(function() {
                return new Set(e)
            }), 2),
            n = t[0],
            o = t[1];
        return [n, r.useCallback(function(e) {
            o(function(t) {
                var n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n
            })
        }, [])]
    }

    function A(e) {
        var t = T(r.useState(function() {
                return new Set(null != e ? [e] : void 0)
            }), 2),
            n = t[0],
            o = t[1];
        return [n, r.useCallback(function(e) {
            o(new Set([e]))
        }, [])]
    }

    function b(e) {
        return String(e)
    }
    var N = r.createContext({
        activeDescendant: null,
        selected: new Set,
        setSelected: function() {
            return null
        },
        itemToString: b
    });

    function R(e) {
        var t = e.placeholder,
            n = e.children,
            o = e.value,
            u = e.onChange,
            s = e.className,
            _ = e.listClassName,
            m = e["aria-label"],
            v = e.multiSelect,
            g = void 0 !== v && v,
            A = e.autoFocus,
            R = void 0 !== A && A,
            C = e.maxVisibleItems,
            P = void 0 === C ? 5 : C,
            D = e.itemToString,
            L = void 0 === D ? b : D,
            M = e.showScrollbar,
            U = void 0 !== M && M,
            w = T(r.useState(""), 2),
            k = w[0],
            G = w[1],
            B = T(r.useState(!0), 1)[0],
            j = T(r.useState(null), 2),
            F = j[0],
            V = j[1],
            H = r.useId(),
            x = r.useRef(null);
        r.useLayoutEffect(function() {
            var e = document.querySelector("[".concat(S, '="').concat(F, '"]')),
                t = x.current;
            null != t && null != e && t.scrollIntoViewNode({
                node: e,
                padding: 12
            })
        }, [F]);
        var Y = n(k),
            W = 0 === Y.length,
            K = r.useId(),
            z = r.useCallback(function() {
                return new Promise(function(e) {
                    var t = x.current;
                    if (null == t) return e();
                    t.scrollToTop({
                        callback: function() {
                            return requestAnimationFrame(function() {
                                return e()
                            })
                        }
                    })
                })
            }, []),
            X = r.useCallback(function() {
                return new Promise(function(e) {
                    var t = x.current;
                    if (null == t) return e();
                    t.scrollToTop({
                        callback: function() {
                            return requestAnimationFrame(function() {
                                return e()
                            })
                        }
                    })
                })
            }, []),
            q = r.useCallback(function(e, t) {
                V(t);
                var n = document.querySelector(e),
                    r = x.current;
                null != r && null != n && r.scrollIntoViewNode({
                    node: n
                })
            }, []),
            Q = (0, a.default)({
                id: K,
                isEnabled: !0,
                useVirtualFocus: !0,
                scrollToStart: z,
                scrollToEnd: X,
                setFocus: q
            }),
            J = U ? c.ListThin : c.ListNone;
        return r.createElement(a.ListNavigatorProvider, {
            navigator: Q
        }, r.createElement(a.ListNavigatorContainer, null, function(e) {
            var n = e.ref,
                a = e.onKeyDown,
                c = O(e, ["ref", "onKeyDown"]);
            return r.createElement("div", {
                ref: n,
                role: "combobox",
                "aria-label": m,
                "aria-expanded": B,
                "aria-controls": B ? H : void 0,
                "aria-owns": H,
                "aria-haspopup": "listbox",
                className: i()(p.combobox, s)
            }, r.createElement(d.default, {
                autoFocus: R,
                size: d.default.Sizes.MEDIUM,
                placeholder: t,
                query: k,
                onChange: G,
                onKeyDown: a,
                onBlur: function() {
                    return V(null)
                },
                onClear: function() {
                    return G("")
                },
                className: i()(y({}, p.searchWithScrollbar, U)),
                inputProps: {
                    "aria-multiline": !1,
                    "aria-activedescendant": null != F ? F : void 0
                }
            }), r.createElement("div", null, B && (W ? r.createElement("div", {
                className: p.empty
            }, r.createElement(l.Heading, {
                variant: "heading-md/semibold"
            }, E.default.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER), r.createElement(f.Text, {
                color: "text-muted",
                variant: "text-md/normal"
            }, E.default.Messages.AUTOCOMPLETE_NO_RESULTS_BODY)) : r.createElement(N.Provider, {
                value: {
                    activeDescendant: F,
                    selected: o,
                    setSelected: u,
                    itemToString: L
                }
            }, r.createElement(J, h(I({}, c), {
                style: {
                    maxHeight: 46 * P
                },
                "aria-multiselectable": g,
                id: H,
                ref: x,
                className: i()(p.list, _, y({}, p.scroller, U)),
                sections: [Y.length],
                sectionHeight: 0,
                rowHeight: 40,
                renderRow: function(e) {
                    return Y[e.row]
                },
                renderSection: function() {
                    return null
                }
            }))))))
        }))
    }
    var C = r.createContext(null);

    function P(e) {
        var t, n, o, u = e.value,
            l = e.children,
            c = e.disabled,
            f = void 0 !== c && c,
            d = e.selectedColor,
            _ = void 0 === d ? v.STANDARD : d,
            E = O(e, ["value", "children", "disabled", "selectedColor"]),
            m = r.useContext(N),
            T = m.activeDescendant,
            g = m.selected,
            A = m.setSelected,
            b = (0, m.itemToString)(u),
            R = T === b,
            P = null !== (t = null == E ? void 0 : E.selected) && void 0 !== t ? t : g.has(u),
            D = (0, a.useListItem)(b);
        return r.createElement(s.Clickable, h(I((y(o = {
            tag: "li",
            id: b,
            onClick: function() {
                return f ? null : A(u)
            }
        }, S, u), y(o, "className", i()(p.item, (y(n = {}, p.focused, R), y(n, _, P), y(n, p.disabled, f), n))), o), D), {
            role: "option",
            "aria-selected": P,
            "aria-disabled": f
        }), r.createElement(C.Provider, {
            value: u
        }, l))
    }
    P.Colors = v, P.Label = function(e) {
        var t = e.children;
        return r.createElement("span", {
            className: p.itemLabel
        }, t)
    }, P.Icon = function(e) {
        var t = e.children;
        return r.createElement("span", {
            className: p.itemCheckbox
        }, t)
    }, P.Checkbox = function(e) {
        var t = e.checked,
            n = r.useContext(N).selected,
            o = r.useContext(C);
        return r.createElement("span", {
            className: p.itemCheckbox
        }, r.createElement(u.Checkbox, {
            displayOnly: !0,
            value: null != t ? t : null != o && n.has(o),
            type: u.Checkbox.Types.INVERTED,
            size: 20
        }))
    }, P.Checkmark = function() {
        var e = r.useContext(N).selected,
            t = r.useContext(C);
        return e.has(t) ? r.createElement("span", {
            className: p.itemCheckbox
        }, r.createElement(_.default, {
            width: 20,
            height: 20
        })) : null
    }
}