function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMenuTrigger: function() {
            return H
        },
        useMenu: function() {
            return W
        },
        useMenuItem: function() {
            return q
        },
        useMenuSection: function() {
            return Z
        }
    }), n("222007");
    var r = n("696000"),
        a = n("209320"),
        i = n("486821"),
        o = n("744289"),
        s = n("967791"),
        c = n("444471"),
        l = n("161652"),
        u = n("290822"),
        d = n("721863"),
        p = n("212026"),
        f = n("277591"),
        m = n("390246"),
        h = n("443412"),
        v = n("212113"),
        g = n("180212"),
        y = n("142038"),
        b = n("344973"),
        x = n("191820"),
        S = n("127561"),
        w = n("785788"),
        D = n("122201"),
        C = n("431806"),
        k = n("713125"),
        P = n("562946"),
        E = n("422936"),
        T = n("892513"),
        M = n("938270"),
        R = n("745849"),
        I = n("141301"),
        O = n("367520"),
        A = n("179626"),
        L = n("629448"),
        N = n("163060"),
        F = n("79205"),
        j = n("240849"),
        K = n("564341"),
        _ = n("388032"),
        V = n("195711"),
        z = n("932165"),
        B = n("846794");
    n("884691");
    var U = {};

    function H(e, t, n) {
        var r;
        let {
            type: a = "menu",
            isDisabled: i,
            trigger: o = "press"
        } = e, s = (0, j.useId)(), {
            triggerProps: c,
            overlayProps: l
        } = (0, V.useOverlayTrigger)({
            type: a
        }, t, n);
        let u = (0, K.useLocalizedStringFormatter)((r = U) && r.__esModule ? r.default : r, "@react-aria/menu"),
            {
                longPressProps: d
            } = (0, _.useLongPress)({
                isDisabled: i || "longPress" !== o,
                accessibilityDescription: u.format("longPressMessage"),
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
                ..."press" === o ? {
                    onPressStart(e) {
                        "touch" !== e.pointerType && "keyboard" !== e.pointerType && !i && t.toggle("virtual" === e.pointerType ? "first" : null)
                    },
                    onPress(e) {
                        "touch" === e.pointerType && !i && t.toggle()
                    }
                } : d,
                id: s,
                onKeyDown: e => {
                    if (!i) {
                        if (("longPress" !== o || e.altKey) && n && n.current) switch (e.key) {
                            case "Enter":
                            case " ":
                                if ("longPress" === o) return;
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
                ...l,
                "aria-labelledby": s,
                autoFocus: t.focusStrategy || !0,
                onClose: t.close
            }
        }
    }
    U = {
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
    };
    let G = new WeakMap;

    function W(e, t, n) {
        let {
            shouldFocusWrap: r = !0,
            onKeyDown: a,
            onKeyUp: i,
            ...o
        } = e;
        !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
        let s = (0, j.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                listProps: c
            } = (0, z.useSelectableList)({
                ...o,
                ref: n,
                selectionManager: t.selectionManager,
                collection: t.collection,
                disabledKeys: t.disabledKeys,
                shouldFocusWrap: r,
                linkBehavior: "override"
            });
        return G.set(t, {
            onClose: e.onClose,
            onAction: e.onAction
        }), {
            menuProps: (0, j.mergeProps)(s, {
                onKeyDown: a,
                onKeyUp: i
            }, {
                role: "menu",
                ...c,
                onKeyDown: e => {
                    "Escape" !== e.key && c.onKeyDown(e)
                }
            })
        }
    }

    function q(e, t, n) {
        var r, a, i;
        let {
            key: o,
            closeOnSelect: s,
            isVirtualized: c,
            "aria-haspopup": l,
            onPressStart: u,
            onPressUp: d,
            onPress: p,
            onPressChange: f,
            onPressEnd: m,
            onHoverStart: h,
            onHoverChange: v,
            onHoverEnd: g,
            onKeyDown: y,
            onKeyUp: b,
            onFocus: x,
            onFocusChange: S,
            onBlur: w
        } = e, D = !!l, C = null !== (a = e.isDisabled) && void 0 !== a ? a : t.disabledKeys.has(o), k = null !== (i = e.isSelected) && void 0 !== i ? i : t.selectionManager.isSelected(o), P = G.get(t), E = e.onClose || P.onClose, T = D ? () => {} : e.onAction || P.onAction, M = (0, j.useRouter)(), R = e => {
            T && T(o), e.target instanceof HTMLAnchorElement && M.open(e.target, e)
        }, I = "menuitem";
        !D && ("single" === t.selectionManager.selectionMode ? I = "menuitemradio" : "multiple" === t.selectionManager.selectionMode && (I = "menuitemcheckbox"));
        let O = (0, j.useSlotId)(),
            A = (0, j.useSlotId)(),
            L = (0, j.useSlotId)(),
            N = {
                "aria-disabled": C || void 0,
                role: I,
                "aria-label": e["aria-label"],
                "aria-labelledby": O,
                "aria-describedby": [A, L].filter(Boolean).join(" ") || void 0,
                "aria-controls": e["aria-controls"],
                "aria-haspopup": l,
                "aria-expanded": e["aria-expanded"]
            };
        "none" !== t.selectionManager.selectionMode && !D && (N["aria-checked"] = k);
        let F = t.collection.getItem(o);
        c && (N["aria-posinset"] = null == F ? void 0 : F.index, N["aria-setsize"] = (0, B.getItemCount)(t.collection));
        let {
            itemProps: K,
            isFocused: V
        } = (0, z.useSelectableItem)({
            selectionManager: t.selectionManager,
            key: o,
            ref: n,
            shouldSelectOnPressUp: !0,
            allowsDifferentPressOrigin: !0,
            linkBehavior: "none"
        }), {
            pressProps: U,
            isPressed: H
        } = (0, _.usePress)({
            onPressStart: e => {
                "keyboard" === e.pointerType && R(e), null == u || u(e)
            },
            onPress: p,
            onPressUp: e => {
                "keyboard" !== e.pointerType && (R(e), !D && E && (null != s ? s : "multiple" !== t.selectionManager.selectionMode || t.selectionManager.isLink(o)) && E()), null == d || d(e)
            },
            onPressChange: f,
            onPressEnd: m,
            isDisabled: C
        }), {
            hoverProps: W
        } = (0, _.useHover)({
            isDisabled: C,
            onHoverStart(e) {
                !(0, _.isFocusVisible)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(o)), null == h || h(e)
            },
            onHoverChange: v,
            onHoverEnd: g
        }), {
            keyboardProps: q
        } = (0, _.useKeyboard)({
            onKeyDown: e => {
                if (e.repeat) {
                    e.continuePropagation();
                    return
                }
                switch (e.key) {
                    case " ":
                        !C && "none" === t.selectionManager.selectionMode && !D && !1 !== s && E && E();
                        break;
                    case "Enter":
                        !C && !1 !== s && !D && E && E();
                        break;
                    default:
                        !D && e.continuePropagation(), null == y || y(e)
                }
            },
            onKeyUp: b
        }), {
            focusProps: Z
        } = (0, _.useFocus)({
            onBlur: w,
            onFocus: x,
            onFocusChange: S
        }), Y = (0, j.filterDOMProps)(F.props, {
            isLink: !!(null == F ? void 0 : null === (r = F.props) || void 0 === r ? void 0 : r.href)
        });
        return delete Y.id, {
            menuItemProps: {
                ...N,
                ...(0, j.mergeProps)(Y, D ? {
                    onFocus: K.onFocus
                } : K, U, W, q, Z),
                tabIndex: null != K.tabIndex ? -1 : void 0
            },
            labelProps: {
                id: O
            },
            descriptionProps: {
                id: A
            },
            keyboardShortcutProps: {
                id: L
            },
            isFocused: V,
            isSelected: k,
            isPressed: H,
            isDisabled: C
        }
    }

    function Z(e) {
        let {
            heading: t,
            "aria-label": n
        } = e, r = (0, j.useId)();
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