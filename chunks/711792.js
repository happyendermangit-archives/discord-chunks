function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTab: function() {
            return c
        },
        useTabList: function() {
            return d
        }
    });
    var r = n("182823"),
        i = n("148836"),
        a = n("470079"),
        o = n("602607");
    let s = new WeakMap;

    function u(e, t, n) {
        "string" == typeof t && (t = t.replace(/\s+/g, ""));
        let r = s.get(e);
        return `${r}-${n}-${t}`
    }

    function c(e, t, n) {
        var a;
        let {
            key: o,
            isDisabled: s,
            shouldSelectOnPressUp: c
        } = e, {
            selectionManager: l,
            selectedKey: d
        } = t, f = o === d, p = s || t.isDisabled || t.disabledKeys.has(o), {
            itemProps: h,
            isPressed: m
        } = (0, i.useSelectableItem)({
            selectionManager: l,
            key: o,
            ref: n,
            isDisabled: p,
            shouldSelectOnPressUp: c,
            linkBehavior: "selection"
        }), g = u(t, o, "tab"), _ = u(t, o, "tabpanel"), {
            tabIndex: b
        } = h, v = t.collection.getItem(o), y = (0, r.filterDOMProps)(null == v ? void 0 : v.props, {
            isLink: !!(null == v ? void 0 : null === (a = v.props) || void 0 === a ? void 0 : a.href),
            labelable: !0
        });
        return delete y.id, {
            tabProps: (0, r.mergeProps)(y, h, {
                id: g,
                "aria-selected": f,
                "aria-disabled": p || void 0,
                "aria-controls": f ? _ : void 0,
                tabIndex: p ? void 0 : b,
                role: "tab"
            }),
            isSelected: f,
            isDisabled: p,
            isPressed: m
        }
    }
    class l {
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
            orientation: u = "horizontal",
            keyboardActivation: c = "automatic"
        } = e, {
            collection: d,
            selectionManager: f,
            disabledKeys: p
        } = t, {
            direction: h
        } = (0, o.useLocale)(), m = (0, a.useMemo)(() => new l(d, h, u, p), [d, p, u, h]), {
            collectionProps: g
        } = (0, i.useSelectableCollection)({
            ref: n,
            selectionManager: f,
            keyboardDelegate: m,
            selectOnFocus: "automatic" === c,
            disallowEmptySelection: !0,
            scrollRef: n,
            linkBehavior: "selection"
        }), _ = (0, r.useId)();
        s.set(t, _);
        let b = (0, r.useLabels)({
            ...e,
            id: _
        });
        return {
            tabListProps: {
                ...(0, r.mergeProps)(g, b),
                role: "tablist",
                "aria-orientation": u,
                tabIndex: void 0
            }
        }
    }
}