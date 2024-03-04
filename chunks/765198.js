function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTabListState: function() {
            return o
        }
    }), n("222007");
    var r = n("884691"),
        i = n("880523");

    function o(e) {
        var t;
        let n = (0, i.useSingleSelectListState)({
                ...e,
                suppressTextValueWarning: !0,
                defaultSelectedKey: null !== (t = e.defaultSelectedKey) && void 0 !== t ? t : s(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : new Set)
            }),
            {
                selectionManager: o,
                collection: a,
                selectedKey: c
            } = n,
            u = (0, r.useRef)(c);
        return (0, r.useEffect)(() => {
            let e = c;
            (o.isEmpty || !a.getItem(e)) && null != (e = s(a, n.disabledKeys)) && o.setSelectedKeys([e]), (null != e && null == o.focusedKey || !o.isFocused && e !== u.current) && o.setFocusedKey(e), u.current = e
        }), {
            ...n,
            isDisabled: e.isDisabled || !1
        }
    }

    function s(e, t) {
        let n = null;
        if (e) {
            for (n = e.getFirstKey(); t.has(n) && n !== e.getLastKey();) n = e.getKeyAfter(n);
            t.has(n) && n === e.getLastKey() && (n = e.getFirstKey())
        }
        return n
    }
}