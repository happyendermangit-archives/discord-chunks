function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useComboBox: function() {
            return Y
        }
    }), n("222007");
    var r = n("495602"),
        a = n("244942"),
        i = n("169435"),
        o = n("370490"),
        s = n("30396"),
        c = n("528940"),
        l = n("59623"),
        u = n("179425"),
        d = n("565114"),
        p = n("261233"),
        f = n("867843"),
        m = n("320778"),
        h = n("795076"),
        v = n("21305"),
        g = n("271822"),
        y = n("792004"),
        b = n("250291"),
        x = n("733129"),
        S = n("596785"),
        w = n("65578"),
        D = n("82110"),
        C = n("554297"),
        k = n("347520"),
        P = n("978619"),
        E = n("470669"),
        T = n("351982"),
        M = n("101622"),
        R = n("648786"),
        I = n("565756"),
        O = n("551566"),
        A = n("544320"),
        L = n("136656"),
        N = n("581071"),
        F = n("302138"),
        j = n("362561"),
        K = n("195711"),
        _ = n("932662"),
        V = n("240849"),
        z = n("884691"),
        B = n("846794"),
        U = n("932165"),
        H = n("444324"),
        G = n("564341"),
        W = n("139796"),
        q = n("381084"),
        Z = {};

    function Y(e, t) {
        var n, r, a;
        let {
            buttonRef: i,
            popoverRef: o,
            inputRef: s,
            listBoxRef: c,
            keyboardDelegate: l,
            shouldFocusWrap: u,
            isReadOnly: d,
            isDisabled: p
        } = e;
        let f = (0, G.useLocalizedStringFormatter)((a = Z) && a.__esModule ? a.default : a, "@react-aria/combobox"),
            {
                menuTriggerProps: m,
                menuProps: h
            } = (0, W.useMenuTrigger)({
                type: "listbox",
                isDisabled: p || d
            }, t, i);
        _.listData.set(t, {
            id: h.id
        });
        let v = (0, z.useMemo)(() => l || new U.ListKeyboardDelegate(t.collection, t.disabledKeys, c), [l, t.collection, t.disabledKeys, c]),
            {
                collectionProps: g
            } = (0, U.useSelectableCollection)({
                selectionManager: t.selectionManager,
                keyboardDelegate: v,
                disallowTypeAhead: !0,
                disallowEmptySelection: !0,
                shouldFocusWrap: u,
                ref: s,
                isVirtualized: !0
            }),
            y = (0, V.useRouter)(),
            {
                isInvalid: b,
                validationErrors: x,
                validationDetails: S
            } = t.displayValidation,
            {
                labelProps: w,
                inputProps: D,
                descriptionProps: C,
                errorMessageProps: k
            } = (0, q.useTextField)({
                ...e,
                onChange: t.setInputValue,
                onKeyDown: d ? e.onKeyDown : (0, V.chain)(t.isOpen && g.onKeyDown, n => {
                    switch (n.key) {
                        case "Enter":
                        case "Tab":
                            if (t.isOpen && "Enter" === n.key && n.preventDefault(), t.isOpen && null != t.selectionManager.focusedKey && t.selectionManager.isLink(t.selectionManager.focusedKey)) {
                                if ("Enter" === n.key) {
                                    let e = c.current.querySelector('[data-key="'.concat(CSS.escape(t.selectionManager.focusedKey.toString()), '"]'));
                                    e instanceof HTMLAnchorElement && y.open(e, n)
                                }
                                t.close()
                            } else t.commit();
                            break;
                        case "Escape":
                            (null !== t.selectedKey || "" === t.inputValue || e.allowsCustomValue) && n.continuePropagation(), t.revert();
                            break;
                        case "ArrowDown":
                            t.open("first", "manual");
                            break;
                        case "ArrowUp":
                            t.open("last", "manual");
                            break;
                        case "ArrowLeft":
                        case "ArrowRight":
                            t.selectionManager.setFocusedKey(null)
                    }
                }, e.onKeyDown),
                onBlur: n => {
                    var r;
                    !(n.relatedTarget === (null == i ? void 0 : i.current) || (null === (r = o.current) || void 0 === r ? void 0 : r.contains(n.relatedTarget))) && (e.onBlur && e.onBlur(n), t.setFocused(!1))
                },
                value: t.inputValue,
                onFocus: n => {
                    !t.isFocused && (e.onFocus && e.onFocus(n), t.setFocused(!0))
                },
                autoComplete: "off",
                validate: void 0,
                [H.privateValidationStateProp]: t
            }, s),
            P = (0, V.useLabels)({
                id: m.id,
                "aria-label": f.format("buttonLabel"),
                "aria-labelledby": e["aria-labelledby"] || w.id
            }),
            E = (0, V.useLabels)({
                id: h.id,
                "aria-label": f.format("listboxLabel"),
                "aria-labelledby": e["aria-labelledby"] || w.id
            }),
            T = (0, z.useRef)(0),
            M = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0,
            R = null !== (n = null == M ? void 0 : M.parentKey) && void 0 !== n ? n : null,
            I = null !== (r = t.selectionManager.focusedKey) && void 0 !== r ? r : null,
            O = (0, z.useRef)(R),
            A = (0, z.useRef)(I);
        (0, z.useEffect)(() => {
            if ((0, V.isAppleDevice)() && null != M && I !== A.current) {
                let e = t.selectionManager.isSelected(I),
                    n = null != R ? t.collection.getItem(R) : null,
                    r = (null == n ? void 0 : n["aria-label"]) || ("string" == typeof(null == n ? void 0 : n.rendered) ? n.rendered : "") || "",
                    a = f.format("focusAnnouncement", {
                        isGroupChange: n && R !== O.current,
                        groupTitle: r,
                        groupCount: n ? [...(0, B.getChildNodes)(n, t.collection)].length : 0,
                        optionText: M["aria-label"] || M.textValue || "",
                        isSelected: e
                    });
                (0, j.announce)(a)
            }
            O.current = R, A.current = I
        });
        let L = (0, B.getItemCount)(t.collection),
            N = (0, z.useRef)(L),
            F = (0, z.useRef)(t.isOpen);
        (0, z.useEffect)(() => {
            let e = t.isOpen !== F.current && (null == t.selectionManager.focusedKey || (0, V.isAppleDevice)());
            if (t.isOpen && (e || L !== N.current)) {
                let e = f.format("countAnnouncement", {
                    optionCount: L
                });
                (0, j.announce)(e)
            }
            N.current = L, F.current = t.isOpen
        });
        let Y = (0, z.useRef)(t.selectedKey);
        return (0, z.useEffect)(() => {
            if ((0, V.isAppleDevice)() && t.isFocused && t.selectedItem && t.selectedKey !== Y.current) {
                let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "",
                    n = f.format("selectedAnnouncement", {
                        optionText: e
                    });
                (0, j.announce)(n)
            }
            Y.current = t.selectedKey
        }), (0, z.useEffect)(() => {
            if (t.isOpen) return (0, K.ariaHideOutside)([s.current, o.current])
        }, [t.isOpen, s, o]), {
            labelProps: w,
            buttonProps: {
                ...m,
                ...P,
                excludeFromTabOrder: !0,
                onPress: e => {
                    "touch" === e.pointerType && (s.current.focus(), t.toggle(null, "manual"))
                },
                onPressStart: e => {
                    "touch" !== e.pointerType && (s.current.focus(), t.toggle("keyboard" === e.pointerType || "virtual" === e.pointerType ? "first" : null, "manual"))
                },
                isDisabled: p || d
            },
            inputProps: (0, V.mergeProps)(D, {
                role: "combobox",
                "aria-expanded": m["aria-expanded"],
                "aria-controls": t.isOpen ? h.id : void 0,
                "aria-autocomplete": "list",
                "aria-activedescendant": M ? (0, _.getItemId)(t, M.key) : void 0,
                onTouchEnd: e => {
                    if (p || d) return;
                    if (e.timeStamp - T.current < 500) {
                        e.preventDefault(), s.current.focus();
                        return
                    }
                    let n = e.target.getBoundingClientRect(),
                        r = e.changedTouches[0],
                        a = Math.ceil(n.left + .5 * n.width),
                        i = Math.ceil(n.top + .5 * n.height);
                    r.clientX === a && r.clientY === i && (e.preventDefault(), s.current.focus(), t.toggle(null, "manual"), T.current = e.timeStamp)
                },
                autoCorrect: "off",
                spellCheck: "false"
            }),
            listBoxProps: (0, V.mergeProps)(h, E, {
                autoFocus: t.focusStrategy,
                shouldUseVirtualFocus: !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                linkBehavior: "selection"
            }),
            descriptionProps: C,
            errorMessageProps: k,
            isInvalid: b,
            validationErrors: x,
            validationDetails: S
        }
    }
    Z = {
        "ar-AE": r.default,
        "bg-BG": a.default,
        "cs-CZ": i.default,
        "da-DK": o.default,
        "de-DE": s.default,
        "el-GR": c.default,
        "en-US": l.default,
        "es-ES": u.default,
        "et-EE": d.default,
        "fi-FI": p.default,
        "fr-FR": f.default,
        "he-IL": m.default,
        "hr-HR": h.default,
        "hu-HU": v.default,
        "it-IT": g.default,
        "ja-JP": y.default,
        "ko-KR": b.default,
        "lt-LT": x.default,
        "lv-LV": S.default,
        "nb-NO": w.default,
        "nl-NL": D.default,
        "pl-PL": C.default,
        "pt-BR": k.default,
        "pt-PT": P.default,
        "ro-RO": E.default,
        "ru-RU": T.default,
        "sk-SK": M.default,
        "sl-SI": R.default,
        "sr-SP": I.default,
        "sv-SE": O.default,
        "tr-TR": A.default,
        "uk-UA": L.default,
        "zh-CN": N.default,
        "zh-TW": F.default
    }
}