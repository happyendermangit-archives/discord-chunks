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
        }(k, P, h) : k, [k, P, h, e.items]), [R, I] = (0, o.useState)(A), O = (0, o.useRef)("focus"), j = (0, a.useMenuTriggerState)({
            ...e,
            onOpenChange: t => {
                e.onOpenChange && e.onOpenChange(t, t ? O.current : void 0), E.setFocused(t), !t && E.setFocusedKey(null)
            },
            isOpen: void 0,
            defaultOpen: void 0
        }), L = (t, n) => {
            let r = "manual" === n || "focus" === n && "focus" === v;
            (g || A.size > 0 || r && k.size > 0 || e.items) && (r && !j.isOpen && void 0 === e.items && x(!0), O.current = n, j.open(t))
        }, N = (0, o.useCallback)(e => {
            j.isOpen && I(A), j.toggle(e)
        }, [j, A]), F = (0, o.useCallback)(() => {
            j.isOpen && (I(A), j.close())
        }, [j, A]), B = (0, o.useRef)(P), z = () => {
            var e, t;
            let n = null !== (t = null === (e = k.getItem(_)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "";
            B.current = n, T(n)
        }, K = (0, o.useRef)(null !== (f = null !== (l = e.selectedKey) && void 0 !== l ? l : e.defaultSelectedKey) && void 0 !== f ? f : null), V = (0, o.useRef)(null !== (p = null === (n = k.getItem(_)) || void 0 === n ? void 0 : n.textValue) && void 0 !== p ? p : "");
        (0, o.useEffect)(() => {
            var t, n;
            w && (A.size > 0 || g) && !j.isOpen && P !== B.current && "manual" !== v && L(null, "input"), !y && !g && j.isOpen && 0 === A.size && F(), null != _ && _ !== K.current && F(), P !== B.current && (E.setFocusedKey(null), x(!1), "" === P && (void 0 === e.inputValue || void 0 === e.selectedKey) && M(null)), _ !== K.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? z() : B.current = P;
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
            G = (0, o.useMemo)(() => j.isOpen ? y ? k : A : R, [j.isOpen, k, A, y, R]);
        return {
            ...j,
            toggle: (t, n) => {
                let r = "manual" === n || "focus" === n && "focus" === v;
                (g || A.size > 0 || r && k.size > 0 || e.items || j.isOpen) && (r && !j.isOpen && void 0 === e.items && x(!0), !j.isOpen && (O.current = n), N(t))
            },
            open: L,
            close: q,
            selectionManager: E,
            selectedKey: _,
            setSelectedKey: M,
            disabledKeys: C,
            isFocused: w,
            setFocused: e => {
                e ? "focus" === v && L(null, "focus") : m && q(), S(e)
            },
            selectedItem: D,
            collection: G,
            inputValue: P,
            setInputValue: T,
            commit: () => {
                j.isOpen && null != E.focusedKey ? _ === E.focusedKey ? H() : M(E.focusedKey) : q()
            },
            revert: () => {
                b && null == _ ? U() : H()
            }
        }
    }
}