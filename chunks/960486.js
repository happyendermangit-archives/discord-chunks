function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMultiSelect: function() {
            return T
        },
        useSingleSelect: function() {
            return g
        },
        Combobox: function() {
            return v
        },
        ComboboxItem: function() {
            return R
        }
    }), n("222007");
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("974667"),
        l = n("685698"),
        u = n("227645"),
        c = n("605451"),
        d = n("433600"),
        f = n("577776"),
        E = n("810567"),
        p = n("578706"),
        h = n("782340"),
        _ = n("30441");
    let S = "data-listbox-item-id",
        m = Object.freeze({
            STANDARD: _.selected,
            BRAND: _.selectedBrand
        });

    function T(e) {
        let [t, n] = r.useState(() => new Set(e)), i = r.useCallback(e => {
            n(t => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n
            })
        }, []);
        return [t, i]
    }

    function g(e) {
        let [t, n] = r.useState(() => new Set(null != e ? [e] : void 0)), i = r.useCallback(e => {
            n(new Set([e]))
        }, []);
        return [t, i]
    }

    function I(e) {
        return String(e)
    }
    let C = r.createContext({
        activeDescendant: null,
        selected: new Set,
        setSelected: () => null,
        itemToString: I
    });

    function v(e) {
        let {
            placeholder: t,
            children: n,
            value: s,
            onChange: l,
            className: u,
            listClassName: p,
            "aria-label": m,
            multiSelect: T = !1,
            autoFocus: g = !1,
            maxVisibleItems: v = 5,
            itemToString: A = I,
            showScrollbar: R = !1
        } = e, [N, O] = r.useState(""), [D] = r.useState(!0), [y, P] = r.useState(null), L = r.useId(), b = r.useRef(null);
        r.useLayoutEffect(() => {
            let e = document.querySelector("[".concat(S, '="').concat(y, '"]')),
                t = b.current;
            null != t && null != e && t.scrollIntoViewNode({
                node: e,
                padding: 12
            })
        }, [y]);
        let M = n(N),
            U = 0 === M.length,
            G = r.useId(),
            w = r.useCallback(() => new Promise(e => {
                let t = b.current;
                if (null == t) return e();
                t.scrollToTop({
                    callback: () => requestAnimationFrame(() => e())
                })
            }), []),
            k = r.useCallback(() => new Promise(e => {
                let t = b.current;
                if (null == t) return e();
                t.scrollToTop({
                    callback: () => requestAnimationFrame(() => e())
                })
            }), []),
            x = r.useCallback((e, t) => {
                P(t);
                let n = document.querySelector(e),
                    i = b.current;
                null != i && null != n && i.scrollIntoViewNode({
                    node: n
                })
            }, []),
            F = (0, o.default)({
                id: G,
                isEnabled: !0,
                useVirtualFocus: !0,
                scrollToStart: w,
                scrollToEnd: k,
                setFocus: x
            }),
            V = R ? d.ListThin : d.ListNone;
        return (0, i.jsx)(o.ListNavigatorProvider, {
            navigator: F,
            children: (0, i.jsx)(o.ListNavigatorContainer, {
                children: e => {
                    let {
                        ref: n,
                        onKeyDown: r,
                        ...o
                    } = e;
                    return (0, i.jsxs)("div", {
                        ref: n,
                        role: "combobox",
                        "aria-label": m,
                        "aria-expanded": D,
                        "aria-controls": D ? L : void 0,
                        "aria-owns": L,
                        "aria-haspopup": "listbox",
                        className: a(_.combobox, u),
                        children: [(0, i.jsx)(E.default, {
                            autoFocus: g,
                            size: E.default.Sizes.MEDIUM,
                            placeholder: t,
                            query: N,
                            onChange: O,
                            onKeyDown: r,
                            onBlur: () => P(null),
                            onClear: () => O(""),
                            className: a({
                                [_.searchWithScrollbar]: R
                            }),
                            inputProps: {
                                "aria-multiline": !1,
                                "aria-activedescendant": null != y ? y : void 0
                            }
                        }), (0, i.jsx)("div", {
                            children: D && (U ? (0, i.jsxs)("div", {
                                className: _.empty,
                                children: [(0, i.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    children: h.default.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
                                }), (0, i.jsx)(f.Text, {
                                    color: "text-muted",
                                    variant: "text-md/normal",
                                    children: h.default.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
                                })]
                            }) : (0, i.jsx)(C.Provider, {
                                value: {
                                    activeDescendant: y,
                                    selected: s,
                                    setSelected: l,
                                    itemToString: A
                                },
                                children: (0, i.jsx)(V, {
                                    ...o,
                                    style: {
                                        maxHeight: 46 * v
                                    },
                                    "aria-multiselectable": T,
                                    id: L,
                                    ref: b,
                                    className: a(_.list, p, {
                                        [_.scroller]: R
                                    }),
                                    sections: [M.length],
                                    sectionHeight: 0,
                                    rowHeight: 40,
                                    renderRow: e => {
                                        let {
                                            row: t
                                        } = e;
                                        return M[t]
                                    },
                                    renderSection: () => null
                                })
                            }))
                        })]
                    })
                }
            })
        })
    }
    let A = r.createContext(null);

    function R(e) {
        var t;
        let {
            value: n,
            children: s,
            disabled: l = !1,
            selectedColor: c = m.STANDARD,
            ...d
        } = e, {
            activeDescendant: f,
            selected: E,
            setSelected: p,
            itemToString: h
        } = r.useContext(C), T = h(n), g = f === T, I = null !== (t = null == d ? void 0 : d.selected) && void 0 !== t ? t : E.has(n), v = (0, o.useListItem)(T);
        return (0, i.jsx)(u.Clickable, {
            tag: "li",
            id: T,
            onClick: () => l ? null : p(n),
            [S]: n,
            className: a(_.item, {
                [_.focused]: g,
                [c]: I,
                [_.disabled]: l
            }),
            ...v,
            role: "option",
            "aria-selected": I,
            "aria-disabled": l,
            children: (0, i.jsx)(A.Provider, {
                value: n,
                children: s
            })
        })
    }
    R.Colors = m, R.Label = function(e) {
        let {
            children: t
        } = e;
        return (0, i.jsx)("span", {
            className: _.itemLabel,
            children: t
        })
    }, R.Icon = function(e) {
        let {
            children: t
        } = e;
        return (0, i.jsx)("span", {
            className: _.itemCheckbox,
            children: t
        })
    }, R.Checkbox = function(e) {
        let {
            checked: t
        } = e, {
            selected: n
        } = r.useContext(C), s = r.useContext(A);
        return (0, i.jsx)("span", {
            className: _.itemCheckbox,
            children: (0, i.jsx)(l.Checkbox, {
                displayOnly: !0,
                value: null != t ? t : null != s && n.has(s),
                type: l.Checkbox.Types.INVERTED,
                size: 20
            })
        })
    }, R.Checkmark = function() {
        let {
            selected: e
        } = r.useContext(C), t = r.useContext(A), n = e.has(t);
        return n ? (0, i.jsx)("span", {
            className: _.itemCheckbox,
            children: (0, i.jsx)(p.default, {
                width: 20,
                height: 20
            })
        }) : null
    }
}