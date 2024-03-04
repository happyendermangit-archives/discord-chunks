function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useComboBoxState: function() {
            return c
        }
    }), n("222007"), n("424973");
    var r = n("846794"),
        i = n("880523"),
        o = n("884691"),
        s = n("679750"),
        a = n("356319");

    function c(e) {
        var t, n, c, u, d, l, f, p;
        let {
            defaultFilter: h,
            menuTrigger: v = "input",
            allowsEmptyCollection: g = !1,
            allowsCustomValue: b,
            shouldCloseOnBlur: m = !0
        } = e, [y, x] = (0, o.useState)(!1), [w, S] = (0, o.useState)(!1), {
            collection: k,
            selectionManager: E,
            selectedKey: _,
            setSelectedKey: M,
            selectedItem: D,
            disabledKeys: C
        } = (0, i.useSingleSelectListState)({
            ...e,
            onSelectionChange: t => {
                e.onSelectionChange && e.onSelectionChange(t), t === _ && (z(), F())
            },
            items: null !== (c = e.items) && void 0 !== c ? c : e.defaultItems
        }), [P, T] = (0, s.useControlledState)(e.inputValue, null !== (d = null !== (u = e.defaultInputValue) && void 0 !== u ? u : null === (t = k.getItem(_)) || void 0 === t ? void 0 : t.textValue) && void 0 !== d ? d : "", e.onInputChange), A = (0, o.useMemo)(() => null == e.items && h ? function(e, t, n) {
            return new i.ListCollection(function e(t, n, i, o) {
                let s = [];
                for (let a of n)
                    if ("section" === a.type && a.hasChildNodes) {
                        let n = e(t, (0, r.getChildNodes)(a, t), i, o);
                        [...n].some(e => "item" === e.type) && s.push({
                            ...a,
                            childNodes: n
                        })
                    } else "item" === a.type && o(a.textValue, i) ? s.push({
                        ...a
                    }) : "item" !== a.type && s.push({
                        ...a
                    });
                return s
            }(e, e, t, n))
        }(k, P, h) : k, [k, P, h, e.items]), [R, I] = (0, o.useState)(A), O = (0, o.useRef)("focus"), L = (0, a.useMenuTriggerState)({
            ...e,
            onOpenChange: t => {
                e.onOpenChange && e.onOpenChange(t, t ? O.current : void 0), E.setFocused(t), !t && E.setFocusedKey(null)
            },
            isOpen: void 0,
            defaultOpen: void 0
        }), j = (t, n) => {
            let r = "manual" === n || "focus" === n && "focus" === v;
            (g || A.size > 0 || r && k.size > 0 || e.items) && (r && !L.isOpen && void 0 === e.items && x(!0), O.current = n, L.open(t))
        }, N = (0, o.useCallback)(e => {
            L.isOpen && I(A), L.toggle(e)
        }, [L, A]), F = (0, o.useCallback)(() => {
            L.isOpen && (I(A), L.close())
        }, [L, A]), B = (0, o.useRef)(P), z = () => {
            var e, t;
            let n = null !== (t = null === (e = k.getItem(_)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "";
            B.current = n, T(n)
        }, K = (0, o.useRef)(null !== (f = null !== (l = e.selectedKey) && void 0 !== l ? l : e.defaultSelectedKey) && void 0 !== f ? f : null), V = (0, o.useRef)(null !== (p = null === (n = k.getItem(_)) || void 0 === n ? void 0 : n.textValue) && void 0 !== p ? p : "");
        (0, o.useEffect)(() => {
            var t, n;
            w && (A.size > 0 || g) && !L.isOpen && P !== B.current && "manual" !== v && j(null, "input"), !y && !g && L.isOpen && 0 === A.size && F(), null != _ && _ !== K.current && F(), P !== B.current && (E.setFocusedKey(null), x(!1), "" === P && (void 0 === e.inputValue || void 0 === e.selectedKey) && M(null)), _ !== K.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? z() : B.current = P;
            let r = null !== (n = null === (t = k.getItem(_)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
            !w && null != _ && void 0 === e.inputValue && _ === K.current && V.current !== r && (B.current = r, T(r)), K.current = _, V.current = r
        });
        let U = () => {
                K.current = null, M(null), F()
            },
            H = () => {
                if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                    var t, n;
                    e.onSelectionChange(_);
                    let r = null !== (n = null === (t = k.getItem(_)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
                    B.current = r, F()
                } else z(), F()
            },
            q = () => {
                if (b) {
                    var e, t;
                    let n = null !== (t = null === (e = k.getItem(_)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "";
                    P === n ? H() : U()
                } else H()
            },
            G = (0, o.useMemo)(() => L.isOpen ? y ? k : A : R, [L.isOpen, k, A, y, R]);
        return {
            ...L,
            toggle: (t, n) => {
                let r = "manual" === n || "focus" === n && "focus" === v;
                (g || A.size > 0 || r && k.size > 0 || e.items || L.isOpen) && (r && !L.isOpen && void 0 === e.items && x(!0), !L.isOpen && (O.current = n), N(t))
            },
            open: j,
            close: q,
            selectionManager: E,
            selectedKey: _,
            setSelectedKey: M,
            disabledKeys: C,
            isFocused: w,
            setFocused: e => {
                e ? "focus" === v && j(null, "focus") : m && q(), S(e)
            },
            selectedItem: D,
            collection: G,
            inputValue: P,
            setInputValue: T,
            commit: () => {
                L.isOpen && null != E.focusedKey ? _ === E.focusedKey ? H() : M(E.focusedKey) : q()
            },
            revert: () => {
                b && null == _ ? U() : H()
            }
        }
    }
}