function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useComboBox: function() {
            return q
        }
    });
    var r = n("235003"),
        i = n("385201"),
        a = n("875889"),
        o = n("867377"),
        s = n("502651"),
        u = n("364920"),
        c = n("478943"),
        l = n("518034"),
        d = n("706015"),
        f = n("974046"),
        p = n("554520"),
        h = n("726249"),
        m = n("395861"),
        g = n("953523"),
        _ = n("706440"),
        b = n("788675"),
        v = n("591995"),
        y = n("885723"),
        E = n("580917"),
        S = n("773959"),
        x = n("168147"),
        w = n("408291"),
        T = n("396423"),
        C = n("701809"),
        D = n("340132"),
        O = n("355180"),
        M = n("778341"),
        A = n("368480"),
        k = n("453440"),
        R = n("910188"),
        N = n("733710"),
        I = n("213789"),
        L = n("814137"),
        P = n("574573"),
        F = n("770003"),
        B = n("795250"),
        U = n("753264"),
        Y = n("182823"),
        j = n("470079"),
        z = n("275857"),
        H = n("148836"),
        G = n("201284"),
        V = n("602607"),
        $ = n("370225"),
        W = n("640900"),
        K = {};

    function q(e, t) {
        var n, r, i;
        let {
            buttonRef: a,
            popoverRef: o,
            inputRef: s,
            listBoxRef: u,
            keyboardDelegate: c,
            shouldFocusWrap: l,
            isReadOnly: d,
            isDisabled: f
        } = e;
        let p = (0, V.useLocalizedStringFormatter)((i = K) && i.__esModule ? i.default : i, "@react-aria/combobox"),
            {
                menuTriggerProps: h,
                menuProps: m
            } = (0, $.useMenuTrigger)({
                type: "listbox",
                isDisabled: f || d
            }, t, a);
        U.listData.set(t, {
            id: m.id
        });
        let g = (0, j.useMemo)(() => c || new H.ListKeyboardDelegate(t.collection, t.disabledKeys, u), [c, t.collection, t.disabledKeys, u]),
            {
                collectionProps: _
            } = (0, H.useSelectableCollection)({
                selectionManager: t.selectionManager,
                keyboardDelegate: g,
                disallowTypeAhead: !0,
                disallowEmptySelection: !0,
                shouldFocusWrap: l,
                ref: s,
                isVirtualized: !0
            }),
            b = (0, Y.useRouter)(),
            {
                isInvalid: v,
                validationErrors: y,
                validationDetails: E
            } = t.displayValidation,
            {
                labelProps: S,
                inputProps: x,
                descriptionProps: w,
                errorMessageProps: T
            } = (0, W.useTextField)({
                ...e,
                onChange: t.setInputValue,
                onKeyDown: d ? e.onKeyDown : (0, Y.chain)(t.isOpen && _.onKeyDown, n => {
                    switch (n.key) {
                        case "Enter":
                        case "Tab":
                            if (t.isOpen && "Enter" === n.key && n.preventDefault(), t.isOpen && null != t.selectionManager.focusedKey && t.selectionManager.isLink(t.selectionManager.focusedKey)) {
                                if ("Enter" === n.key) {
                                    let e = u.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
                                    e instanceof HTMLAnchorElement && b.open(e, n)
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
                    !(n.relatedTarget === (null == a ? void 0 : a.current) || (null === (r = o.current) || void 0 === r ? void 0 : r.contains(n.relatedTarget))) && (e.onBlur && e.onBlur(n), t.setFocused(!1))
                },
                value: t.inputValue,
                onFocus: n => {
                    !t.isFocused && (e.onFocus && e.onFocus(n), t.setFocused(!0))
                },
                autoComplete: "off",
                validate: void 0,
                [G.privateValidationStateProp]: t
            }, s),
            C = (0, Y.useLabels)({
                id: h.id,
                "aria-label": p.format("buttonLabel"),
                "aria-labelledby": e["aria-labelledby"] || S.id
            }),
            D = (0, Y.useLabels)({
                id: m.id,
                "aria-label": p.format("listboxLabel"),
                "aria-labelledby": e["aria-labelledby"] || S.id
            }),
            O = (0, j.useRef)(0),
            M = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0,
            A = null !== (n = null == M ? void 0 : M.parentKey) && void 0 !== n ? n : null,
            k = null !== (r = t.selectionManager.focusedKey) && void 0 !== r ? r : null,
            R = (0, j.useRef)(A),
            N = (0, j.useRef)(k);
        (0, j.useEffect)(() => {
            if ((0, Y.isAppleDevice)() && null != M && k !== N.current) {
                let e = t.selectionManager.isSelected(k),
                    n = null != A ? t.collection.getItem(A) : null,
                    r = (null == n ? void 0 : n["aria-label"]) || ("string" == typeof(null == n ? void 0 : n.rendered) ? n.rendered : "") || "",
                    i = p.format("focusAnnouncement", {
                        isGroupChange: n && A !== R.current,
                        groupTitle: r,
                        groupCount: n ? [...(0, z.getChildNodes)(n, t.collection)].length : 0,
                        optionText: M["aria-label"] || M.textValue || "",
                        isSelected: e
                    });
                (0, F.announce)(i)
            }
            R.current = A, N.current = k
        });
        let I = (0, z.getItemCount)(t.collection),
            L = (0, j.useRef)(I),
            P = (0, j.useRef)(t.isOpen);
        (0, j.useEffect)(() => {
            let e = t.isOpen !== P.current && (null == t.selectionManager.focusedKey || (0, Y.isAppleDevice)());
            if (t.isOpen && (e || I !== L.current)) {
                let e = p.format("countAnnouncement", {
                    optionCount: I
                });
                (0, F.announce)(e)
            }
            L.current = I, P.current = t.isOpen
        });
        let q = (0, j.useRef)(t.selectedKey);
        return (0, j.useEffect)(() => {
            if ((0, Y.isAppleDevice)() && t.isFocused && t.selectedItem && t.selectedKey !== q.current) {
                let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "",
                    n = p.format("selectedAnnouncement", {
                        optionText: e
                    });
                (0, F.announce)(n)
            }
            q.current = t.selectedKey
        }), (0, j.useEffect)(() => {
            if (t.isOpen) return (0, B.ariaHideOutside)([s.current, o.current])
        }, [t.isOpen, s, o]), {
            labelProps: S,
            buttonProps: {
                ...h,
                ...C,
                excludeFromTabOrder: !0,
                onPress: e => {
                    "touch" === e.pointerType && (s.current.focus(), t.toggle(null, "manual"))
                },
                onPressStart: e => {
                    "touch" !== e.pointerType && (s.current.focus(), t.toggle("keyboard" === e.pointerType || "virtual" === e.pointerType ? "first" : null, "manual"))
                },
                isDisabled: f || d
            },
            inputProps: (0, Y.mergeProps)(x, {
                role: "combobox",
                "aria-expanded": h["aria-expanded"],
                "aria-controls": t.isOpen ? m.id : void 0,
                "aria-autocomplete": "list",
                "aria-activedescendant": M ? (0, U.getItemId)(t, M.key) : void 0,
                onTouchEnd: e => {
                    if (f || d) return;
                    if (e.timeStamp - O.current < 500) {
                        e.preventDefault(), s.current.focus();
                        return
                    }
                    let n = e.target.getBoundingClientRect(),
                        r = e.changedTouches[0],
                        i = Math.ceil(n.left + .5 * n.width),
                        a = Math.ceil(n.top + .5 * n.height);
                    r.clientX === i && r.clientY === a && (e.preventDefault(), s.current.focus(), t.toggle(null, "manual"), O.current = e.timeStamp)
                },
                autoCorrect: "off",
                spellCheck: "false"
            }),
            listBoxProps: (0, Y.mergeProps)(m, D, {
                autoFocus: t.focusStrategy,
                shouldUseVirtualFocus: !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                linkBehavior: "selection"
            }),
            descriptionProps: w,
            errorMessageProps: T,
            isInvalid: v,
            validationErrors: y,
            validationDetails: E
        }
    }
    K = {
        "ar-AE": r.default,
        "bg-BG": i.default,
        "cs-CZ": a.default,
        "da-DK": o.default,
        "de-DE": s.default,
        "el-GR": u.default,
        "en-US": c.default,
        "es-ES": l.default,
        "et-EE": d.default,
        "fi-FI": f.default,
        "fr-FR": p.default,
        "he-IL": h.default,
        "hr-HR": m.default,
        "hu-HU": g.default,
        "it-IT": _.default,
        "ja-JP": b.default,
        "ko-KR": v.default,
        "lt-LT": y.default,
        "lv-LV": E.default,
        "nb-NO": S.default,
        "nl-NL": x.default,
        "pl-PL": w.default,
        "pt-BR": T.default,
        "pt-PT": C.default,
        "ro-RO": D.default,
        "ru-RU": O.default,
        "sk-SK": M.default,
        "sl-SI": A.default,
        "sr-SP": k.default,
        "sv-SE": R.default,
        "tr-TR": N.default,
        "uk-UA": I.default,
        "zh-CN": L.default,
        "zh-TW": P.default
    }
}