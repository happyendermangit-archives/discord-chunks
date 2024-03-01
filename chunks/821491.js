function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGridList: function() {
            return p
        },
        useGridListItem: function() {
            return f
        },
        useGridListSelectionCheckbox: function() {
            return h
        }
    }), n("222007"), n("70102"), n("781738");
    var r = n("240849"),
        a = n("721598"),
        i = n("447259"),
        o = n("932165"),
        s = n("388032"),
        c = n("884691"),
        l = n("564341");
    let u = new WeakMap;

    function d(e, t) {
        let {
            id: n
        } = u.get(e);
        if (!n) throw Error("Unknown list");
        return "".concat(n, "-").concat(function(e) {
            return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e
        }(t))
    }

    function p(e, t, n) {
        let {
            isVirtualized: s,
            keyboardDelegate: c,
            onAction: l,
            linkBehavior: d = "action"
        } = e;
        !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
        let {
            listProps: p
        } = (0, o.useSelectableList)({
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            ref: n,
            keyboardDelegate: c,
            isVirtualized: s,
            selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
            shouldFocusWrap: e.shouldFocusWrap,
            linkBehavior: d
        }), f = (0, r.useId)(e.id);
        u.set(t, {
            id: f,
            onAction: l,
            linkBehavior: d
        });
        let m = (0, a.useHighlightSelectionDescription)({
                selectionManager: t.selectionManager,
                hasItemActions: !!l
            }),
            h = (0, i.useHasTabbableChild)(n, {
                isDisabled: 0 !== t.collection.size
            }),
            v = (0, r.filterDOMProps)(e, {
                labelable: !0
            }),
            g = (0, r.mergeProps)(v, {
                role: "grid",
                id: f,
                "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : void 0
            }, 0 === t.collection.size ? {
                tabIndex: h ? -1 : 0
            } : p, m);
        return s && (g["aria-rowcount"] = t.collection.size, g["aria-colcount"] = 1), (0, a.useGridSelectionAnnouncement)({}, t), {
            gridProps: g
        }
    }

    function f(e, t, n) {
        let {
            node: a,
            isVirtualized: p,
            shouldSelectOnPressUp: f
        } = e, {
            direction: h
        } = (0, l.useLocale)(), {
            onAction: v,
            linkBehavior: g
        } = u.get(t), y = (0, r.useSlotId)(), b = (0, c.useRef)(null), {
            itemProps: x,
            ...S
        } = (0, o.useSelectableItem)({
            selectionManager: t.selectionManager,
            key: a.key,
            ref: n,
            isVirtualized: p,
            shouldSelectOnPressUp: f,
            onAction: v ? () => v(a.key) : void 0,
            focus: () => {
                (null != b.current && a.key !== b.current || !n.current.contains(document.activeElement)) && (0, i.focusSafely)(n.current)
            },
            linkBehavior: g
        }), w = S.hasAction ? (0, r.getSyntheticLinkProps)(a.props) : {}, D = (0, r.mergeProps)(x, w, {
            role: "row",
            onKeyDownCapture: e => {
                if (!e.currentTarget.contains(e.target)) return;
                let t = (0, i.getFocusableTreeWalker)(n.current);
                switch (t.currentNode = document.activeElement, e.key) {
                    case "ArrowLeft": {
                        let a = "rtl" === h ? t.nextNode() : t.previousNode();
                        if (a) e.preventDefault(), e.stopPropagation(), (0, i.focusSafely)(a), (0, r.scrollIntoViewport)(a, {
                            containingElement: (0, r.getScrollParent)(n.current)
                        });
                        else if (e.preventDefault(), e.stopPropagation(), "rtl" === h)(0, i.focusSafely)(n.current), (0, r.scrollIntoViewport)(n.current, {
                            containingElement: (0, r.getScrollParent)(n.current)
                        });
                        else {
                            t.currentNode = n.current;
                            let e = m(t);
                            e && ((0, i.focusSafely)(e), (0, r.scrollIntoViewport)(e, {
                                containingElement: (0, r.getScrollParent)(n.current)
                            }))
                        }
                        break
                    }
                    case "ArrowRight": {
                        let a = "rtl" === h ? t.previousNode() : t.nextNode();
                        if (a) e.preventDefault(), e.stopPropagation(), (0, i.focusSafely)(a), (0, r.scrollIntoViewport)(a, {
                            containingElement: (0, r.getScrollParent)(n.current)
                        });
                        else if (e.preventDefault(), e.stopPropagation(), "ltr" === h)(0, i.focusSafely)(n.current), (0, r.scrollIntoViewport)(n.current, {
                            containingElement: (0, r.getScrollParent)(n.current)
                        });
                        else {
                            t.currentNode = n.current;
                            let e = m(t);
                            e && ((0, i.focusSafely)(e), (0, r.scrollIntoViewport)(e, {
                                containingElement: (0, r.getScrollParent)(n.current)
                            }))
                        }
                        break
                    }
                    case "ArrowUp":
                    case "ArrowDown":
                        !e.altKey && n.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)))
                }
            },
            onFocus: e => {
                if (b.current = a.key, e.target !== n.current) {
                    !(0, s.isFocusVisible)() && t.selectionManager.setFocusedKey(a.key);
                    return
                }
            },
            "aria-label": a.textValue || void 0,
            "aria-selected": t.selectionManager.canSelectItem(a.key) ? t.selectionManager.isSelected(a.key) : void 0,
            "aria-disabled": t.selectionManager.isDisabled(a.key) || void 0,
            "aria-labelledby": y && a.textValue ? "".concat(d(t, a.key), " ").concat(y) : void 0,
            id: d(t, a.key)
        });
        return p && (D["aria-rowindex"] = a.index + 1), {
            rowProps: D,
            gridCellProps: {
                role: "gridcell",
                "aria-colindex": 1
            },
            descriptionProps: {
                id: y
            },
            ...S
        }
    }

    function m(e) {
        let t, n;
        do(n = e.lastChild()) && (t = n); while (n);
        return t
    }

    function h(e, t) {
        let {
            key: n
        } = e, {
            checkboxProps: r
        } = (0, a.useGridSelectionCheckbox)(e, t);
        return {
            checkboxProps: {
                ...r,
                "aria-labelledby": "".concat(r.id, " ").concat(d(t, n))
            }
        }
    }
}