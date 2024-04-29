function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getItemId: function() {
            return c
        },
        listData: function() {
            return u
        },
        useListBox: function() {
            return l
        },
        useListBoxSection: function() {
            return f
        },
        useOption: function() {
            return d
        }
    });
    var r = n("182823"),
        i = n("612001"),
        a = n("251433"),
        o = n("457283"),
        s = n("275857");
    let u = new WeakMap;

    function c(e, t) {
        var n;
        let r = u.get(e);
        if (!r) throw Error("Unknown list");
        return `${r.id}-option-${"string"==typeof(n=t)?n.replace(/\s*/g,""):""+n}`
    }

    function l(e, t, n) {
        let s = (0, r.filterDOMProps)(e, {
                labelable: !0
            }),
            c = e.selectionBehavior || "toggle",
            l = e.linkBehavior || ("replace" === c ? "action" : "override");
        "toggle" === c && "action" === l && (l = "override");
        let {
            listProps: d
        } = (0, o.useSelectableList)({
            ...e,
            ref: n,
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            linkBehavior: l
        }), {
            focusWithinProps: f
        } = (0, i.useFocusWithin)({
            onFocusWithin: e.onFocus,
            onBlurWithin: e.onBlur,
            onFocusWithinChange: e.onFocusChange
        }), p = (0, r.useId)(e.id);
        u.set(t, {
            id: p,
            shouldUseVirtualFocus: e.shouldUseVirtualFocus,
            shouldSelectOnPressUp: e.shouldSelectOnPressUp,
            shouldFocusOnHover: e.shouldFocusOnHover,
            isVirtualized: e.isVirtualized,
            onAction: e.onAction,
            linkBehavior: l
        });
        let {
            labelProps: h,
            fieldProps: m
        } = (0, a.useLabel)({
            ...e,
            id: p,
            labelElementType: "span"
        });
        return {
            labelProps: h,
            listBoxProps: (0, r.mergeProps)(s, f, "multiple" === t.selectionManager.selectionMode ? {
                "aria-multiselectable": "true"
            } : {}, {
                role: "listbox",
                ...(0, r.mergeProps)(m, d)
            })
        }
    }

    function d(e, t, n) {
        var a, l, d, f, p, h, m;
        let {
            key: g
        } = e, _ = u.get(t), b = null !== (l = e.isDisabled) && void 0 !== l ? l : t.disabledKeys.has(g), v = null !== (d = e.isSelected) && void 0 !== d ? d : t.selectionManager.isSelected(g), y = null !== (f = e.shouldSelectOnPressUp) && void 0 !== f ? f : null == _ ? void 0 : _.shouldSelectOnPressUp, E = null !== (p = e.shouldFocusOnHover) && void 0 !== p ? p : null == _ ? void 0 : _.shouldFocusOnHover, S = null !== (h = e.shouldUseVirtualFocus) && void 0 !== h ? h : null == _ ? void 0 : _.shouldUseVirtualFocus, x = null !== (m = e.isVirtualized) && void 0 !== m ? m : null == _ ? void 0 : _.isVirtualized, w = (0, r.useSlotId)(), T = (0, r.useSlotId)(), C = {
            role: "option",
            "aria-disabled": b || void 0,
            "aria-selected": "none" !== t.selectionManager.selectionMode ? v : void 0
        };
        !((0, r.isMac)() && (0, r.isWebKit)()) && (C["aria-label"] = e["aria-label"], C["aria-labelledby"] = w, C["aria-describedby"] = T);
        let D = t.collection.getItem(g);
        if (x) {
            let e = Number(null == D ? void 0 : D.index);
            C["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, C["aria-setsize"] = (0, s.getItemCount)(t.collection)
        }
        let {
            itemProps: O,
            isPressed: M,
            isFocused: A,
            hasAction: k,
            allowsSelection: R
        } = (0, o.useSelectableItem)({
            selectionManager: t.selectionManager,
            key: g,
            ref: n,
            shouldSelectOnPressUp: y,
            allowsDifferentPressOrigin: y && E,
            isVirtualized: x,
            shouldUseVirtualFocus: S,
            isDisabled: b,
            onAction: (null == _ ? void 0 : _.onAction) ? () => {
                var e;
                return null == _ ? void 0 : null === (e = _.onAction) || void 0 === e ? void 0 : e.call(_, g)
            } : void 0,
            linkBehavior: null == _ ? void 0 : _.linkBehavior
        }), {
            hoverProps: N
        } = (0, i.useHover)({
            isDisabled: b || !E,
            onHoverStart() {
                !(0, i.isFocusVisible)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(g))
            }
        }), I = (0, r.filterDOMProps)(null == D ? void 0 : D.props, {
            isLink: !!(null == D ? void 0 : null === (a = D.props) || void 0 === a ? void 0 : a.href)
        });
        return delete I.id, {
            optionProps: {
                ...C,
                ...(0, r.mergeProps)(I, O, N),
                id: c(t, g)
            },
            labelProps: {
                id: w
            },
            descriptionProps: {
                id: T
            },
            isFocused: A,
            isFocusVisible: A && (0, i.isFocusVisible)(),
            isSelected: v,
            isDisabled: b,
            isPressed: M,
            allowsSelection: R,
            hasAction: k
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