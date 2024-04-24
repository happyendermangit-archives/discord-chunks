function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Combobox: function() {
            return O
        },
        ComboboxItem: function() {
            return C
        },
        useMultiSelect: function() {
            return A
        },
        useSingleSelect: function() {
            return m
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("924826"),
        l = n("178940"),
        u = n("1561"),
        d = n("260034"),
        _ = n("742746"),
        c = n("993365"),
        E = n("6048"),
        I = n("441674"),
        T = n("689938"),
        f = n("309399");
    let S = "data-listbox-item-id",
        h = Object.freeze({
            STANDARD: f.selected,
            BRAND: f.selectedBrand
        });

    function A(e) {
        let [t, n] = r.useState(() => new Set(e));
        return [t, r.useCallback(e => {
            n(t => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n
            })
        }, [])]
    }

    function m(e) {
        let [t, n] = r.useState(() => new Set(null != e ? [e] : void 0));
        return [t, r.useCallback(e => {
            n(new Set([e]))
        }, [])]
    }

    function N(e) {
        return String(e)
    }
    let p = r.createContext({
        activeDescendant: null,
        selected: new Set,
        setSelected: () => null,
        itemToString: N
    });

    function O(e) {
        let {
            placeholder: t,
            children: n,
            value: s,
            onChange: l,
            className: u,
            listClassName: I,
            "aria-label": h,
            multiSelect: A = !1,
            autoFocus: m = !1,
            maxVisibleItems: O = 5,
            itemToString: R = N,
            showScrollbar: C = !1
        } = e, [g, L] = r.useState(""), [D] = r.useState(!0), [v, M] = r.useState(null), y = r.useId(), P = r.useRef(null);
        r.useLayoutEffect(() => {
            let e = document.querySelector("[".concat(S, '="').concat(v, '"]')),
                t = P.current;
            null != t && null != e && t.scrollIntoViewNode({
                node: e,
                padding: 12
            })
        }, [v]);
        let U = n(g),
            b = 0 === U.length,
            G = r.useId(),
            w = r.useCallback(() => new Promise(e => {
                let t = P.current;
                if (null == t) return e();
                t.scrollToTop({
                    callback: () => requestAnimationFrame(() => e())
                })
            }), []),
            B = r.useCallback(() => new Promise(e => {
                let t = P.current;
                if (null == t) return e();
                t.scrollToTop({
                    callback: () => requestAnimationFrame(() => e())
                })
            }), []),
            k = r.useCallback((e, t) => {
                M(t);
                let n = document.querySelector(e),
                    i = P.current;
                null != i && null != n && i.scrollIntoViewNode({
                    node: n
                })
            }, []),
            V = (0, o.default)({
                id: G,
                isEnabled: !0,
                useVirtualFocus: !0,
                scrollToStart: w,
                scrollToEnd: B,
                setFocus: k
            }),
            x = C ? _.ListThin : _.ListNone;
        return (0, i.jsx)(o.ListNavigatorProvider, {
            navigator: V,
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
                        "aria-label": h,
                        "aria-expanded": D,
                        "aria-controls": D ? y : void 0,
                        "aria-owns": y,
                        "aria-haspopup": "listbox",
                        className: a()(f.combobox, u),
                        children: [(0, i.jsx)(E.default, {
                            autoFocus: m,
                            size: E.default.Sizes.MEDIUM,
                            placeholder: t,
                            query: g,
                            onChange: L,
                            onKeyDown: r,
                            onBlur: () => M(null),
                            onClear: () => L(""),
                            className: a()({
                                [f.searchWithScrollbar]: C
                            }),
                            inputProps: {
                                "aria-multiline": !1,
                                "aria-activedescendant": null != v ? v : void 0
                            }
                        }), (0, i.jsx)("div", {
                            children: D && (b ? (0, i.jsxs)("div", {
                                className: f.empty,
                                children: [(0, i.jsx)(d.Heading, {
                                    variant: "heading-md/semibold",
                                    children: T.default.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
                                }), (0, i.jsx)(c.Text, {
                                    color: "text-muted",
                                    variant: "text-md/normal",
                                    children: T.default.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
                                })]
                            }) : (0, i.jsx)(p.Provider, {
                                value: {
                                    activeDescendant: v,
                                    selected: s,
                                    setSelected: l,
                                    itemToString: R
                                },
                                children: (0, i.jsx)(x, {
                                    ...o,
                                    style: {
                                        maxHeight: 46 * O
                                    },
                                    "aria-multiselectable": A,
                                    id: y,
                                    ref: P,
                                    className: a()(f.list, I, {
                                        [f.scroller]: C
                                    }),
                                    sections: [U.length],
                                    sectionHeight: 0,
                                    rowHeight: 40,
                                    renderRow: e => {
                                        let {
                                            row: t
                                        } = e;
                                        return U[t]
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
    let R = r.createContext(null);

    function C(e) {
        var t;
        let {
            value: n,
            children: s,
            disabled: l = !1,
            selectedColor: d = h.STANDARD,
            ..._
        } = e, {
            activeDescendant: c,
            selected: E,
            setSelected: I,
            itemToString: T
        } = r.useContext(p), A = T(n), m = c === A, N = null !== (t = null == _ ? void 0 : _.selected) && void 0 !== t ? t : E.has(n), O = (0, o.useListItem)(A);
        return (0, i.jsx)(u.Clickable, {
            tag: "li",
            id: A,
            onClick: () => l ? null : I(n),
            [S]: n,
            className: a()(f.item, {
                [f.focused]: m,
                [d]: N,
                [f.disabled]: l
            }),
            ...O,
            role: "option",
            "aria-selected": N,
            "aria-disabled": l,
            children: (0, i.jsx)(R.Provider, {
                value: n,
                children: s
            })
        })
    }
    C.Colors = h, C.Label = function(e) {
        let {
            children: t
        } = e;
        return (0, i.jsx)("span", {
            className: f.itemLabel,
            children: t
        })
    }, C.Icon = function(e) {
        let {
            children: t
        } = e;
        return (0, i.jsx)("span", {
            className: f.itemCheckbox,
            children: t
        })
    }, C.Checkbox = function(e) {
        let {
            checked: t
        } = e, {
            selected: n
        } = r.useContext(p), s = r.useContext(R);
        return (0, i.jsx)("span", {
            className: f.itemCheckbox,
            children: (0, i.jsx)(l.Checkbox, {
                displayOnly: !0,
                value: null != t ? t : null != s && n.has(s),
                type: l.Checkbox.Types.INVERTED,
                size: 20
            })
        })
    }, C.Checkmark = function() {
        let {
            selected: e
        } = r.useContext(p), t = r.useContext(R);
        return e.has(t) ? (0, i.jsx)("span", {
            className: f.itemCheckbox,
            children: (0, i.jsx)(I.default, {
                width: 20,
                height: 20
            })
        }) : null
    }
}