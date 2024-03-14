function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSingleSelectState: function() {
            return C
        },
        useMultiSelectState: function() {
            return A
        },
        useVariableSelect: function() {
            return y
        },
        multiSelect: function() {
            return N
        },
        toggleSelect: function() {
            return R
        },
        singleSelect: function() {
            return O
        },
        Select: function() {
            return L
        },
        SingleSelect: function() {
            return b
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("974667"),
        l = n("227645"),
        u = n("311720"),
        d = n("442761"),
        c = n("446662"),
        f = n("77078"),
        _ = n("731898"),
        h = n("811425"),
        E = n("31695"),
        g = n("837899"),
        m = n("425190"),
        p = n("578706"),
        S = n("945330"),
        v = n("178814"),
        T = n("782340"),
        I = n("800836");

    function C(e) {
        let {
            value: t,
            onChange: n,
            serialize: i = e => String(e)
        } = e;
        return {
            select: e => n(e),
            isSelected: e => e === t,
            clear: () => n(null),
            serialize: i
        }
    }

    function A(e) {
        let {
            value: t,
            onChange: n,
            serialize: i = e => String(e)
        } = e;
        return {
            select: e => {
                let i = new Set(t);
                i.has(e) ? i.delete(e) : i.add(e), n(i)
            },
            isSelected: e => {
                var n;
                return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
            },
            clear: () => n(new Set),
            serialize: i
        }
    }

    function y(e) {
        let {
            value: t,
            onChange: n,
            onSelectInteraction: i,
            serialize: s = e => String(e)
        } = e;
        return {
            select: e => {
                let {
                    newValues: s,
                    updated: r
                } = i(e, t);
                r && n(s)
            },
            isSelected: e => {
                var n;
                return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
            },
            clear: () => n(new Set),
            serialize: s
        }
    }

    function N(e, t) {
        let n = new Set(t);
        return n.has(e) ? n.delete(e) : n.add(e), {
            newValues: n,
            updated: !0
        }
    }

    function R(e, t) {
        return t.has(e) ? {
            newValues: new Set,
            updated: !0
        } : {
            newValues: new Set([e]),
            updated: !0
        }
    }

    function O(e, t) {
        return t.has(e) ? {
            newValues: t,
            updated: !1
        } : {
            newValues: new Set([e]),
            updated: !0
        }
    }

    function D(e) {
        return null == e ? void 0 : e.label
    }

    function P(e) {
        return e.map(e => D(e)).join(", ")
    }

    function L(e) {
        let {
            options: t,
            placeholder: n = T.default.Messages.SELECT,
            className: r,
            isDisabled: o = !1,
            maxVisibleItems: u = 7,
            autoFocus: c = !1,
            popoutWidth: E,
            clearable: p = !1,
            look: C = v.SelectLooks.FILLED,
            onClose: A,
            onOpen: y,
            renderOptionLabel: N = D,
            renderOptionValue: R = P,
            popoutClassName: O,
            popoutPosition: L = "bottom",
            popoutLayerContext: b,
            optionClassName: U,
            closeOnSelect: w,
            select: k,
            isSelected: V,
            serialize: G,
            clear: F,
            hideIcon: x = !1,
            "aria-label": B,
            "aria-labelledby": H
        } = e, [Y, j] = s.useState(!1), {
            ref: W,
            width: K,
            height: z
        } = (0, _.default)(), q = s.useCallback(e => {
            Y !== e && !o && (j(e), e ? null == y || y() : null == A || A())
        }, [o, A, y, Y]), X = s.useCallback(e => {
            Y && !e && q(!1)
        }, [q, Y]), Q = (0, h.useIsVisible)(X), Z = s.useCallback(e => {
            if (k(e), w) {
                var t;
                null === (t = W.current) || void 0 === t || t.focus()
            }
        }, [k, w]), J = s.useCallback(e => {
            e.stopPropagation(), null == F || F()
        }, [F]), $ = t.filter(e => V(e.value));
        s.useLayoutEffect(() => {
            if (c) {
                var e;
                null === (e = W.current) || void 0 === e || e.focus()
            }
        }, [c]);
        let ee = (0, f.useRedesignIconContext)().enabled;
        return (0, i.jsx)(d.Popout, {
            spacing: 0,
            animation: d.Popout.Animation.NONE,
            shouldShow: Y,
            onRequestOpen: () => {
                q(!0)
            },
            onRequestClose: () => {
                q(!1)
            },
            renderPopout: e => {
                let {
                    closePopout: n,
                    position: s,
                    updatePosition: r
                } = e;
                return (0, i.jsx)(M, {
                    className: O,
                    closeOnSelect: w,
                    maxVisibleItems: u,
                    width: null != E ? E : K,
                    isSelected: V,
                    closePopout: n,
                    buttonHeight: null != z ? z : 0,
                    onSelect: Z,
                    options: t,
                    serialize: G,
                    renderOptionLabel: N,
                    optionClassName: U,
                    updatePosition: r,
                    popoutPosition: s
                })
            },
            position: L,
            layerContext: b,
            children: (e, t) => {
                let {
                    onClick: s,
                    onKeyDown: u,
                    ...d
                } = e, {
                    isShown: c,
                    position: f
                } = t, _ = c ? m.default : g.default, h = ee ? 18 : 24;
                return (0, i.jsxs)(l.Clickable, {
                    role: "button",
                    "aria-disabled": o,
                    innerRef: e => {
                        W.current = e, Q.current = e
                    },
                    onClick: o ? void 0 : e => {
                        s(e), q(!Y)
                    },
                    onKeyDown: e => {
                        "ArrowDown" === e.key ? q(!0) : "Escape" === e.key && (e.stopPropagation(), q(!1)), u(e)
                    },
                    ...d,
                    className: a(I.select, r, {
                        [I.open]: c,
                        [I.disabled]: o,
                        [I.selectPositionTop]: "top" === f,
                        [I.lookFilled]: C === v.SelectLooks.FILLED
                    }),
                    "aria-haspopup": "listbox",
                    "aria-expanded": c,
                    "aria-label": B,
                    "aria-labelledby": H,
                    children: [$.length > 0 ? (0, i.jsx)("span", {
                        className: I.value,
                        children: R($)
                    }) : (0, i.jsx)("span", {
                        className: I.placeholder,
                        children: n
                    }), (0, i.jsxs)("div", {
                        className: I.icons,
                        children: [p ? (0, i.jsx)(l.Clickable, {
                            role: "button",
                            "aria-disabled": o,
                            onClick: J,
                            "aria-label": T.default.Messages.CLEAR,
                            children: (0, i.jsx)(S.default, {
                                width: 16,
                                height: 16,
                                className: I.clear
                            })
                        }) : null, x ? null : (0, i.jsx)(_, {
                            width: h,
                            height: h
                        })]
                    })]
                })
            }
        })
    }

    function M(e) {
        let {
            className: t,
            onSelect: n,
            closePopout: r,
            closeOnSelect: l = !0,
            isSelected: d,
            options: f,
            width: _,
            maxVisibleItems: h,
            renderOptionLabel: g,
            serialize: m,
            optionClassName: p,
            buttonHeight: S,
            updatePosition: v,
            popoutPosition: T
        } = e, [C, A] = s.useState(0), y = s.useRef(null), N = s.useId(), R = (0, o.default)({
            id: N,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !0,
            wrap: !0
        }), O = s.useRef(null);
        (0, u.useFocusLock)(O), s.useLayoutEffect(() => {
            var e;
            null === (e = O.current) || void 0 === e || e.focus()
        }, []), s.useEffect(() => {
            S > 0 && v()
        }, [S, v]), (0, E.default)(v), s.useLayoutEffect(() => {
            var e, t;
            let n = null === (t = y.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.height;
            null != n && A(n)
        }, [h]), s.useEffect(() => {
            v()
        }, [v, C]);
        let D = s.useCallback(e => {
                n(e), l && r()
            }, [r, n, l]),
            P = f.map((e, t) => {
                var n;
                return (0, i.jsx)(Option, {
                    isSelected: d(e.value),
                    value: e.value,
                    label: g(e),
                    onSelect: D,
                    className: p,
                    isDisabled: e.disabled,
                    serialize: m
                }, null !== (n = e.key) && void 0 !== n ? n : t)
            }),
            L = f.length <= h ? c.AdvancedScrollerNone : c.AdvancedScrollerThin;
        return (0, i.jsx)(o.ListNavigatorProvider, {
            navigator: R,
            children: (0, i.jsx)(o.ListNavigatorContainer, {
                children: e => {
                    let {
                        ref: n,
                        ...s
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(L, {
                            className: a(I.popout, t, {
                                [I.popoutPositionTop]: "top" === T
                            }),
                            style: {
                                width: _,
                                maxHeight: C
                            },
                            ref: e => {
                                var t;
                                let i = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
                                n.current = i, O.current = i
                            },
                            ...s,
                            role: "listbox",
                            children: P
                        }), (0, i.jsx)("div", {
                            "aria-hidden": !0,
                            ref: y,
                            className: I.measurement,
                            children: P.slice(0, h)
                        })]
                    })
                }
            })
        })
    }

    function Option(e) {
        let {
            className: t,
            value: n,
            label: s,
            onSelect: r,
            isSelected: u,
            isDisabled: d,
            serialize: c
        } = e, f = (0, o.useListItem)(c(n));
        return (0, i.jsxs)(l.Clickable, {
            focusProps: {
                enabled: !1
            },
            className: a(I.option, t),
            onClick: () => !d && r(n),
            ...f,
            "aria-selected": u,
            "aria-disabled": d,
            role: "option",
            children: [s, u && (0, i.jsx)(p.default, {
                backgroundColor: "white",
                className: I.selectedIcon,
                width: 20,
                height: 20
            })]
        })
    }

    function b(e) {
        let {
            value: t,
            onChange: n,
            ...s
        } = e, r = C({
            value: t,
            onChange: n
        });
        return (0, i.jsx)(L, {
            ...s,
            ...r
        })
    }
}