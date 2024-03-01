function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useComboBoxState: function() {
            return c
        }
    }), n("222007"), n("424973");
    var r = n("846794"),
        a = n("880523"),
        i = n("884691"),
        o = n("679750"),
        s = n("356319");

    function c(e) {
        var t, n, c, l, u, d, p, f;
        let {
            defaultFilter: m,
            menuTrigger: h = "input",
            allowsEmptyCollection: v = !1,
            allowsCustomValue: g,
            shouldCloseOnBlur: y = !0
        } = e, [b, x] = (0, i.useState)(!1), [S, w] = (0, i.useState)(!1), {
            collection: D,
            selectionManager: C,
            selectedKey: k,
            setSelectedKey: P,
            selectedItem: E,
            disabledKeys: T
        } = (0, a.useSingleSelectListState)({
            ...e,
            onSelectionChange: t => {
                e.onSelectionChange && e.onSelectionChange(t), t === k && (V(), K())
            },
            items: null !== (c = e.items) && void 0 !== c ? c : e.defaultItems
        }), [M, R] = (0, o.useControlledState)(e.inputValue, null !== (u = null !== (l = e.defaultInputValue) && void 0 !== l ? l : null === (t = D.getItem(k)) || void 0 === t ? void 0 : t.textValue) && void 0 !== u ? u : "", e.onInputChange), I = (0, i.useMemo)(() => null == e.items && m ? function(e, t, n) {
            return new a.ListCollection(function e(t, n, a, i) {
                let o = [];
                for (let s of n)
                    if ("section" === s.type && s.hasChildNodes) {
                        let n = e(t, (0, r.getChildNodes)(s, t), a, i);
                        [...n].some(e => "item" === e.type) && o.push({
                            ...s,
                            childNodes: n
                        })
                    } else "item" === s.type && i(s.textValue, a) ? o.push({
                        ...s
                    }) : "item" !== s.type && o.push({
                        ...s
                    });
                return o
            }(e, e, t, n))
        }(D, M, m) : D, [D, M, m, e.items]), [O, A] = (0, i.useState)(I), L = (0, i.useRef)("focus"), N = (0, s.useMenuTriggerState)({
            ...e,
            onOpenChange: t => {
                e.onOpenChange && e.onOpenChange(t, t ? L.current : void 0), C.setFocused(t), !t && C.setFocusedKey(null)
            },
            isOpen: void 0,
            defaultOpen: void 0
        }), F = (t, n) => {
            let r = "manual" === n || "focus" === n && "focus" === h;
            (v || I.size > 0 || r && D.size > 0 || e.items) && (r && !N.isOpen && void 0 === e.items && x(!0), L.current = n, N.open(t))
        }, j = (0, i.useCallback)(e => {
            N.isOpen && A(I), N.toggle(e)
        }, [N, I]), K = (0, i.useCallback)(() => {
            N.isOpen && (A(I), N.close())
        }, [N, I]), _ = (0, i.useRef)(M), V = () => {
            var e, t;
            let n = null !== (t = null === (e = D.getItem(k)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "";
            _.current = n, R(n)
        }, z = (0, i.useRef)(null !== (p = null !== (d = e.selectedKey) && void 0 !== d ? d : e.defaultSelectedKey) && void 0 !== p ? p : null), B = (0, i.useRef)(null !== (f = null === (n = D.getItem(k)) || void 0 === n ? void 0 : n.textValue) && void 0 !== f ? f : "");
        (0, i.useEffect)(() => {
            var t, n;
            S && (I.size > 0 || v) && !N.isOpen && M !== _.current && "manual" !== h && F(null, "input"), !b && !v && N.isOpen && 0 === I.size && K(), null != k && k !== z.current && K(), M !== _.current && (C.setFocusedKey(null), x(!1), "" === M && (void 0 === e.inputValue || void 0 === e.selectedKey) && P(null)), k !== z.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? V() : _.current = M;
            let r = null !== (n = null === (t = D.getItem(k)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
            !S && null != k && void 0 === e.inputValue && k === z.current && B.current !== r && (_.current = r, R(r)), z.current = k, B.current = r
        });
        let U = () => {
                z.current = null, P(null), K()
            },
            H = () => {
                if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                    var t, n;
                    e.onSelectionChange(k);
                    let r = null !== (n = null === (t = D.getItem(k)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
                    _.current = r, K()
                } else V(), K()
            },
            G = () => {
                if (g) {
                    var e, t;
                    let n = null !== (t = null === (e = D.getItem(k)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "";
                    M === n ? H() : U()
                } else H()
            },
            W = (0, i.useMemo)(() => N.isOpen ? b ? D : I : O, [N.isOpen, D, I, b, O]);
        return {
            ...N,
            toggle: (t, n) => {
                let r = "manual" === n || "focus" === n && "focus" === h;
                (v || I.size > 0 || r && D.size > 0 || e.items || N.isOpen) && (r && !N.isOpen && void 0 === e.items && x(!0), !N.isOpen && (L.current = n), j(t))
            },
            open: F,
            close: G,
            selectionManager: C,
            selectedKey: k,
            setSelectedKey: P,
            disabledKeys: T,
            isFocused: S,
            setFocused: e => {
                e ? "focus" === h && F(null, "focus") : y && G(), w(e)
            },
            selectedItem: E,
            collection: W,
            inputValue: M,
            setInputValue: R,
            commit: () => {
                N.isOpen && null != C.focusedKey ? k === C.focusedKey ? H() : P(C.focusedKey) : G()
            },
            revert: () => {
                g && null == k ? U() : H()
            }
        }
    }
}