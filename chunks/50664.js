function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTab: function() {
            return l
        },
        useTabList: function() {
            return d
        }
    }), n("222007"), n("781738");
    var r = n("240849"),
        a = n("932165"),
        i = n("884691"),
        o = n("564341");
    let s = new WeakMap;

    function c(e, t, n) {
        "string" == typeof t && (t = t.replace(/\s+/g, ""));
        let r = s.get(e);
        return "".concat(r, "-").concat(n, "-").concat(t)
    }

    function l(e, t, n) {
        var i;
        let {
            key: o,
            isDisabled: s,
            shouldSelectOnPressUp: l
        } = e, {
            selectionManager: u,
            selectedKey: d
        } = t, p = o === d, f = s || t.isDisabled || t.disabledKeys.has(o), {
            itemProps: m,
            isPressed: h
        } = (0, a.useSelectableItem)({
            selectionManager: u,
            key: o,
            ref: n,
            isDisabled: f,
            shouldSelectOnPressUp: l,
            linkBehavior: "selection"
        }), v = c(t, o, "tab"), g = c(t, o, "tabpanel"), {
            tabIndex: y
        } = m, b = t.collection.getItem(o), x = (0, r.filterDOMProps)(null == b ? void 0 : b.props, {
            isLink: !!(null == b ? void 0 : null === (i = b.props) || void 0 === i ? void 0 : i.href),
            labelable: !0
        });
        return delete x.id, {
            tabProps: (0, r.mergeProps)(x, m, {
                id: v,
                "aria-selected": p,
                "aria-disabled": f || void 0,
                "aria-controls": p ? g : void 0,
                tabIndex: f ? void 0 : y,
                role: "tab"
            }),
            isSelected: p,
            isDisabled: f,
            isPressed: h
        }
    }
    class u {
        getKeyLeftOf(e) {
            return this.flipDirection ? this.getNextKey(e) : this.getPreviousKey(e)
        }
        getKeyRightOf(e) {
            return this.flipDirection ? this.getPreviousKey(e) : this.getNextKey(e)
        }
        getKeyAbove(e) {
            return this.getPreviousKey(e)
        }
        getKeyBelow(e) {
            return this.getNextKey(e)
        }
        getFirstKey() {
            let e = this.collection.getFirstKey();
            return null != e && this.disabledKeys.has(e) && (e = this.getNextKey(e)), e
        }
        getLastKey() {
            let e = this.collection.getLastKey();
            return null != e && this.disabledKeys.has(e) && (e = this.getPreviousKey(e)), e
        }
        getNextKey(e) {
            do null == (e = this.collection.getKeyAfter(e)) && (e = this.collection.getFirstKey()); while (this.disabledKeys.has(e));
            return e
        }
        getPreviousKey(e) {
            do null == (e = this.collection.getKeyBefore(e)) && (e = this.collection.getLastKey()); while (this.disabledKeys.has(e));
            return e
        }
        constructor(e, t, n, r = new Set) {
            this.collection = e, this.flipDirection = "rtl" === t && "horizontal" === n, this.disabledKeys = r
        }
    }

    function d(e, t, n) {
        let {
            orientation: c = "horizontal",
            keyboardActivation: l = "automatic"
        } = e, {
            collection: d,
            selectionManager: p,
            disabledKeys: f
        } = t, {
            direction: m
        } = (0, o.useLocale)(), h = (0, i.useMemo)(() => new u(d, m, c, f), [d, f, c, m]), {
            collectionProps: v
        } = (0, a.useSelectableCollection)({
            ref: n,
            selectionManager: p,
            keyboardDelegate: h,
            selectOnFocus: "automatic" === l,
            disallowEmptySelection: !0,
            scrollRef: n,
            linkBehavior: "selection"
        }), g = (0, r.useId)();
        s.set(t, g);
        let y = (0, r.useLabels)({
            ...e,
            id: g
        });
        return {
            tabListProps: {
                ...(0, r.mergeProps)(v, y),
                role: "tablist",
                "aria-orientation": c,
                tabIndex: void 0
            }
        }
    }
}