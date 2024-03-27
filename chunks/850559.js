function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useComboBoxState: function() {
            return u
        }
    });
    var r = n("275857"),
        i = n("913122"),
        a = n("470079"),
        o = n("697898"),
        s = n("345926");

    function u(e) {
        var t, n, u, c, l, d, f, p;
        let {
            defaultFilter: h,
            menuTrigger: m = "input",
            allowsEmptyCollection: g = !1,
            allowsCustomValue: _,
            shouldCloseOnBlur: b = !0
        } = e, [v, y] = (0, a.useState)(!1), [E, S] = (0, a.useState)(!1), {
            collection: x,
            selectionManager: w,
            selectedKey: T,
            setSelectedKey: C,
            selectedItem: D,
            disabledKeys: O
        } = (0, i.useSingleSelectListState)({
            ...e,
            onSelectionChange: t => {
                e.onSelectionChange && e.onSelectionChange(t), t === T && (Y(), B())
            },
            items: null !== (u = e.items) && void 0 !== u ? u : e.defaultItems
        }), [M, A] = (0, o.useControlledState)(e.inputValue, null !== (l = null !== (c = e.defaultInputValue) && void 0 !== c ? c : null === (t = x.getItem(T)) || void 0 === t ? void 0 : t.textValue) && void 0 !== l ? l : "", e.onInputChange), k = (0, a.useMemo)(() => null == e.items && h ? function(e, t, n) {
            return new i.ListCollection(function e(t, n, i, a) {
                let o = [];
                for (let s of n)
                    if ("section" === s.type && s.hasChildNodes) {
                        let n = e(t, (0, r.getChildNodes)(s, t), i, a);
                        [...n].some(e => "item" === e.type) && o.push({
                            ...s,
                            childNodes: n
                        })
                    } else "item" === s.type && a(s.textValue, i) ? o.push({
                        ...s
                    }) : "item" !== s.type && o.push({
                        ...s
                    });
                return o
            }(e, e, t, n))
        }(x, M, h) : x, [x, M, h, e.items]), [R, N] = (0, a.useState)(k), I = (0, a.useRef)("focus"), L = (0, s.useMenuTriggerState)({
            ...e,
            onOpenChange: t => {
                e.onOpenChange && e.onOpenChange(t, t ? I.current : void 0), w.setFocused(t), !t && w.setFocusedKey(null)
            },
            isOpen: void 0,
            defaultOpen: void 0
        }), P = (t, n) => {
            let r = "manual" === n || "focus" === n && "focus" === m;
            (g || k.size > 0 || r && x.size > 0 || e.items) && (r && !L.isOpen && void 0 === e.items && y(!0), I.current = n, L.open(t))
        }, F = (0, a.useCallback)(e => {
            L.isOpen && N(k), L.toggle(e)
        }, [L, k]), B = (0, a.useCallback)(() => {
            L.isOpen && (N(k), L.close())
        }, [L, k]), U = (0, a.useRef)(M), Y = () => {
            var e, t;
            let n = null !== (t = null === (e = x.getItem(T)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "";
            U.current = n, A(n)
        }, j = (0, a.useRef)(null !== (f = null !== (d = e.selectedKey) && void 0 !== d ? d : e.defaultSelectedKey) && void 0 !== f ? f : null), z = (0, a.useRef)(null !== (p = null === (n = x.getItem(T)) || void 0 === n ? void 0 : n.textValue) && void 0 !== p ? p : "");
        (0, a.useEffect)(() => {
            var t, n;
            E && (k.size > 0 || g) && !L.isOpen && M !== U.current && "manual" !== m && P(null, "input"), !v && !g && L.isOpen && 0 === k.size && B(), null != T && T !== j.current && B(), M !== U.current && (w.setFocusedKey(null), y(!1), "" === M && (void 0 === e.inputValue || void 0 === e.selectedKey) && C(null)), T !== j.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? Y() : U.current = M;
            let r = null !== (n = null === (t = x.getItem(T)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
            !E && null != T && void 0 === e.inputValue && T === j.current && z.current !== r && (U.current = r, A(r)), j.current = T, z.current = r
        });
        let H = () => {
                j.current = null, C(null), B()
            },
            G = () => {
                if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                    var t, n;
                    e.onSelectionChange(T);
                    let r = null !== (n = null === (t = x.getItem(T)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
                    U.current = r, B()
                } else Y(), B()
            },
            V = () => {
                if (_) {
                    var e, t;
                    M === (null !== (t = null === (e = x.getItem(T)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "") ? G() : H()
                } else G()
            },
            $ = (0, a.useMemo)(() => L.isOpen ? v ? x : k : R, [L.isOpen, x, k, v, R]);
        return {
            ...L,
            toggle: (t, n) => {
                let r = "manual" === n || "focus" === n && "focus" === m;
                (g || k.size > 0 || r && x.size > 0 || e.items || L.isOpen) && (r && !L.isOpen && void 0 === e.items && y(!0), !L.isOpen && (I.current = n), F(t))
            },
            open: P,
            close: V,
            selectionManager: w,
            selectedKey: T,
            setSelectedKey: C,
            disabledKeys: O,
            isFocused: E,
            setFocused: e => {
                e ? "focus" === m && P(null, "focus") : b && V(), S(e)
            },
            selectedItem: D,
            collection: $,
            inputValue: M,
            setInputValue: A,
            commit: () => {
                L.isOpen && null != w.focusedKey ? T === w.focusedKey ? G() : C(w.focusedKey) : V()
            },
            revert: () => {
                _ && null == T ? H() : G()
            }
        }
    }
}