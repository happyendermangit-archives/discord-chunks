function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GridKeyboardDelegate: function() {
            return W
        },
        useGrid: function() {
            return J
        },
        useGridCell: function() {
            return en
        },
        useGridRow: function() {
            return et
        },
        useGridRowGroup: function() {
            return ee
        },
        useGridSelectionAnnouncement: function() {
            return Q
        },
        useGridSelectionCheckbox: function() {
            return ei
        },
        useHighlightSelectionDescription: function() {
            return X
        }
    });
    var r = n("963663"),
        i = n("910524"),
        a = n("433668"),
        o = n("231116"),
        s = n("801900"),
        u = n("434831"),
        c = n("838253"),
        l = n("337661"),
        d = n("255894"),
        f = n("335436"),
        p = n("476347"),
        h = n("779138"),
        m = n("81272"),
        g = n("306670"),
        _ = n("320564"),
        b = n("25163"),
        v = n("869940"),
        y = n("904838"),
        E = n("740519"),
        S = n("526622"),
        x = n("826737"),
        w = n("65275"),
        T = n("235579"),
        C = n("417443"),
        D = n("42287"),
        O = n("240362"),
        M = n("836168"),
        A = n("109465"),
        k = n("348949"),
        R = n("936443"),
        N = n("542063"),
        I = n("472315"),
        L = n("461128"),
        P = n("889249"),
        F = n("275857"),
        B = n("760607"),
        U = n("182823"),
        Y = n("470079"),
        j = n("602607"),
        z = n("706682"),
        H = n("148836"),
        G = n("770003"),
        V = n("612001");

    function $(e) {
        return e && e.__esModule ? e.default : e
    }
    class W {
        isCell(e) {
            return "cell" === e.type
        }
        isRow(e) {
            return "row" === e.type || "item" === e.type
        }
        findPreviousKey(e, t) {
            let n = null != e ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
            for (; null != n;) {
                let e = this.collection.getItem(n);
                if (!this.disabledKeys.has(n) && (!t || t(e))) return n;
                n = this.collection.getKeyBefore(n)
            }
        }
        findNextKey(e, t) {
            let n = null != e ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
            for (; null != n;) {
                let e = this.collection.getItem(n);
                if (!this.disabledKeys.has(n) && (!t || t(e))) return n;
                n = this.collection.getKeyAfter(n)
            }
        }
        getKeyBelow(e) {
            let t = this.collection.getItem(e);
            if (t && (this.isCell(t) && (e = t.parentKey), null != (e = this.findNextKey(e)))) {
                if (this.isCell(t)) {
                    let n = this.collection.getItem(e);
                    return (0, F.getNthItem)((0, F.getChildNodes)(n, this.collection), t.index).key
                }
                if ("row" === this.focusMode) return e
            }
        }
        getKeyAbove(e) {
            let t = this.collection.getItem(e);
            if (t && (this.isCell(t) && (e = t.parentKey), null != (e = this.findPreviousKey(e)))) {
                if (this.isCell(t)) {
                    let n = this.collection.getItem(e);
                    return (0, F.getNthItem)((0, F.getChildNodes)(n, this.collection), t.index).key
                }
                if ("row" === this.focusMode) return e
            }
        }
        getKeyRightOf(e) {
            let t = this.collection.getItem(e);
            if (t) {
                if (this.isRow(t)) {
                    let e = (0, F.getChildNodes)(t, this.collection);
                    return "rtl" === this.direction ? (0, F.getLastItem)(e).key : (0, F.getFirstItem)(e).key
                }
                if (this.isCell(t)) {
                    let n = this.collection.getItem(t.parentKey),
                        r = (0, F.getChildNodes)(n, this.collection),
                        i = "rtl" === this.direction ? (0, F.getNthItem)(r, t.index - 1) : (0, F.getNthItem)(r, t.index + 1);
                    return i ? i.key : "row" === this.focusMode ? t.parentKey : "rtl" === this.direction ? this.getFirstKey(e) : this.getLastKey(e)
                }
            }
        }
        getKeyLeftOf(e) {
            let t = this.collection.getItem(e);
            if (t) {
                if (this.isRow(t)) {
                    let e = (0, F.getChildNodes)(t, this.collection);
                    return "rtl" === this.direction ? (0, F.getFirstItem)(e).key : (0, F.getLastItem)(e).key
                }
                if (this.isCell(t)) {
                    let n = this.collection.getItem(t.parentKey),
                        r = (0, F.getChildNodes)(n, this.collection),
                        i = "rtl" === this.direction ? (0, F.getNthItem)(r, t.index + 1) : (0, F.getNthItem)(r, t.index - 1);
                    return i ? i.key : "row" === this.focusMode ? t.parentKey : "rtl" === this.direction ? this.getLastKey(e) : this.getFirstKey(e)
                }
            }
        }
        getFirstKey(e, t) {
            let n;
            if (null != e) {
                if (!(n = this.collection.getItem(e))) return;
                if (this.isCell(n) && !t) {
                    let e = this.collection.getItem(n.parentKey);
                    return (0, F.getFirstItem)((0, F.getChildNodes)(e, this.collection)).key
                }
            }
            if (null != (e = this.findNextKey()) && n && this.isCell(n) && t || "cell" === this.focusMode) {
                let t = this.collection.getItem(e);
                e = (0, F.getFirstItem)((0, F.getChildNodes)(t, this.collection)).key
            }
            return e
        }
        getLastKey(e, t) {
            let n;
            if (null != e) {
                if (!(n = this.collection.getItem(e))) return;
                if (this.isCell(n) && !t) {
                    let e = this.collection.getItem(n.parentKey),
                        t = (0, F.getChildNodes)(e, this.collection);
                    return (0, F.getLastItem)(t).key
                }
            }
            if (null != (e = this.findPreviousKey()) && n && this.isCell(n) && t || "cell" === this.focusMode) {
                let t = this.collection.getItem(e),
                    n = (0, F.getChildNodes)(t, this.collection);
                e = (0, F.getLastItem)(n).key
            }
            return e
        }
        getItem(e) {
            return this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`)
        }
        getItemRect(e) {
            var t;
            if (this.layout) return null === (t = this.layout.getLayoutInfo(e)) || void 0 === t ? void 0 : t.rect;
            let n = this.getItem(e);
            if (n) return new B.Rect(n.offsetLeft, n.offsetTop, n.offsetWidth, n.offsetHeight)
        }
        getPageHeight() {
            var e, t, n;
            return this.layout ? null === (e = this.layout.virtualizer) || void 0 === e ? void 0 : e.visibleRect.height : null === (n = this.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : t.offsetHeight
        }
        getContentHeight() {
            var e, t;
            return this.layout ? this.layout.getContentSize().height : null === (t = this.ref) || void 0 === t ? void 0 : null === (e = t.current) || void 0 === e ? void 0 : e.scrollHeight
        }
        getKeyPageAbove(e) {
            let t = this.getItemRect(e);
            if (!t) return null;
            let n = Math.max(0, t.maxY - this.getPageHeight());
            for (; t && t.y > n;) e = this.getKeyAbove(e), t = this.getItemRect(e);
            return e
        }
        getKeyPageBelow(e) {
            let t = this.getItemRect(e);
            if (!t) return null;
            let n = this.getPageHeight(),
                r = Math.min(this.getContentHeight(), t.y + n);
            for (; t && t.maxY < r;) {
                let n = this.getKeyBelow(e);
                t = this.getItemRect(n), null != n && (e = n)
            }
            return e
        }
        getKeyForSearch(e, t) {
            if (!this.collator) return null;
            let n = this.collection,
                r = null != t ? t : this.getFirstKey(),
                i = n.getItem(r);
            "cell" === i.type && (r = i.parentKey);
            let a = !1;
            for (; null != r;) {
                let t = n.getItem(r);
                if (t.textValue) {
                    let n = t.textValue.slice(0, e.length);
                    if (0 === this.collator.compare(n, e)) {
                        if (this.isRow(t) && "cell" === this.focusMode) return (0, F.getFirstItem)((0, F.getChildNodes)(t, this.collection)).key;
                        return t.key
                    }
                }
                null == (r = this.findNextKey(r)) && !a && (r = this.getFirstKey(), a = !0)
            }
            return null
        }
        constructor(e) {
            this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.ref = e.ref, this.direction = e.direction, this.collator = e.collator, this.layout = e.layout, this.focusMode = e.focusMode || "row"
        }
    }
    let K = new WeakMap;
    var q = {};

    function Q(e, t) {
        let {
            getRowText: n = e => {
                var n, r, i, a;
                return null !== (a = null === (n = (r = t.collection).getTextValue) || void 0 === n ? void 0 : n.call(r, e)) && void 0 !== a ? a : null === (i = t.collection.getItem(e)) || void 0 === i ? void 0 : i.textValue
            }
        } = e, r = (0, j.useLocalizedStringFormatter)($(q), "@react-aria/grid"), i = t.selectionManager.rawSelection, a = (0, Y.useRef)(i);
        (0, U.useUpdateEffect)(() => {
            var e;
            if (!t.selectionManager.isFocused) {
                a.current = i;
                return
            }
            let o = Z(i, a.current),
                s = Z(a.current, i),
                u = "replace" === t.selectionManager.selectionBehavior,
                c = [];
            if (1 === t.selectionManager.selectedKeys.size && u) {
                if (t.collection.getItem(t.selectionManager.selectedKeys.keys().next().value)) {
                    let e = n(t.selectionManager.selectedKeys.keys().next().value);
                    e && c.push(r.format("selectedItem", {
                        item: e
                    }))
                }
            } else if (1 === o.size && 0 === s.size) {
                let e = n(o.keys().next().value);
                e && c.push(r.format("selectedItem", {
                    item: e
                }))
            } else if (1 === s.size && 0 === o.size && t.collection.getItem(s.keys().next().value)) {
                let e = n(s.keys().next().value);
                e && c.push(r.format("deselectedItem", {
                    item: e
                }))
            }
            "multiple" === t.selectionManager.selectionMode && (0 === c.length || "all" === i || i.size > 1 || "all" === a.current || (null === (e = a.current) || void 0 === e ? void 0 : e.size) > 1) && c.push("all" === i ? r.format("selectedAll") : r.format("selectedCount", {
                count: i.size
            })), c.length > 0 && (0, G.announce)(c.join(" ")), a.current = i
        }, [i])
    }

    function Z(e, t) {
        let n = new Set;
        if ("all" === e || "all" === t) return n;
        for (let r of e.keys()) !t.has(r) && n.add(r);
        return n
    }

    function X(e) {
        let t = (0, j.useLocalizedStringFormatter)($(q), "@react-aria/grid"),
            n = (0, V.useInteractionModality)(),
            r = ("pointer" === n || "virtual" === n || null == n) && "undefined" != typeof window && "ontouchstart" in window,
            i = (0, Y.useMemo)(() => {
                let n, i = e.selectionManager.selectionMode,
                    a = e.selectionManager.selectionBehavior;
                return r && (n = t.format("longPressToSelect")), "replace" === a && "none" !== i && e.hasItemActions ? n : void 0
            }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, t, r]);
        return (0, U.useDescription)(i)
    }

    function J(e, t, n) {
        let {
            isVirtualized: r,
            keyboardDelegate: i,
            focusMode: a,
            scrollRef: o,
            getRowText: s,
            onRowAction: u,
            onCellAction: c
        } = e, {
            selectionManager: l
        } = t;
        !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
        let d = (0, j.useCollator)({
                usage: "search",
                sensitivity: "base"
            }),
            {
                direction: f
            } = (0, j.useLocale)(),
            p = t.selectionManager.disabledBehavior,
            h = (0, Y.useMemo)(() => i || new W({
                collection: t.collection,
                disabledKeys: "selection" === p ? new Set : t.disabledKeys,
                ref: n,
                direction: f,
                collator: d,
                focusMode: a
            }), [i, t.collection, t.disabledKeys, p, n, f, d, a]),
            {
                collectionProps: m
            } = (0, H.useSelectableCollection)({
                ref: n,
                selectionManager: l,
                keyboardDelegate: h,
                isVirtualized: r,
                scrollRef: o
            }),
            g = (0, U.useId)(e.id);
        K.set(t, {
            keyboardDelegate: h,
            actions: {
                onRowAction: u,
                onCellAction: c
            }
        });
        let _ = X({
                selectionManager: l,
                hasItemActions: !!(u || c)
            }),
            b = (0, U.filterDOMProps)(e, {
                labelable: !0
            }),
            v = (0, Y.useCallback)(e => {
                if (l.isFocused) {
                    !e.currentTarget.contains(e.target) && l.setFocused(!1);
                    return
                }
                e.currentTarget.contains(e.target) && l.setFocused(!0)
            }, [l]),
            y = (0, Y.useMemo)(() => ({
                onBlur: m.onBlur,
                onFocus: v
            }), [v, m.onBlur]),
            E = (0, z.useHasTabbableChild)(n, {
                isDisabled: 0 !== t.collection.size
            }),
            S = (0, U.mergeProps)(b, {
                role: "grid",
                id: g,
                "aria-multiselectable": "multiple" === l.selectionMode ? "true" : void 0
            }, t.isKeyboardNavigationDisabled ? y : m, 0 === t.collection.size && {
                tabIndex: E ? -1 : 0
            }, _);
        return r && (S["aria-rowcount"] = t.collection.size, S["aria-colcount"] = t.collection.columnCount), Q({
            getRowText: s
        }, t), {
            gridProps: S
        }
    }

    function ee() {
        return {
            rowGroupProps: {
                role: "rowgroup"
            }
        }
    }

    function et(e, t, n) {
        let {
            node: r,
            isVirtualized: i,
            shouldSelectOnPressUp: a,
            onAction: o
        } = e, {
            actions: {
                onRowAction: s
            }
        } = K.get(t), {
            itemProps: u,
            ...c
        } = (0, H.useSelectableItem)({
            selectionManager: t.selectionManager,
            key: r.key,
            ref: n,
            isVirtualized: i,
            shouldSelectOnPressUp: a,
            onAction: s ? () => s(r.key) : o,
            isDisabled: 0 === t.collection.size
        }), l = t.selectionManager.isSelected(r.key), d = {
            role: "row",
            "aria-selected": "none" !== t.selectionManager.selectionMode ? l : void 0,
            "aria-disabled": c.isDisabled || void 0,
            ...u
        };
        return i && (d["aria-rowindex"] = r.index + 1), {
            rowProps: d,
            ...c
        }
    }

    function en(e, t, n) {
        var r;
        let {
            node: i,
            isVirtualized: a,
            focusMode: o = "child",
            shouldSelectOnPressUp: s,
            onAction: u
        } = e, {
            direction: c
        } = (0, j.useLocale)(), {
            keyboardDelegate: l,
            actions: {
                onCellAction: d
            }
        } = K.get(t), f = (0, Y.useRef)(null), p = () => {
            let e = (0, z.getFocusableTreeWalker)(n.current);
            if ("child" === o) {
                if (n.current.contains(document.activeElement) && n.current !== document.activeElement) return;
                let r = "last" === t.selectionManager.childFocusStrategy ? er(e) : e.firstChild();
                if (r) {
                    (0, z.focusSafely)(r);
                    return
                }
            }(null != f.current && i.key !== f.current || !n.current.contains(document.activeElement)) && (0, z.focusSafely)(n.current)
        }, {
            itemProps: h,
            isPressed: m
        } = (0, H.useSelectableItem)({
            selectionManager: t.selectionManager,
            key: i.key,
            ref: n,
            isVirtualized: a,
            focus: p,
            shouldSelectOnPressUp: s,
            onAction: d ? () => d(i.key) : u,
            isDisabled: 0 === t.collection.size
        }), g = (0, U.mergeProps)(h, {
            role: "gridcell",
            onKeyDownCapture: e => {
                if (!e.currentTarget.contains(e.target) || t.isKeyboardNavigationDisabled) return;
                let r = (0, z.getFocusableTreeWalker)(n.current);
                switch (r.currentNode = document.activeElement, e.key) {
                    case "ArrowLeft": {
                        let t = "rtl" === c ? r.nextNode() : r.previousNode();
                        if ("child" === o && t === n.current && (t = null), t) e.preventDefault(), e.stopPropagation(), (0, z.focusSafely)(t), (0, U.scrollIntoViewport)(t, {
                            containingElement: (0, U.getScrollParent)(n.current)
                        });
                        else {
                            if (l.getKeyLeftOf(i.key) !== i.key) break;
                            e.preventDefault(), e.stopPropagation(), "cell" === o && "rtl" === c ? ((0, z.focusSafely)(n.current), (0, U.scrollIntoViewport)(n.current, {
                                containingElement: (0, U.getScrollParent)(n.current)
                            })) : (r.currentNode = n.current, (t = "rtl" === c ? r.firstChild() : er(r)) && ((0, z.focusSafely)(t), (0, U.scrollIntoViewport)(t, {
                                containingElement: (0, U.getScrollParent)(n.current)
                            })))
                        }
                        break
                    }
                    case "ArrowRight": {
                        let t = "rtl" === c ? r.previousNode() : r.nextNode();
                        if ("child" === o && t === n.current && (t = null), t) e.preventDefault(), e.stopPropagation(), (0, z.focusSafely)(t), (0, U.scrollIntoViewport)(t, {
                            containingElement: (0, U.getScrollParent)(n.current)
                        });
                        else {
                            if (l.getKeyRightOf(i.key) !== i.key) break;
                            e.preventDefault(), e.stopPropagation(), "cell" === o && "ltr" === c ? ((0, z.focusSafely)(n.current), (0, U.scrollIntoViewport)(n.current, {
                                containingElement: (0, U.getScrollParent)(n.current)
                            })) : (r.currentNode = n.current, (t = "rtl" === c ? er(r) : r.firstChild()) && ((0, z.focusSafely)(t), (0, U.scrollIntoViewport)(t, {
                                containingElement: (0, U.getScrollParent)(n.current)
                            })))
                        }
                        break
                    }
                    case "ArrowUp":
                    case "ArrowDown":
                        !e.altKey && n.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)))
                }
            },
            onFocus: e => {
                if (f.current = i.key, e.target !== n.current) {
                    !(0, V.isFocusVisible)() && t.selectionManager.setFocusedKey(i.key);
                    return
                }
                requestAnimationFrame(() => {
                    "child" === o && document.activeElement === n.current && p()
                })
            }
        });
        return a && (g["aria-colindex"] = (null !== (r = i.colIndex) && void 0 !== r ? r : i.index) + 1), s && null != g.tabIndex && null == g.onPointerDown && (g.onPointerDown = e => {
            let t = e.currentTarget,
                n = t.getAttribute("tabindex");
            t.removeAttribute("tabindex"), requestAnimationFrame(() => {
                t.setAttribute("tabindex", n)
            })
        }), {
            gridCellProps: g,
            isPressed: m
        }
    }

    function er(e) {
        let t, n;
        do(n = e.lastChild()) && (t = n); while (n);
        return t
    }

    function ei(e, t) {
        let {
            key: n
        } = e, r = t.selectionManager, i = (0, U.useId)(), a = !t.selectionManager.canSelectItem(n), o = t.selectionManager.isSelected(n);
        return {
            checkboxProps: {
                id: i,
                "aria-label": (0, j.useLocalizedStringFormatter)($(q), "@react-aria/grid").format("select"),
                isSelected: o,
                isDisabled: a,
                onChange: () => r.select(n)
            }
        }
    }
    q = {
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