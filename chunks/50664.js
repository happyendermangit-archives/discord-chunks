function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTab: function() {
            return u
        },
        useTabList: function() {
            return l
        }
    }), n("222007"), n("781738");
    var r = n("240849"),
        i = n("932165"),
        o = n("884691"),
        s = n("564341");
    let a = new WeakMap;

    function c(e, t, n) {
        "string" == typeof t && (t = t.replace(/\s+/g, ""));
        let r = a.get(e);
        return "".concat(r, "-").concat(n, "-").concat(t)
    }

    function u(e, t, n) {
        var o;
        let {
            key: s,
            isDisabled: a,
            shouldSelectOnPressUp: u
        } = e, {
            selectionManager: d,
            selectedKey: l
        } = t, f = s === l, p = a || t.isDisabled || t.disabledKeys.has(s), {
            itemProps: h,
            isPressed: v
        } = (0, i.useSelectableItem)({
            selectionManager: d,
            key: s,
            ref: n,
            isDisabled: p,
            shouldSelectOnPressUp: u,
            linkBehavior: "selection"
        }), g = c(t, s, "tab"), b = c(t, s, "tabpanel"), {
            tabIndex: m
        } = h, y = t.collection.getItem(s), x = (0, r.filterDOMProps)(null == y ? void 0 : y.props, {
            isLink: !!(null == y ? void 0 : null === (o = y.props) || void 0 === o ? void 0 : o.href),
            labelable: !0
        });
        return delete x.id, {
            tabProps: (0, r.mergeProps)(x, h, {
                id: g,
                "aria-selected": f,
                "aria-disabled": p || void 0,
                "aria-controls": f ? b : void 0,
                tabIndex: p ? void 0 : m,
                role: "tab"
            }),
            isSelected: f,
            isDisabled: p,
            isPressed: v
        }
    }
    class d {
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

    function l(e, t, n) {
        let {
            orientation: c = "horizontal",
            keyboardActivation: u = "automatic"
        } = e, {
            collection: l,
            selectionManager: f,
            disabledKeys: p
        } = t, {
            direction: h
        } = (0, s.useLocale)(), v = (0, o.useMemo)(() => new d(l, h, c, p), [l, p, c, h]), {
            collectionProps: g
        } = (0, i.useSelectableCollection)({
            ref: n,
            selectionManager: f,
            keyboardDelegate: v,
            selectOnFocus: "automatic" === u,
            disallowEmptySelection: !0,
            scrollRef: n,
            linkBehavior: "selection"
        }), b = (0, r.useId)();
        a.set(t, b);
        let m = (0, r.useLabels)({
            ...e,
            id: b
        });
        return {
            tabListProps: {
                ...(0, r.mergeProps)(g, m),
                role: "tablist",
                "aria-orientation": c,
                tabIndex: void 0
            }
        }
    }
}