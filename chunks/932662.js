function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useListBox: function() {
            return d
        },
        useOption: function() {
            return l
        },
        useListBoxSection: function() {
            return f
        },
        listData: function() {
            return c
        },
        getItemId: function() {
            return u
        }
    }), n("222007"), n("781738"), n("70102");
    var r = n("240849"),
        i = n("388032"),
        o = n("113581"),
        s = n("932165"),
        a = n("846794");
    let c = new WeakMap;

    function u(e, t) {
        var n;
        let r = c.get(e);
        if (!r) throw Error("Unknown list");
        return "".concat(r.id, "-option-").concat("string" == typeof(n = t) ? n.replace(/\s*/g, "") : "" + n)
    }

    function d(e, t, n) {
        let a = (0, r.filterDOMProps)(e, {
                labelable: !0
            }),
            u = e.selectionBehavior || "toggle",
            d = e.linkBehavior || ("replace" === u ? "action" : "override");
        "toggle" === u && "action" === d && (d = "override");
        let {
            listProps: l
        } = (0, s.useSelectableList)({
            ...e,
            ref: n,
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            linkBehavior: d
        }), {
            focusWithinProps: f
        } = (0, i.useFocusWithin)({
            onFocusWithin: e.onFocus,
            onBlurWithin: e.onBlur,
            onFocusWithinChange: e.onFocusChange
        }), p = (0, r.useId)(e.id);
        c.set(t, {
            id: p,
            shouldUseVirtualFocus: e.shouldUseVirtualFocus,
            shouldSelectOnPressUp: e.shouldSelectOnPressUp,
            shouldFocusOnHover: e.shouldFocusOnHover,
            isVirtualized: e.isVirtualized,
            onAction: e.onAction,
            linkBehavior: d
        });
        let {
            labelProps: h,
            fieldProps: v
        } = (0, o.useLabel)({
            ...e,
            id: p,
            labelElementType: "span"
        });
        return {
            labelProps: h,
            listBoxProps: (0, r.mergeProps)(a, f, "multiple" === t.selectionManager.selectionMode ? {
                "aria-multiselectable": "true"
            } : {}, {
                role: "listbox",
                ...(0, r.mergeProps)(v, l)
            })
        }
    }

    function l(e, t, n) {
        var o, d, l, f, p, h, v;
        let {
            key: g
        } = e, b = c.get(t), m = null !== (d = e.isDisabled) && void 0 !== d ? d : t.disabledKeys.has(g), y = null !== (l = e.isSelected) && void 0 !== l ? l : t.selectionManager.isSelected(g), x = null !== (f = e.shouldSelectOnPressUp) && void 0 !== f ? f : null == b ? void 0 : b.shouldSelectOnPressUp, w = null !== (p = e.shouldFocusOnHover) && void 0 !== p ? p : null == b ? void 0 : b.shouldFocusOnHover, S = null !== (h = e.shouldUseVirtualFocus) && void 0 !== h ? h : null == b ? void 0 : b.shouldUseVirtualFocus, k = null !== (v = e.isVirtualized) && void 0 !== v ? v : null == b ? void 0 : b.isVirtualized, E = (0, r.useSlotId)(), _ = (0, r.useSlotId)(), M = {
            role: "option",
            "aria-disabled": m || void 0,
            "aria-selected": "none" !== t.selectionManager.selectionMode ? y : void 0
        };
        !((0, r.isMac)() && (0, r.isWebKit)()) && (M["aria-label"] = e["aria-label"], M["aria-labelledby"] = E, M["aria-describedby"] = _);
        let D = t.collection.getItem(g);
        if (k) {
            let e = Number(null == D ? void 0 : D.index);
            M["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, M["aria-setsize"] = (0, a.getItemCount)(t.collection)
        }
        let {
            itemProps: C,
            isPressed: P,
            isFocused: T,
            hasAction: A,
            allowsSelection: R
        } = (0, s.useSelectableItem)({
            selectionManager: t.selectionManager,
            key: g,
            ref: n,
            shouldSelectOnPressUp: x,
            allowsDifferentPressOrigin: x && w,
            isVirtualized: k,
            shouldUseVirtualFocus: S,
            isDisabled: m,
            onAction: (null == b ? void 0 : b.onAction) ? () => {
                var e;
                return null == b ? void 0 : null === (e = b.onAction) || void 0 === e ? void 0 : e.call(b, g)
            } : void 0,
            linkBehavior: null == b ? void 0 : b.linkBehavior
        }), {
            hoverProps: I
        } = (0, i.useHover)({
            isDisabled: m || !w,
            onHoverStart() {
                !(0, i.isFocusVisible)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(g))
            }
        }), O = (0, r.filterDOMProps)(null == D ? void 0 : D.props, {
            isLink: !!(null == D ? void 0 : null === (o = D.props) || void 0 === o ? void 0 : o.href)
        });
        return delete O.id, {
            optionProps: {
                ...M,
                ...(0, r.mergeProps)(O, C, I),
                id: u(t, g)
            },
            labelProps: {
                id: E
            },
            descriptionProps: {
                id: _
            },
            isFocused: T,
            isFocusVisible: T && (0, i.isFocusVisible)(),
            isSelected: y,
            isDisabled: m,
            isPressed: P,
            allowsSelection: R,
            hasAction: A
        }
    }

    function f(e) {
        let {
            heading: t,
            "aria-label": n
        } = e, i = (0, r.useId)();
        return {
            itemProps: {
                role: "presentation"
            },
            headingProps: t ? {
                id: i,
                role: "presentation"
            } : {},
            groupProps: {
                role: "group",
                "aria-label": n,
                "aria-labelledby": t ? i : void 0
            }
        }
    }
}