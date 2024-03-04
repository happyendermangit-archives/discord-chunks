function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useComboBox: function() {
            return Y
        }
    }), n("222007");
    var r = n("495602"),
        i = n("244942"),
        o = n("169435"),
        s = n("370490"),
        a = n("30396"),
        c = n("528940"),
        u = n("59623"),
        d = n("179425"),
        l = n("565114"),
        f = n("261233"),
        p = n("867843"),
        h = n("320778"),
        v = n("795076"),
        g = n("21305"),
        b = n("271822"),
        m = n("792004"),
        y = n("250291"),
        x = n("733129"),
        w = n("596785"),
        S = n("65578"),
        k = n("82110"),
        E = n("554297"),
        _ = n("347520"),
        M = n("978619"),
        D = n("470669"),
        C = n("351982"),
        P = n("101622"),
        T = n("648786"),
        A = n("565756"),
        R = n("551566"),
        I = n("544320"),
        O = n("136656"),
        L = n("581071"),
        j = n("302138"),
        N = n("362561"),
        F = n("195711"),
        B = n("932662"),
        z = n("240849"),
        K = n("884691"),
        V = n("846794"),
        U = n("932165"),
        H = n("444324"),
        q = n("564341"),
        G = n("139796"),
        W = n("381084"),
        Z = {};

    function Y(e, t) {
        var n, r, i;
        let {
            buttonRef: o,
            popoverRef: s,
            inputRef: a,
            listBoxRef: c,
            keyboardDelegate: u,
            shouldFocusWrap: d,
            isReadOnly: l,
            isDisabled: f
        } = e;
        let p = (0, q.useLocalizedStringFormatter)((i = Z) && i.__esModule ? i.default : i, "@react-aria/combobox"),
            {
                menuTriggerProps: h,
                menuProps: v
            } = (0, G.useMenuTrigger)({
                type: "listbox",
                isDisabled: f || l
            }, t, o);
        B.listData.set(t, {
            id: v.id
        });
        let g = (0, K.useMemo)(() => u || new U.ListKeyboardDelegate(t.collection, t.disabledKeys, c), [u, t.collection, t.disabledKeys, c]),
            {
                collectionProps: b
            } = (0, U.useSelectableCollection)({
                selectionManager: t.selectionManager,
                keyboardDelegate: g,
                disallowTypeAhead: !0,
                disallowEmptySelection: !0,
                shouldFocusWrap: d,
                ref: a,
                isVirtualized: !0
            }),
            m = (0, z.useRouter)(),
            {
                isInvalid: y,
                validationErrors: x,
                validationDetails: w
            } = t.displayValidation,
            {
                labelProps: S,
                inputProps: k,
                descriptionProps: E,
                errorMessageProps: _
            } = (0, W.useTextField)({
                ...e,
                onChange: t.setInputValue,
                onKeyDown: l ? e.onKeyDown : (0, z.chain)(t.isOpen && b.onKeyDown, n => {
                    switch (n.key) {
                        case "Enter":
                        case "Tab":
                            if (t.isOpen && "Enter" === n.key && n.preventDefault(), t.isOpen && null != t.selectionManager.focusedKey && t.selectionManager.isLink(t.selectionManager.focusedKey)) {
                                if ("Enter" === n.key) {
                                    let e = c.current.querySelector('[data-key="'.concat(CSS.escape(t.selectionManager.focusedKey.toString()), '"]'));
                                    e instanceof HTMLAnchorElement && m.open(e, n)
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
                    !(n.relatedTarget === (null == o ? void 0 : o.current) || (null === (r = s.current) || void 0 === r ? void 0 : r.contains(n.relatedTarget))) && (e.onBlur && e.onBlur(n), t.setFocused(!1))
                },
                value: t.inputValue,
                onFocus: n => {
                    !t.isFocused && (e.onFocus && e.onFocus(n), t.setFocused(!0))
                },
                autoComplete: "off",
                validate: void 0,
                [H.privateValidationStateProp]: t
            }, a),
            M = (0, z.useLabels)({
                id: h.id,
                "aria-label": p.format("buttonLabel"),
                "aria-labelledby": e["aria-labelledby"] || S.id
            }),
            D = (0, z.useLabels)({
                id: v.id,
                "aria-label": p.format("listboxLabel"),
                "aria-labelledby": e["aria-labelledby"] || S.id
            }),
            C = (0, K.useRef)(0),
            P = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0,
            T = null !== (n = null == P ? void 0 : P.parentKey) && void 0 !== n ? n : null,
            A = null !== (r = t.selectionManager.focusedKey) && void 0 !== r ? r : null,
            R = (0, K.useRef)(T),
            I = (0, K.useRef)(A);
        (0, K.useEffect)(() => {
            if ((0, z.isAppleDevice)() && null != P && A !== I.current) {
                let e = t.selectionManager.isSelected(A),
                    n = null != T ? t.collection.getItem(T) : null,
                    r = (null == n ? void 0 : n["aria-label"]) || ("string" == typeof(null == n ? void 0 : n.rendered) ? n.rendered : "") || "",
                    i = p.format("focusAnnouncement", {
                        isGroupChange: n && T !== R.current,
                        groupTitle: r,
                        groupCount: n ? [...(0, V.getChildNodes)(n, t.collection)].length : 0,
                        optionText: P["aria-label"] || P.textValue || "",
                        isSelected: e
                    });
                (0, N.announce)(i)
            }
            R.current = T, I.current = A
        });
        let O = (0, V.getItemCount)(t.collection),
            L = (0, K.useRef)(O),
            j = (0, K.useRef)(t.isOpen);
        (0, K.useEffect)(() => {
            let e = t.isOpen !== j.current && (null == t.selectionManager.focusedKey || (0, z.isAppleDevice)());
            if (t.isOpen && (e || O !== L.current)) {
                let e = p.format("countAnnouncement", {
                    optionCount: O
                });
                (0, N.announce)(e)
            }
            L.current = O, j.current = t.isOpen
        });
        let Y = (0, K.useRef)(t.selectedKey);
        return (0, K.useEffect)(() => {
            if ((0, z.isAppleDevice)() && t.isFocused && t.selectedItem && t.selectedKey !== Y.current) {
                let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "",
                    n = p.format("selectedAnnouncement", {
                        optionText: e
                    });
                (0, N.announce)(n)
            }
            Y.current = t.selectedKey
        }), (0, K.useEffect)(() => {
            if (t.isOpen) return (0, F.ariaHideOutside)([a.current, s.current])
        }, [t.isOpen, a, s]), {
            labelProps: S,
            buttonProps: {
                ...h,
                ...M,
                excludeFromTabOrder: !0,
                onPress: e => {
                    "touch" === e.pointerType && (a.current.focus(), t.toggle(null, "manual"))
                },
                onPressStart: e => {
                    "touch" !== e.pointerType && (a.current.focus(), t.toggle("keyboard" === e.pointerType || "virtual" === e.pointerType ? "first" : null, "manual"))
                },
                isDisabled: f || l
            },
            inputProps: (0, z.mergeProps)(k, {
                role: "combobox",
                "aria-expanded": h["aria-expanded"],
                "aria-controls": t.isOpen ? v.id : void 0,
                "aria-autocomplete": "list",
                "aria-activedescendant": P ? (0, B.getItemId)(t, P.key) : void 0,
                onTouchEnd: e => {
                    if (f || l) return;
                    if (e.timeStamp - C.current < 500) {
                        e.preventDefault(), a.current.focus();
                        return
                    }
                    let n = e.target.getBoundingClientRect(),
                        r = e.changedTouches[0],
                        i = Math.ceil(n.left + .5 * n.width),
                        o = Math.ceil(n.top + .5 * n.height);
                    r.clientX === i && r.clientY === o && (e.preventDefault(), a.current.focus(), t.toggle(null, "manual"), C.current = e.timeStamp)
                },
                autoCorrect: "off",
                spellCheck: "false"
            }),
            listBoxProps: (0, z.mergeProps)(v, D, {
                autoFocus: t.focusStrategy,
                shouldUseVirtualFocus: !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                linkBehavior: "selection"
            }),
            descriptionProps: E,
            errorMessageProps: _,
            isInvalid: y,
            validationErrors: x,
            validationDetails: w
        }
    }
    Z = {
        "ar-AE": r.default,
        "bg-BG": i.default,
        "cs-CZ": o.default,
        "da-DK": s.default,
        "de-DE": a.default,
        "el-GR": c.default,
        "en-US": u.default,
        "es-ES": d.default,
        "et-EE": l.default,
        "fi-FI": f.default,
        "fr-FR": p.default,
        "he-IL": h.default,
        "hr-HR": v.default,
        "hu-HU": g.default,
        "it-IT": b.default,
        "ja-JP": m.default,
        "ko-KR": y.default,
        "lt-LT": x.default,
        "lv-LV": w.default,
        "nb-NO": S.default,
        "nl-NL": k.default,
        "pl-PL": E.default,
        "pt-BR": _.default,
        "pt-PT": M.default,
        "ro-RO": D.default,
        "ru-RU": C.default,
        "sk-SK": P.default,
        "sl-SI": T.default,
        "sr-SP": A.default,
        "sv-SE": R.default,
        "tr-TR": I.default,
        "uk-UA": O.default,
        "zh-CN": L.default,
        "zh-TW": j.default
    }
}