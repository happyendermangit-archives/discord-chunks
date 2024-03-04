function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMenuTrigger: function() {
            return H
        },
        useMenu: function() {
            return G
        },
        useMenuItem: function() {
            return W
        },
        useMenuSection: function() {
            return Z
        }
    }), n("222007");
    var r = n("696000"),
        i = n("209320"),
        o = n("486821"),
        s = n("744289"),
        a = n("967791"),
        c = n("444471"),
        u = n("161652"),
        d = n("290822"),
        l = n("721863"),
        f = n("212026"),
        p = n("277591"),
        h = n("390246"),
        v = n("443412"),
        g = n("212113"),
        b = n("180212"),
        m = n("142038"),
        y = n("344973"),
        x = n("191820"),
        w = n("127561"),
        S = n("785788"),
        k = n("122201"),
        E = n("431806"),
        _ = n("713125"),
        M = n("562946"),
        D = n("422936"),
        C = n("892513"),
        P = n("938270"),
        T = n("745849"),
        A = n("141301"),
        R = n("367520"),
        I = n("179626"),
        O = n("629448"),
        L = n("163060"),
        j = n("79205"),
        N = n("240849"),
        F = n("564341"),
        B = n("388032"),
        z = n("195711"),
        K = n("932165"),
        V = n("846794");
    n("884691");
    var U = {};

    function H(e, t, n) {
        var r;
        let {
            type: i = "menu",
            isDisabled: o,
            trigger: s = "press"
        } = e, a = (0, N.useId)(), {
            triggerProps: c,
            overlayProps: u
        } = (0, z.useOverlayTrigger)({
            type: i
        }, t, n);
        let d = (0, F.useLocalizedStringFormatter)((r = U) && r.__esModule ? r.default : r, "@react-aria/menu"),
            {
                longPressProps: l
            } = (0, B.useLongPress)({
                isDisabled: o || "longPress" !== s,
                accessibilityDescription: d.format("longPressMessage"),
                onLongPressStart() {
                    t.close()
                },
                onLongPress() {
                    t.open("first")
                }
            });
        return delete c.onPress, {
            menuTriggerProps: {
                ...c,
                ..."press" === s ? {
                    onPressStart(e) {
                        "touch" !== e.pointerType && "keyboard" !== e.pointerType && !o && t.toggle("virtual" === e.pointerType ? "first" : null)
                    },
                    onPress(e) {
                        "touch" === e.pointerType && !o && t.toggle()
                    }
                } : l,
                id: a,
                onKeyDown: e => {
                    if (!o) {
                        if (("longPress" !== s || e.altKey) && n && n.current) switch (e.key) {
                            case "Enter":
                            case " ":
                                if ("longPress" === s) return;
                            case "ArrowDown":
                                !("continuePropagation" in e) && e.stopPropagation(), e.preventDefault(), t.toggle("first");
                                break;
                            case "ArrowUp":
                                !("continuePropagation" in e) && e.stopPropagation(), e.preventDefault(), t.toggle("last");
                                break;
                            default:
                                "continuePropagation" in e && e.continuePropagation()
                        }
                    }
                }
            },
            menuProps: {
                ...u,
                "aria-labelledby": a,
                autoFocus: t.focusStrategy || !0,
                onClose: t.close
            }
        }
    }
    U = {
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
    };
    let q = new WeakMap;

    function G(e, t, n) {
        let {
            shouldFocusWrap: r = !0,
            onKeyDown: i,
            onKeyUp: o,
            ...s
        } = e;
        !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
        let a = (0, N.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                listProps: c
            } = (0, K.useSelectableList)({
                ...s,
                ref: n,
                selectionManager: t.selectionManager,
                collection: t.collection,
                disabledKeys: t.disabledKeys,
                shouldFocusWrap: r,
                linkBehavior: "override"
            });
        return q.set(t, {
            onClose: e.onClose,
            onAction: e.onAction
        }), {
            menuProps: (0, N.mergeProps)(a, {
                onKeyDown: i,
                onKeyUp: o
            }, {
                role: "menu",
                ...c,
                onKeyDown: e => {
                    "Escape" !== e.key && c.onKeyDown(e)
                }
            })
        }
    }

    function W(e, t, n) {
        var r, i, o;
        let {
            key: s,
            closeOnSelect: a,
            isVirtualized: c,
            "aria-haspopup": u,
            onPressStart: d,
            onPressUp: l,
            onPress: f,
            onPressChange: p,
            onPressEnd: h,
            onHoverStart: v,
            onHoverChange: g,
            onHoverEnd: b,
            onKeyDown: m,
            onKeyUp: y,
            onFocus: x,
            onFocusChange: w,
            onBlur: S
        } = e, k = !!u, E = null !== (i = e.isDisabled) && void 0 !== i ? i : t.disabledKeys.has(s), _ = null !== (o = e.isSelected) && void 0 !== o ? o : t.selectionManager.isSelected(s), M = q.get(t), D = e.onClose || M.onClose, C = k ? () => {} : e.onAction || M.onAction, P = (0, N.useRouter)(), T = e => {
            C && C(s), e.target instanceof HTMLAnchorElement && P.open(e.target, e)
        }, A = "menuitem";
        !k && ("single" === t.selectionManager.selectionMode ? A = "menuitemradio" : "multiple" === t.selectionManager.selectionMode && (A = "menuitemcheckbox"));
        let R = (0, N.useSlotId)(),
            I = (0, N.useSlotId)(),
            O = (0, N.useSlotId)(),
            L = {
                "aria-disabled": E || void 0,
                role: A,
                "aria-label": e["aria-label"],
                "aria-labelledby": R,
                "aria-describedby": [I, O].filter(Boolean).join(" ") || void 0,
                "aria-controls": e["aria-controls"],
                "aria-haspopup": u,
                "aria-expanded": e["aria-expanded"]
            };
        "none" !== t.selectionManager.selectionMode && !k && (L["aria-checked"] = _);
        let j = t.collection.getItem(s);
        c && (L["aria-posinset"] = null == j ? void 0 : j.index, L["aria-setsize"] = (0, V.getItemCount)(t.collection));
        let {
            itemProps: F,
            isFocused: z
        } = (0, K.useSelectableItem)({
            selectionManager: t.selectionManager,
            key: s,
            ref: n,
            shouldSelectOnPressUp: !0,
            allowsDifferentPressOrigin: !0,
            linkBehavior: "none"
        }), {
            pressProps: U,
            isPressed: H
        } = (0, B.usePress)({
            onPressStart: e => {
                "keyboard" === e.pointerType && T(e), null == d || d(e)
            },
            onPress: f,
            onPressUp: e => {
                "keyboard" !== e.pointerType && (T(e), !k && D && (null != a ? a : "multiple" !== t.selectionManager.selectionMode || t.selectionManager.isLink(s)) && D()), null == l || l(e)
            },
            onPressChange: p,
            onPressEnd: h,
            isDisabled: E
        }), {
            hoverProps: G
        } = (0, B.useHover)({
            isDisabled: E,
            onHoverStart(e) {
                !(0, B.isFocusVisible)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(s)), null == v || v(e)
            },
            onHoverChange: g,
            onHoverEnd: b
        }), {
            keyboardProps: W
        } = (0, B.useKeyboard)({
            onKeyDown: e => {
                if (e.repeat) {
                    e.continuePropagation();
                    return
                }
                switch (e.key) {
                    case " ":
                        !E && "none" === t.selectionManager.selectionMode && !k && !1 !== a && D && D();
                        break;
                    case "Enter":
                        !E && !1 !== a && !k && D && D();
                        break;
                    default:
                        !k && e.continuePropagation(), null == m || m(e)
                }
            },
            onKeyUp: y
        }), {
            focusProps: Z
        } = (0, B.useFocus)({
            onBlur: S,
            onFocus: x,
            onFocusChange: w
        }), Y = (0, N.filterDOMProps)(j.props, {
            isLink: !!(null == j ? void 0 : null === (r = j.props) || void 0 === r ? void 0 : r.href)
        });
        return delete Y.id, {
            menuItemProps: {
                ...L,
                ...(0, N.mergeProps)(Y, k ? {
                    onFocus: F.onFocus
                } : F, U, G, W, Z),
                tabIndex: null != F.tabIndex ? -1 : void 0
            },
            labelProps: {
                id: R
            },
            descriptionProps: {
                id: I
            },
            keyboardShortcutProps: {
                id: O
            },
            isFocused: z,
            isSelected: _,
            isPressed: H,
            isDisabled: E
        }
    }

    function Z(e) {
        let {
            heading: t,
            "aria-label": n
        } = e, r = (0, N.useId)();
        return {
            itemProps: {
                role: "presentation"
            },
            headingProps: t ? {
                id: r,
                role: "presentation"
            } : {},
            groupProps: {
                role: "group",
                "aria-label": n,
                "aria-labelledby": t ? r : void 0
            }
        }
    }
}